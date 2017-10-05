function isValid(){
  var u = false;
   do{
		var targetNum = prompt('Ingresa el numero de tu Tarjeta');
		for (i=0;i<targetNum.length;i++){
 		if ( targetNum[i]===' '){
 			u = true;
 			alert('Ingrese un numero sin espacios Vacios');
		    break;
		} 
	}
	}while( u === true);

  //preguntar el numero de la targeta pasar orden inverso
    var str = targetNum;
    var correctNum=[];//Arreglo vacio, para pushear el numero ingresado en orden Inverso. 
//comprobar que el numero de la tarjeta si es un numero, y no tiene espacios vacios

//retonar el numero del array alrevez
    var res = str.split("");
    for (var i = 0; i < res.length; i++) {
          var item = res.pop();
          res.splice(i, 0, item);
    }
//for para volver  el str ingresado a un Array de numeros
    for(i=0;i< res.length;i++){
          correctNum.push(parseInt(res[i]));
    }

//___________________________________________________________-
// SACAR NUMERO  DE POSICIONES PARES E IMPARES y ejecutar algoritmo de Luhn.
//corregir!!!

    console.log (correctNum);
    for (var j=0;j<correctNum.length; j++) {
        var suma = 0;
        var pairs=0;
        if(correctNum[j]%2!== 0){
        suma += (correctNum[j]);
        }else if (correctNum[j]%2=== 0){
            if(correctNum[j]*2>=10){
             //suma+=((correctNum[j]-10)+1)
            suma+=((correctNum[j]%10)+(parseInt(correctNum[j]/10)));
            }else{          
            suma+=(correctNum[j]*2);
            }
         }
         
    if ((suma % 10) === 0){
    alert('VALIDA');
    }else{
    alert('inVALIDA');
    break;
    }
  }
}
isValid()
