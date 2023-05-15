 //Encontrar numero mayor del Array

 var arr = [5,4,9,101,55,66,79,100]
 
 
function Operaciones(){

    if(arr.length === 0){
        console("null");
    }else if(arr.length === 1){
        console.log(arr[0]);
    }else if(arr.length>=2){

    var num1=0;
        for (let i=0; i<=arr.length; i++){
            if (num1 < arr[i]){
                (num1 = arr[i])
            }
        }   
    

    let cont1 = 0;
    let arr01=[];
        while(cont1 < arr.length){
            arr01.push(arr[cont1]);
            cont1++
        }
   

    let num2=0;
    var cantida_impar=0;
        i = 0;
        do{
            num2 = arr[i];
            if(num2 % 2 != 0){
             cantida_impar++;
             }
            i++;
        }while(i < arr.length);

    return console.log(`El numero mayor del Array es: ${num1} El array esta compuesto por: ${arr01} y tiene: ${cantida_impar} numeros impares` );
    }
 }
Operaciones(arr);
