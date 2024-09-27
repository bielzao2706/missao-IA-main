const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas= [
{
    enunciado: "De onde é a invenção do chuveiro elétrico?",
    alternativas: [  
    "Brasil",
    "França"
    ]
    ,correta,0
}
]


{
    enunciado: "Qual o livro mais vendido no mundo?",
alternativas; [
    "Dom Quixote",
    "O Pequeno Príncipe"
    ]
    correta: 0
}

let atual = 0
let perguntaAtual;
let pontuação = 0

//FUNÇÃO MOSTAR PERGUNTAS
function mostrarPergunta(){
    perguntaAtual = pergunta[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.innerHTML = "";

    perguntaAtualk.alternativas.forEach((alternativas, index) => {
          const botao = document. createElement("button");
          botao.addEventListener("click",() => verificaResposta(index));
          caixaAlternativas.appendChild(botao);

        });
}

// FUNÇÃO VERIFICAR RESPOSTA
function verefiaResposta(Seleciona) {
    if (selecionada === perguntaAtual.correta){
        pontuação++;
    }
    atual++;

    if(atual < perguntas.length) {
        mostrarPergunta();
    
        mostarResultado();
    }
}
