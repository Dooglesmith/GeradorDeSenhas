//Seleção de elementos
const generatePasswordButton = document.querySelector('#generate-password');
const generatedPasswordElement = document.querySelector("#generated-password");

// Funções
// Gerar letras minúsculas
const getLetterLowerCase = () => {
  /* Selecionar da tabela de caracteres um número aleatório entre 0 e 25 (letras do alfabeto) somado com o número que corresponde ao inicio das caracteres com letra minuscula na tabela */
  return(String.fromCharCode(Math.floor(Math.random() * 26) + 97))
};

//Gerar letras maiúsculas
const getLetterUpperCase = () => {
  /* Mesmo método, mas começando das letras maiusculas da tabela de caracteres */
  return(String.fromCharCode(Math.floor(Math.random() * 26) + 65))
};

//Gerar números de 0 a 9
const getNumber = () => {
  return (Math.floor(Math.random() * 10)).toString();
}

//Simbolos
const getSymbol = () => {
  const symbols = "(){}[]=<>/,.!@#$%&*+-"
  //Strings são objetos, e objetos tem indices
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
  let password = ""

  const passwordLength = 10

  /* */
  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  ]

  /* O for é misterioso ainda pra mim, mas vou tentar explicar */
  /* 0 1 2 3 na primeira run, 4 5 6 7 segunda run, 8 9, terceira run */
  for (i = 0; i < passwordLength; i = i + generators.length) {
    console.log(i)
    /* Executa 3 funções 4 vezes(generators.length), gerando 4 caracteres de cada função em cada run */
    generators.forEach(() => {
      //Sorteia uma função e armazena o valor dela na variável 'password'
      const randomValue = generators[Math.floor(Math.random() * generators.length)]();
      console.log(generators[Math.floor(Math.random() * generators.length)])
      password += randomValue;
    })
  }
  console.log(password)
  /* Recortando a senha gerada para ter exatamente 10 caracteres */
  password = password.slice(0, passwordLength)

  /* Exibimos a caixinha para mostrar a senha e passamos o valor para o h4*/
  generatedPasswordElement.style.display = "block"
  generatedPasswordElement.querySelector("h4").innerText = password;
}

// Eventos
generatePasswordButton.addEventListener('click', () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  )
});