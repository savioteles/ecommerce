# Guia de Configuração do Projeto Spring Boot

Este guia fornece instruções para baixar o projeto, importá-lo no IntelliJ IDEA e configurar as dependências utilizando o Maven.



## 1. Baixando o Projeto

```markdown
Para clonar o repositório do projeto, siga os passos abaixo:

1. Abra seu terminal.
2. Navegue até o diretório onde você deseja clonar o projeto.
3. Execute o comando:

```bash
git clone https://github.com/POO-2024-1/api.git
```

## 2. Importando o Projeto no IntelliJ IDEA

Siga os passos abaixo para importar o projeto no IntelliJ IDEA:

1. Abra o IntelliJ IDEA.
2. Clique em **File > Open...**.
3. Navegue até o diretório onde você clonou o repositório (`api`) e selecione a pasta.
4. Clique em **OK**.
5. O IntelliJ IDEA reconhecerá automaticamente o projeto como um projeto Maven. Se isso não ocorrer, certifique-se de que o arquivo `pom.xml` está presente no diretório raiz do projeto.

## 3. Configurando e Rodando as Dependências com Maven

### 1ª opção

1. No IntelliJ, abra a aba `Maven`.  ![Símbolo Maven no IntelliJ IDEA](https://github.com/POO-2024-1/api/blob/master/maven_logo.png)

2. Expanda o diretório do projeto e navegue até `Lifecycle`. 

   ![Opções Maven no IntelliJ IDEA](https://github.com/POO-2024-1/api/blob/master/maven_opcoes.png)

3. Clique duas vezes em `install` para baixar e instalar todas as dependências do projeto.

### 2ª opção

Para configurar e rodar as dependências do projeto utilizando Maven, siga os passos abaixo:

1. No IntelliJ IDEA, abra o **Terminal** integrado ou use seu terminal favorito.
2. Navegue até o diretório do projeto (`api`).
3. Execute o comando Maven para baixar e instalar as dependências:

```bash
mvn clean install
```

4. Após a execução bem-sucedida do comando acima, todas as dependências necessárias serão baixadas e instaladas.

## 4. Rodando o Projeto

Para rodar o projeto, siga os passos abaixo:

1. No IntelliJ IDEA, abra o arquivo principal da aplicação Spring Boot. Este arquivo está localizado em `src/main/java` **pacote 'br.gov.ufg' > Classe 'ApiApplication'** e possui a anotação `@SpringBootApplication`.
2. Clique com o botão direito no arquivo e selecione **Run 'ApiApplication'**. Alternativamente, você pode clicar no ícone de play que aparece ao lado do nome da classe.

O projeto será iniciado e você deverá ver mensagens de log no console indicando que a aplicação Spring Boot foi iniciada com sucesso.

## 5. Acessando a API

Depois de iniciar a aplicação, você pode acessar os endpoints da API utilizando uma ferramenta como Postman ou diretamente pelo seu navegador. As URL's base padrão para a aplicação serão:

```
http://localhost:8080/listarProdutoById/{id}
```

```
http://localhost:8080/listarProdutos