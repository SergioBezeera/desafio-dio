let nomeHeroi
let nivel

nomeHeroi= prompt("Informe o nome do Herói: ")
console.log(nomeHeroi)
nivel = prompt(nomeHeroi+" informe seu nivel para sabermos seu ranque!!!")
console.log(nivel)

switch (nivel){
    case (nivel<1000):
        console.log(nomeHeroi+" o nivel de Herói "+nivel+", então é Ferro");
        break;

     case (nivel>=1001 || nivel<=2000):
        console.log(nomeHeroi+" o nivel de Herói é "+nivel+", então é Bronze");
        break;
 }
