//preguntar el numero de la targeta 
var targetNum = prompt('ingresa tu numero de Tarjeta');
var str = targetNum;
var correctNum=[];//Arreglo vacio, para pushear los datos 
//comprobar que el numero de la tarjeta si es un numero, y no tiene espacios vacios
//y son solo 9 dijitos.

//retonar el numero del array alrevez
var res = str.split("");
for (var i = 0; i < res.length; i++) {
  var item = res.pop();
  res.splice(i, 0, item);
}
for(i=0;i< res.length;i++){
  correctNum.push(parseInt(res[i]));
  }
//for para volver numeros
//Preguntar numero de tarjeta y pasar orden inverso ARRIBA BIENNN
// SACAR NUMERO  DE POSICIONES PARES E IMPARES 
console.log (correctNum);//numero de  alrevez
var suma = 0;
var pairs=0;
a=[];
for (var i=0;i<correctNum.length; i++) {
      if(correctNum[i]%2!== 0){
       suma += (correctNum[i]);
       }else if (correctNum[i]%2=== 0){
         if(correctNum[i]*2>=10){
          suma+=((correctNum[i]%10)+(parseInt(correctNum[i]/10)));
           }else{          
            suma+=(correctNum[i]*2);
            }
         }

}
if ((suma % 10) === 0){
  alert('VALIDA');
}else{
alert('inVALIDA');
}
