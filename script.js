let valorDol= document.querySelector(".formulariopreciodolar")


// ----------------STEAM---------------------

let valor=document.querySelector(".formulariopreciosteam")
let total=document.querySelector(".tarjeta__total__steam");

valor.addEventListener('keyup',()=>{
    let calculo=0
    

    calculo=valor.value*1.7146
    console.log(calculo);
            
    total.innerHTML=` ${calculo.toFixed(2)} ARS`
})

// ----------------XBOX---------------------

let valor1=document.querySelector(".formularioprecioxbox")
let total1=document.querySelector(".tarjeta__total__xbox");

valor1.addEventListener('keyup',()=>{
    let calculo=0
    

    calculo=valor1.value*1.7146
    console.log(calculo);
            
    total1.innerHTML=` ${calculo.toFixed(2)} ARS`
})

// ----------------UBISOFT---------------------

let valor2=document.querySelector(".formularioprecioubi")
let total2=document.querySelector(".tarjeta__total__ubi");

valor2.addEventListener('keyup',()=>{
    let calculo=0
    

    calculo=valor2.value*1.27
    console.log(calculo);
            
    total2.innerHTML=` ${calculo.toFixed(2)} ARS`
})

// ----------------BATTLE.NET---------------------

let valor3=document.querySelector(".formulariopreciobattle")
let total3=document.querySelector(".tarjeta__total__battle");

valor3.addEventListener('keyup',()=>{
    let calculo=0
    

    calculo=valor3.value*1.7146
    console.log(calculo);
    

    total3.innerHTML=` ${calculo.toFixed(2)} ARS`
})

// ----------------EPIC---------------------

let valor4=document.querySelector(".formularioprecioepic")
let total4=document.querySelector(".tarjeta__total__epic");

valor4.addEventListener('keyup',()=>{
    let calculo=0
    

    calculo=valor4.value*valorDol.value*1.7146
    console.log(calculo);
    

    total4.innerHTML=` ${calculo.toFixed(2)} ARS`
})

// ----------------PS---------------------

let valor5=document.querySelector(".formulariopreciops")
let total5=document.querySelector(".tarjeta__total__ps");

valor5.addEventListener('keyup',()=>{
    let calculo=0
    

    calculo=valor5.value*valorDol.value*1.7146
    console.log(calculo);
    

    total5.innerHTML=` ${calculo.toFixed(2)} ARS`
})

// ----------------GPLAY---------------------

let valor6=document.querySelector(".formulariopreciogplay")
let total6=document.querySelector(".tarjeta__total__gplay");

valor6.addEventListener('keyup',()=>{
    let calculo=0
    

    calculo=valor6.value*valorDol.value*1.7146
    console.log(calculo);
    

    total6.innerHTML=` ${calculo.toFixed(2)} ARS`
})

// ----------------NINTENDO---------------------

let valor7=document.querySelector(".formularioprecionintendo")
let total7=document.querySelector(".tarjeta__total__nintendo");

valor7.addEventListener('keyup',()=>{
    let calculo=0
    

    calculo=valor7.value*valorDol.value*1.7146
    console.log(calculo);
    

    total7.innerHTML=` ${calculo.toFixed(2)} ARS`
})



