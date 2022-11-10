const submit = document.getElementById("submit");
const botoes = document.querySelectorAll(".buttom")
const suaEscolha = document.getElementById("escolha");
const pagina1 = document.querySelector(".page-1");
const pagina2 = document.querySelector(".page-2")

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function () {
        let botao = botoes[i].value;

        for (let i = 0; i < botoes.length; i++) {
            botoes[i].classList.contains("selecionado")
            botoes[i].classList.remove("selecionado")
        }
        botoes[i].classList.add('selecionado');


        submit.addEventListener('click', function () {
            pagina1.style.display = "none";
            pagina2.style.display = 'flex';
            suaEscolha.innerHTML = botao
        })
    })

}