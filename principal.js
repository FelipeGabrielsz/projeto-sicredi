var botaoClicado = document.querySelector("#botao");


botaoClicado.addEventListener("click", function(event){

    event.preventDefault();

    //id do form
    var form = document.querySelector("#form-adiciona");


    var dadosObtidos = obtemDados(form); 

    adicionarTabela(dadosObtidos);  

    form.reset();
})


function obtemDados(dadosObtidos) {

    var manipalarData = {
        dia: dadosObtidos.diaData.value,
        mes: dadosObtidos.mesData.value,
    }

    var dataJaManipulada = manipalarData.dia + "/" + manipalarData.mes;
    

    var dados = {
        
        nome: dadosObtidos.nome.value,
        cpfCnpj: dadosObtidos.cpfCnpj.value,
        data: dataJaManipulada,
        horario: dadosObtidos.horario.value,
        assunto: dadosObtidos.assunto.value,
        contato: dadosObtidos.contatoTelefonico.value
        
    }

    return dados;
}


function criaTr(dadosObtidos) {
    
    var tr = document.createElement("tr");
    tr.classList.add("tr-usuarios");

    tr.appendChild(criaTd(dadosObtidos.nome, "td-nome"));
    tr.appendChild(criaTd(dadosObtidos.cpfCnpj, "td-cpfCnpj"))
    tr.appendChild(criaTd(dadosObtidos.data, "td-data"));
    tr.appendChild(criaTd(dadosObtidos.horario, "td-horario"))
    tr.appendChild(criaTd(dadosObtidos.assunto, "td-assunto"));
    tr.appendChild(criaTd(dadosObtidos.contato, "td-contato"))

    return tr;
}

function criaTd(dados, classe) {
    
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dados;

    return td;
}

function adicionarTabela(dadosParametro) {
    
    var tabela = document.querySelector("#tabela-principal");
    var colocarTr = criaTr(dadosParametro);
    tabela.appendChild(colocarTr);

}
