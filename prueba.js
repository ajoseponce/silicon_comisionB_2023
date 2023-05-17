//sumatoria de todos los valores del arreglo
//promedio de todos los valores
//mayor numero
//menor numero
//pares e impares

// aca este tecxto no esta en la otra version

//Nuevo comentario por Natalia Quenan 

var edades=[20,50,6,84,12,10,78,33,30,21,1,0,73]
var i=0
var max=edades[0],min=edades[0],suma=0,prom


for(i=0;i<edades.length;i++){
    suma=suma+edades[i]
    if(edades[i]>max){
        max=edades[i]
    }
    if(edades[i]<min){
        min=edades[i]
    }
}

prom=suma/edades.length

console.log(edades.length)
console.log(max)
console.log(min)
console.log(suma)
console.log(prom)
console.log(pares(edades))
console.log(edades.length-pares(edades))

function pares(ages){
    var i,cont=0

    for(i=0;i<ages.length;i++){
        if(ages[i]%2==0){
            cont++
        }
    }
    return (cont)
}