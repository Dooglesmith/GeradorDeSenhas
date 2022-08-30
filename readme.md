# Projetinho de criação de senha segura para o cliente
Neste projeto, segui um tutorial do Matheus Battisti, do canal Hora de Codar

## Desafios do projeto

<li> Gerar os caracteres para formar a senha </li>
<li> Escrever uma função que retorne uma senha nova para o usuário </li>

``` 
for (i = 0; i < passwordLength; i = i + generators.length) {
    /* Executa as 4 funções (generators.length), gerando 4 caracteres de cada função em cada run */
    generators.forEach(() => {
      //Sorteia uma função e armazena o valor dela na variável 'password'
      const randomValue = generators[Math.floor(Math.random() * generators.length)]();
      password += randomValue;
    })
  }
``` 