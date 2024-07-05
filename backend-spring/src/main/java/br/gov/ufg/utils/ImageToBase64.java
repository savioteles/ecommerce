package br.gov.ufg.utils;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Base64;

public class ImageToBase64 {
    public static void main(String[] args) {
        try {
            // Caminho para a imagem
            String imagePath = "C:\\projetos\\api\\src\\main\\resources\\imagens\\calca_jeans.png";

            // Ler a imagem como um array de bytes
            byte[] imageBytes = Files.readAllBytes(Paths.get(imagePath));

            // Converter o array de bytes para Base64
            String imageBase64 = Base64.getEncoder().encodeToString(imageBytes);

            System.out.println(imageBase64);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

