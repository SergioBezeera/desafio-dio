let nomeHeroi
let nivel

nomeHeroi= prompt("Informe o nome do Herói: ")
console.log(nomeHeroi)
nivel = prompt(nomeHeroi+" informe seu nivel para sabermos seu ranque!!!")
console.log(nivel)

switch (nivel){
    case (nivel<=1000):
        console.log(nomeHeroi+" o nivel de Herói "+nivel+", então é Ferro");
        break;

     case (nivel>=1001 || nivel<=2000):
        console.log(nomeHeroi+" o nivel de Herói é "+nivel+", então é Bronze");
        break;

    case (nivel>=2001 || nivel<=5000):
        console.log(nomeHeroi+" o nivel de Herói é "+nivel+", então é Prata");
        break;
        
    case (nivel>=5001 || nivel<=7000):
        console.log(nomeHeroi+" o nivel de Herói é "+nivel+", então é Ouro");
        break;

    case (nivel>=7001 || nivel<=8000):
        console.log(nomeHeroi+" o nivel de Herói é "+nivel+", então é Platina");
        break;

    case (nivel>=8001 || nivel<=9000):
        console.log(nomeHeroi+" o nivel de Herói é "+nivel+", então é Ascendente");
         break;

    case (nivel>=9001 || nivel<=10000):
        console.log(nomeHeroi+" o nivel de Herói é "+nivel+", então é Imortal");
        break;

    case (nivel>=10001):
        console.log(nomeHeroi+" o nivel de Herói é "+nivel+", então é Radiante");
        break;

 }

