const BotaoConcluir = () => {
    //isso siginifica arrow funtion. - botão para concluir a tarefa
    const botaoConcluir = document.createElement("button"); //cria botao
    botaoConcluir.classList.add("check-button"); //seleciona a classe check-button para pegar o estilo no css
    botaoConcluir.innerText = "concluido ✓   "; //texto dentro do botao
    botaoConcluir.addEventListener("click", concluirTarefa); // cria evento de ouvir o click e passa a funcao concluirTarefa

    return botaoConcluir; //retorna botao
};
//BOTAO CONCLUIR TAREFA
const concluirTarefa = (evento) => {
    // esse evento traz infos do click do botao

    const botaoConcluir = evento.target; // qual o alvo do evento, saber em quem eu cliquei
    const tarefaCompleta = botaoConcluir.parentElement; // pega o pai do elemento que cliquei, pai do botao q é a li
    tarefaCompleta.classList.toggle("done"); //executa a classe css a aprtir do momento que clicar no botao:
    //toogle proporciona ao usuário a escolha de revelar e esconder conteúdos.
}

export default  BotaoConcluir   //proteje o codigo. MODULO