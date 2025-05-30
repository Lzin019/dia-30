function inverterString(str) {
    return str.split('').reverse().join('');
  }
  
  let FraseAntes = "Thiago é top demaisss 😎👌";
  let fraseDepois = inverterString(FraseAntes);
  
  console.log(fraseDepois); 