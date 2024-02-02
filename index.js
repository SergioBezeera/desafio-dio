let nomeHeroi
let nivel
let repetir

do{
    nomeHeroi= prompt("Informe o nome do Herói: ")
    console.log(nomeHeroi)
    nivel = prompt(nomeHeroi+" informe seu nivel para sabermos seu ranque!!!")
    console.log(nivel)
    
    if(nivel<=1000){
        alert(nomeHeroi+" o nivel de Herói "+nivel+", então é Ferro");
    
    }
    
    else if (nivel<=2000){
       alert(nomeHeroi+" o nivel de Herói é "+nivel+", então é Bronze");
    }
    
    else if (nivel<=5000){
     alert(nomeHeroi+" o nivel de Herói é "+nivel+", então é Prata");
    
    }
    
    else if (nivel<=7000){
       alert(nomeHeroi+" o nivel de Herói é "+nivel+", então é Ouro");
    
    }
    
    else if (nivel<=8000){
       alert(nomeHeroi+" o nivel de Herói é "+nivel+", então é Platina");
    
    }
    
    else if (nivel<=9000){
       alert(nomeHeroi+" o nivel de Herói é "+nivel+", então é Ascendente");
    
    }
    
    else if (nivel<=10000){
       alert(nomeHeroi+" o nivel de Herói é "+nivel+", então é Imortal")
    }
    
    else{
       alert(nomeHeroi+" o nivel de Herói é "+nivel+", então é Radiante")
    }

   repetir=prompt("1.Sim /n 2.Não")

}while(repetir == 1)
