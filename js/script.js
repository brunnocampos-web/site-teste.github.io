//===================//MODO ESCURO//==================

const botaotema =document.getElementByld("botaoTema");
function alterarTema(){document.body.classList.toggle("escuro");
if(dicument.body.classList.toggle("escuro")){ 
                       botaoTema.textContent="modoClaro";
}else{botaoTema.textContent="modo escuro";
     }
                      }
botaoTema.addEventListener("click",alternarTema);
//===================//ALTERAR TEXTO//==================
const botaoMensagem =document.getElementByld("botaoMensagem"); const mensagem =document.getElementByld("mensagem");
function alterarTexto(){mensagem.textContent = "o texto foi alterado pelo javaScript!";
                       }
