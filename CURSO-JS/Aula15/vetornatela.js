let valores = [8, 1, 7, 4, 2, 9]

for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//Outro jeito de fazer a mesma coisa
console.log('Fazendo de outro jeito')


for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}