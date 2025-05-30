function cumprimentar(nome) {
    let resultado = (`Óla, ${nome}!!! Seja Bem Vindo!, agora são ${horaAtual()} do dia ${diaAtual()}`);
    console.log(resultado)
}


function horaAtual(){
    const agora = new Date();
    return agora.toLocaleTimeString();
console.log(horaAtual());
}


function diaAtual(){
    const agora = new Date();
    return agora.toLocaleDateString();
    console.log(diaAtual());
}


cumprimentar('Luiz😿🐦‍⬛');
cumprimentar('Fernando🤪');
cumprimentar('Lucas💪🏼');