$(document).ready(function(){
    const tarefa = [];

    let linhas = '';

    $('form').on('submit', function(e){
        e.preventDefault();

        adicionarLinha();
        atualizarLista();

        $('li').onclick(function(){
            const novoItem = $('<li style ="text-decoration: line-through"></li>');
            $('li').appendTo(novoItem);
        })
    })

    function adicionarLinha(){
        const inputTarefa = $('input-tarefa');
    
        if (tarefa.includes(inputTarefa.value)){
            alert(`A tarefa: ${inputTarefa.value} já existe.`);
    
        }
        else
        {
            tarefa.push(inputTarefa.value);
    
            let linha = '<ul>';
            linha += `<li>${inputTarefa.value}</li>`;
            linha += '</ul>';
            
            linhas += linha;
        }
        inputTarefa.value = '';
    }

    function atualizarLista(){
        const corpoLista = $('li');
        corpoLista.innerHTML = linhas;
    }
})