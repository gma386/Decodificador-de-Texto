function criptografar(){
    let eCriptografar = document.getElementById("criptografar");
    let elemento = eCriptografar.value;
    let newElemento = '';
    for(let i=0; i<elemento.length; i++){
        if(elemento[i] == 'e'){
            newElemento += 'enter';
        } else if(elemento[i] == 'i'){
            newElemento += 'imes'
        } else if(elemento[i] == 'a'){
            newElemento += 'ai'
        } else if(elemento[i] == 'o'){
            newElemento += 'ober'
        } else if(elemento[i] == 'u'){
            newElemento += 'ufat'
        } else {
            newElemento += elemento[i];
        }
    }

    let eDescriptografar = document.getElementById("descriptografar");
    eDescriptografar.value = newElemento;
    eCriptografar.value = '';
    return;
}

function descriptografar(){
    let eDescriptografar = document.getElementById("descriptografar");
    let elemento = eDescriptografar.value;

    let newElemento = elemento.split(' ');
    newElemento.forEach((e, index)=>{
        newElemento[index] = e.replace(/enter/g , 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
    })      
    newElemento = newElemento.join(' ');

    let eCriptografar = document.getElementById("criptografar");
    eCriptografar.value = newElemento;
    eDescriptografar.value = '';
    return;
}