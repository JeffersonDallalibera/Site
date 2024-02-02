/*function chamafoto() {
  console.log("chamou a função");
  var img = document.createElement("IMG");
  img.src = "./img/luiza.jpg";
  img.style.alignContent = "center";
  img.style.width = "450";
  img.style.height = "450px";
  img.style.marginLeft = "auto";
  img.style.marginRight = "auto";
  img.style.display = "block";
  img.style.aling = "center";
  document.getElementById("imagens").appendChild(img);
  criaMensagem();

}

criaMensagem = () => {
  //criar mensagem para inserir abaixo da imagem
  var msg = document.createElement("P");
  msg.innerHTML =
    "<br>Luiza,<br> <br> ";
  msg.style.textAlign = "center";
  msg.style.fontSize = "20px";
  msg.style.fontFamily = "Arial";
  msg.style.color = "black";
  msg.style.marginLeft = "auto";
  msg.style.marginRight = "auto";
  msg.style.display = "block";
  msg.style.aling = "center";
  document.getElementById("imagens").appendChild(msg);

  criaBotao();
};
criaBotao = () => {
  //botao para chamar para um encontrinho
  var botao = document.createElement("BUTTON");
  botao.innerHTML = "Quer sair comigo?";
  botao.style.textAlign = "center";
  botao.style.fontSize = "20px";
  botao.style.fontFamily = "Arial";
  botao.style.color = "white";
  botao.style.marginLeft = "auto";

  botao.style.marginRight = "auto";
  botao.style.display = "block";
  botao.style.aling = "center";
  botao.style.backgroundColor = "black";
  botao.style.border = "none";
  botao.style.borderRadius = "10px";
  botao.style.padding = "10px";
  botao.style.marginTop = "10px";
  botao.style.marginBottom = "10px";
  botao.style.marginLeft = "auto";
  botao.style.marginRight = "auto";
  botao.style.display = "block";
  botao.style.aling = "center";

  botao.onclick = function () {
    alert("Sexta as 20h?");
  };
  document.getElementById("imagens").appendChild(botao);
};
*/
document.addEventListener("DOMContentLoaded", function() {
  const yesButton = document.getElementById("yesButton");

  yesButton.addEventListener("click", function() {
      const whatsappLink = "https://api.whatsapp.com/send?phone=+5549991198111&text=Oi,%20vamo%20quando?";
      window.location.href = whatsappLink;
  });
});
