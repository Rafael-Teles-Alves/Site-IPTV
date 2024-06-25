
// funçoes de enviar mesagem conforme plano

function enviarWhat1() {
    var numeroTelefone = '+5511941365448'; 
    var mensagem = "Olá, gostaria de assinar o PLANO MENSAL R$30/ Por Mês :";
  
    var url = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
    window.open(url, '_blank');
}



function enviarWhat2() {
    var numeroTelefone = '+5511941365448'; 
    var mensagem = "Olá, gostaria de assinar o PLANO TRIMESTRAL R$80/Por 3 Mês:";
    var url = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
    window.open(url, '_blank');
}



function enviarWhat3() {
    var numeroTelefone = '+5511941365448'; 
    var mensagem = "Olá, gostaria de assinar o PLANO ANUAL R$330/ Por 12 mês:";
    var url = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
    window.open(url, '_blank');
}
