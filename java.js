const tarefa = [];


let linhas = '';



$("form").on('submit', function (e) 
{
    e.preventDefault();

    adicionarLinha();
    atualizarLista();

    $("#campo").click(()=>
    {
        $("#campo").css({"textDecoration":"line-through"});
    })
})


function adicionarLinha()
{
    const inputTarefa = document.getElementById('input-tarefa');

    if (tarefa.includes(inputTarefa.value))
    {
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
    const corpoLista = document.querySelector('li');
    corpoLista.innerHTML = linhas;
}
