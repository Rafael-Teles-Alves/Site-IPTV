
// funçoes de enviar mesagem conforme plano

function enviarWhat1() {
    var numeroTelefone = '+5511941365448'; 
    var mensagem = "Olá, gostaria de assinar o plano de R$30/mês :";
  
    var url = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
    window.open(url, '_blank');
}



function enviarWhat2() {
    var numeroTelefone = '+5511941365448'; 
    var mensagem = "Olá, gostaria de assinar o plano de R$80/mês:";
    var url = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
    window.open(url, '_blank');
}



function enviarWhat3() {
    var numeroTelefone = '+5511941365448'; 
    var mensagem = "Olá, gostaria de assinar o plano de R$330/mês:";
    var url = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
    window.open(url, '_blank');
}
