function areaCuadrado(){
    let lado1=document.getElementById("areaCuadrado-lado1").value;
    let lado2=document.getElementById("areaCuadrado-lado2").value;
    let result=lado1*lado2;
    document.getElementById("result-areaCuadrado").innerHTML=result;
    
}
let sendData= document.getElementById("SendData");
sendData.addEventListener("click",areaCuadrado);