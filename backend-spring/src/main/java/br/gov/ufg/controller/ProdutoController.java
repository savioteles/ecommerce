package br.gov.ufg.controller;

import br.gov.ufg.dto.ProdutoDTO;
import br.gov.ufg.entity.Produto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class ProdutoController {

    @GetMapping("/listarProdutos")
    public List<Produto> listar() {

        List<Produto> produtos = new ArrayList<>();

        try {
            produtos = ProdutoDTO.lerProdutosDoArquivo();
        } catch (URISyntaxException | IOException e) {
            System.out.println("Não foi possível abrir o arquivo de produtos: " + e);
            throw new RuntimeException("Não foi possível abrir o arquivo de produtos");
       }
        return produtos;
    }

    @GetMapping("/listarProdutoById/{id}")
    public ResponseEntity<Produto> obterProdutoPorId(@PathVariable Integer id) {

        List<Produto> produtos;
        try {
            produtos = ProdutoDTO.lerProdutosDoArquivo();

        } catch (URISyntaxException | IOException e) {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        Produto produto = produtos.stream()
                .filter(prod -> prod.getId().equals(id))
                .findFirst()
                .orElse(null);

        if (produto == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(produto, HttpStatus.OK);
        }
    }
}
