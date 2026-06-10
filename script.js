function mostrarPratos(){
    //Matriz//
    pratos=["Lasanha", "Pizza", "Risoto", "Nhoque", "Ravioli"];
    //div resultado
    let resultado= document.getElementById("resultado");
    resultado.innerHTML="";

//percorrer a matriz
for (let i=0; i<pratos.length;i++){
    resultado.innerHTML+="<p>" + pratos[i]+"</p>";
}}