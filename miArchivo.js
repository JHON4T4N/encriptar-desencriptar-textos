//agregando evento al boton de encriptar
const formulario =document.querySelector("#formulario");
formulario.addEventListener("submit",validando);

//agregando evento al boton desencriptar
const btndesencriptar =document.querySelector(".button2");
btndesencriptar.addEventListener("click",validando2);

//agregando evento al boton copiar
const btncopiar =document.querySelector(".button3");
btncopiar.addEventListener("click",copytext);


let i ; //indice para recorrer vector reglas
let y; //indice para recorrer vector desencriptador

//funcion que copia el texto
function copytext(t){
t.preventDefault()
//console.log("copiando");
let content = document.getElementById('respuesta');
    content.select();
    let successful = document.execCommand('copy');
    //console.log("esto fue lo que se copio:"+content)
}

//funcion que encripta usando array 
function validando(e){
    e.preventDefault();
    //console.log("funcionando")
    let frase = document.querySelector("#id1").value;
    //console.log(frase)
    frase=frase.toLowerCase()
    let arr= frase.split('');//convierto la cadena en array
    let texto_nuevo="";
    const Vector_encripta=["ai","enter","imes","ober","ufat"];//vector que tiene las encriptaciones
    //console.log(arr);

    
    for(i=0;i<arr.length;i++){
       
       
        if(arr[i].includes("a")===true){          
            texto_nuevo=texto_nuevo+Vector_encripta[0];
                  
        }else if(arr[i].includes("e")===true){
           
            texto_nuevo=texto_nuevo+Vector_encripta[1];
        }
        else if(arr[i].includes("i")===true){
            
            texto_nuevo=texto_nuevo+Vector_encripta[2];
        }
        else if(arr[i].includes("o")===true){
            
            texto_nuevo=texto_nuevo+Vector_encripta[3];
        }
        else if(arr[i].includes("u")===true){
            
            texto_nuevo=texto_nuevo+Vector_encripta[4];
        }
        else{
            texto_nuevo=texto_nuevo+arr[i];
            
        }
             
      
        
    }

    texto_nuevo=texto_nuevo.toLowerCase();
    //para mostrar en el mismo formulario
    const respuesta =document.getElementById("respuesta")
    respuesta.textContent=`${texto_nuevo}`;
}

// funcion que desencripta la frase encriptada aqui se usa el metodo replace en cadenas
function validando2(x){
    x.preventDefault();
    let ax = document.querySelector("#id1").value;
let ix;
let aux1=ax.toLowerCase();
for(ix=0; ix<ax.length; ix++){
       aux1= aux1.replace("ai","a");
    aux1=aux1.replace("enter","e");
    aux1=aux1.replace("imes","i");
    aux1=aux1.replace("ober","o");
    aux1=aux1.replace("ufat","u");
}


//para mostrar en el mismo formulario la cadena desencriptada
const respuestax =document.getElementById("respuesta")
respuestax.textContent=`${aux1}`;
    
}