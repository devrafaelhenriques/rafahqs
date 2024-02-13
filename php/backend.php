<?php
// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];
    
    // Aqui você pode fazer validações adicionais, como verificar se os campos estão preenchidos corretamente
    
    // Agora você pode enviar os dados para o seu destino desejado, como salvar em um banco de dados ou enviar por email
    
    // Exemplo de envio de email
    $to = "rafahqsm@gmail.com";
    $subject = "Nova mensagem do formulário de contato";
    $body = "Nome: $nome\nEmail: $email\nMensagem: $mensagem";
    
    // Envia o email
    mail($to, $subject, $body);
    
    // Redireciona o usuário de volta para o seu site
    header("Location: obrigado.html");
    exit;
}
?>
