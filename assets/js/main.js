function pesquisaCEP(valor) {
    var valor_cep = valor.replace(/\D/g, '');

    fetch('https://viacep.com.br/ws/' + valor_cep + '/json/')
        .then((resposta) => resposta.json())
        .then((dados) => {
            console.log(dados);
            bairro.value = dados.bairro;
            rua.value = dados.logradouro;
            UF.value = dados.uf
        });
};
if (CEP.valueLength = 8) {
    CEP.onchange = () => {
        console.log(CEP.value);
        pesquisaCEP(CEP.value);
    }
}