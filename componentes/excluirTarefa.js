//EXLUIR TAREFA
const ExcluirTarefa = () => {
    const excluirTarefa = document.createElement('button')  //cria um elemento botao de excluir
    excluirTarefa.innerText = 'excluir'
    excluirTarefa.addEventListener('click', deletarTarefa)

    return excluirTarefa
}
const deletarTarefa = (evento) => { //função arrow function
    const excluirTarefa = evento.target; //qual o alvo do evento, saber em quem eu cliquei
    const tarefaCompleta = excluirTarefa.parentElement //seleciona a li inteira
    tarefaCompleta.remove() //executa a função e remove o nó da arvore

    return excluirTarefa
}

export default ExcluirTarefa