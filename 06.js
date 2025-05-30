function ehPalindromo(palavra) {
    return str.split('').reverse().join('');
  }
  
  let FraseAntes = "Thiago é top demaisss 😎👌";
  let fraseDepois = ehPalindromo(FraseAntes);
  
  console.log(fraseDepois); 