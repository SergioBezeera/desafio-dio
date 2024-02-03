let nome
let nivel
let repetir
let sexo

do{

   sexo = prompt("Você prefere se chamado por (informe com a letra maiuscula): \n\nM-ele/dele\n\nF-ela/dela\n\nNHUM-prefiro não comentar")

    
    switch (sexo){
      case "M":
          nome=prompt("Caro Herói me informe seu nome: ")
          console.log(nome)
          nivel=prompt("Guerreiro "+nome+" me informe seu nivel por gentileza:")
          console.log(nivel)
  
          if(nivel<=1000){
            alert(nome+" o nivel de Herói "+nivel+", então é Ferro");
          }
          
          
          else if (nivel<=2000){
            alert(nome+" o nivel de Herói é "+nivel+", então é Bronze");
          }
          
          else if (nivel<=5000){
            alert(nome+" o nivel de Herói é "+nivel+", então é Prata");
          }
          
          else if (nivel<=7000){
            alert(nome+" o nivel de Herói é "+nivel+", então é Ouro");
          }
          
          else if (nivel<=8000){
            alert(nome+" o nivel de Herói é "+nivel+", então é Platina");
          }
          
          else if (nivel<=9000){
            alert(nome+" o nivel de Herói é "+nivel+", então é Ascendente");
          }
          
          else if (nivel<=10000){
            alert(nome+" o nivel de Herói é "+nivel+", então é Imortal")
          }
          
          else{
            alert(nome+" o nivel de Herói é "+nivel+", então é Radiante")
          }

          break;
  
          case "F":
              nome=prompt("Caro Heróina me informe seu nome: ")
              console.log(nome)
              nivel=prompt("Guerreiro "+nome+" me informe seu nivel por gentileza:")
              console.log(nivel)
      
              if(nivel<=1000){
                  alert(nome+" o nivel de Heroína "+nivel+", então é Ferro");
              }
              
              else if (nivel<=2000){
                 alert(nome+" o nivel de Heroína é "+nivel+", então é Bronze");
              }
              
              else if (nivel<=5000){
               alert(nome+" o nivel de Heroína é "+nivel+", então é Prata");
              
              }
              
              else if (nivel<=7000){
                 alert(nome+" o nivel de Heroína é "+nivel+", então é Ouro");
              
              }
              
              else if (nivel<=8000){
                 alert(nome+" o nivel de Heroína é "+nivel+", então é Platina");
              
              }
              
              else if (nivel<=9000){
                 alert(nome+" o nivel de Heroína é "+nivel+", então é Ascendente");
              
              }
              
              else if (nivel<=10000){
                 alert(nome+" o nivel de Heroína é "+nivel+", então é Imortal")
              }
              
              else{
                 alert(nome+" o nivel de Heroína é "+nivel+", então é Radiante")
              }

              break;
  
              case "NHUM":
                  nome=prompt("Me informe seu nome: ")
                  console.log(nome)
                  nivel=prompt(nome+" me informe seu nivel por gentileza:")
                  console.log(nivel)
          
                  if(nivel<=1000){
                      alert(nome+" o seu nivel é "+nivel+", então é Ferro");
                  }
                  
                  else if (nivel<=2000){
                     alert(nome+" o seu nivel é é "+nivel+", então é Bronze");
                  }
                  
                  else if (nivel<=5000){
                   alert(nome+" o seu nivel é é "+nivel+", então é Prata");
                  
                  }
                  
                  else if (nivel<=7000){
                     alert(nome+" o seu nivel é é "+nivel+", então é Ouro");
                  
                  }
                  
                  else if (nivel<=8000){
                     alert(nome+" o seu nivel é é "+nivel+", então é Platina");
                  
                  }
                  
                  else if (nivel<=9000){
                     alert(nome+" o seu nivel é é "+nivel+", então é Ascendente");
                  
                  }
                  
                  else if (nivel<=10000){
                     alert(nome+" o seu nivel é é "+nivel+", então é Imortal")
                  }
                  
                  else{
                     alert(nome+" o seu nivel é é "+nivel+", então é Radiante")
                  }       
                  break;
  }
 
  repetir=prompt("S-sim\nN-não")
}while(repetir == "S"||repetir=="s")
