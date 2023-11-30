
function myRANK(win,lose){
    let saldoDeVitorias = win-lose;
   
   if(saldoDeVitorias<=10){
   return "ferro";
   
   }else if(saldoDeVitorias>=11&&saldoDeVitorias<21){
   return "bronze";
   
       }else if(saldoDeVitorias>=21&&saldoDeVitorias<51){
        return "prata";
   
           }else if(saldoDeVitorias>=51&&saldoDeVitorias<81){
             return "ouro";
   
               }else if(saldoDeVitorias>=81&&saldoDeVitorias<91){
                return "diamante";
   
                   }else if(saldoDeVitorias>=91&&saldoDeVitorias<101){
                   return"lendario";
   
                   }else if(saldoDeVitorias>=101){
                       return"Imortal";
                     }
                    
                   
   }
   let win = 105;
   let lose = 30;
   let nivel = myRANK(win,lose);
   console.log(`O Herói tem de saldo de ${win-lose} vitórias e está no nível de ${nivel}`)