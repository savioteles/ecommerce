package br.gov.ufg.utils;

import java.io.*;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

public class FileUtils {

    public static void gravarArquivo(String caminhoArquivo, List<String> linhas) throws IOException {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(caminhoArquivo))) {
            for (String linha : linhas) {
                writer.write(linha);
                writer.newLine();
            }
        }
    }

    public static List<String> lerArquivo(String caminhoArquivo) throws IOException {
        List<String> linhas = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(caminhoArquivo))) {
            String linha;
            while ((linha = reader.readLine()) != null) {
                linhas.add(linha);
            }
        }
        return linhas;
    }

    public static void atualizarArquivo(String caminhoArquivo, List<String> novasLinhas) throws IOException {
        List<String> linhasExistente = lerArquivo(caminhoArquivo);
        linhasExistente.addAll(novasLinhas);
        gravarArquivo(caminhoArquivo, linhasExistente);
    }
}