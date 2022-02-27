function chamafoto(){
    console.log("chamou a função")
    var img = document.createElement("IMG");
    img.src = "./img/sophi.jpg";
    img.style.alignContent ="center";
    img.style.width = "450";
    img.style.height = "450px";
    document.getElementById('imagens').appendChild(img);
    alert("A moça da foto ainda vai namorar comigo!");
}
