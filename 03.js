function maiorDeTres(a, b, c) {
let valores = [a, b, c];
let i = 0;
let maior = valores[0];

while(i < valores.length) {
    if(valores[i] > maior){
        maior = valores[i];
    }
    i++
}console.log(maior)
}


maiorDeTres(5, 9, 2);
maiorDeTres(-3, -7, -1);