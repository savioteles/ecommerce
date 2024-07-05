package br.gov.ufg.api;

import br.gov.ufg.entity.Produto;
import br.gov.ufg.utils.FileUtils;
import org.apache.tomcat.util.codec.binary.Base64;

import java.io.*;
import java.math.BigDecimal;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) throws IOException, URISyntaxException {

        // caminho relativo
        String fileName = "database/produtos.txt";

        // Tentar obter o caminho do arquivo como um recurso
        java.net.URL resource = Main.class.getClassLoader().getResource(fileName);
        if (resource != null) {
            try {

                // Converter URL para URI e obter o caminho absoluto
                java.nio.file.Path caminhoArquivoAbsoluto = Paths.get(resource.toURI());
                // Imprimir o caminho absoluto
                System.out.println("Caminho absoluto do arquivo: " + caminhoArquivoAbsoluto);

                // Ler linhas do arquivo usando o caminho absoluto
                List<String> linhas = Files.readAllLines(caminhoArquivoAbsoluto);
                // Imprimir o conteúdo do arquivo
                //linhas.forEach(System.out::println);
            } catch (URISyntaxException | IOException e) {
                System.out.println("Erro ao ler o arquivo: " + e.getMessage());
            }
        } else {
            System.out.println("Arquivo não encontrado!");
        }



        try {
            Path imagePath = Paths.get("C:\\projetos\\api\\src\\main\\resources\\imagens\\calca_jeans.png");
            byte[] imagemBytes = Files.readAllBytes(imagePath);
            //System.out.println("\nImage as byte : " + imagemBytes);
        } catch (IOException e) {
            e.printStackTrace();
            // Tratar o erro de leitura da imagem aqui
        }
    }
}
