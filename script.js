const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-Alternativas");
const caixaResultados=document.querySelector(".Resultados");
const textoResultados=document.querySelector(".texto-resultados");


const perguntas=[
    {
        nunciado:"Assim que saiu do colégio você se depara com uma nova tecnologia, um chat que consegue responer todas as dúvidas que uma pessoa pode ter, ele também gera imagem e áudios realistas. Qual é o seu penamento?",
    alternativas:[
        {
            texto:"Isso é assustador",
            afirmacao:"No início, eu ficaria com medo de qu essa tecnologia pode fazer."
        },
        {
            texto:"Isso é incrível!",
            afirmacao: "Sempre quis saber como usar uma IA em meu dia a dia"
        }
    ]
    }
]