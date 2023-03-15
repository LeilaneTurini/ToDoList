/*(() => {
   tira do escopo global, chama IIFE ("conhecido como Self-Executing Anonymous Function 
   e contém duas partes principais. A primeira é a função anônima cujo escopo léxico é encapsulado
   entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, 
   bem como evita que estas variáveis locais poluam o escopo global.
    A segunda parte corresponde à criação da expressão (), por meio da qual o interpretador 
    JavaScript avaliará e executará a função.")
    */

    import   BotaoConcluir from './componentes/concluirTarefas.js'
    import ExcluirTarefa from './componentes/excluirTarefa.js'
    //CRIAR TAREFA
  const criarTarefa = (evento) => {
    evento.preventDefault(); //nao atualiza o refresh da pagina e permanece o q foi colocado

    const lista = document.querySelector("[data-list]"); //seleciona a ul que é o pai
    const input = document.querySelector("[data-form-input]"); //selecionou o input onde vamos escrever
    const valor = input.value; // pegar o valor do input

    const tarefa = document.createElement("li"); //cria um elemento LI dentro da UL , elemento filho
    tarefa.classList.add("task"); //seleciona a classe TASK para pegar o estilo no css
    const conteudo = `<p class="content">${valor}</p>`; //adicionando paragrafos na lista

    tarefa.innerHTML = conteudo; // adicionando elemento no conteudo LI
    tarefa.appendChild(BotaoConcluir()); //cria funcao, coloca o botao de concluir dentro da tarefa que é LI
    tarefa.appendChild(ExcluirTarefa());// cria função e cria botao para excluir
    lista.appendChild(tarefa); //sempre coloca a tarefa no final
    input.value = " ";
  };

//BOTAO NOVO ITEM
  
const novaTarefa = document.querySelector("[data-form-button"); //botão de novo item

  novaTarefa.addEventListener("click", criarTarefa); //ouvir o click, onde foi clicado. Quando acionar o clica, chama a função de criar tarefa

// })(); continuação do inicio do codigo- iife executar função q criamos acima
