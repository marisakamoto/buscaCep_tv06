function pesquisaCEP(valor) {
    var valor_cep = valor.replace(/\D/g, '');

    fetch('https://viacep.com.br/ws/' + valor_cep + '/json/')
        .then((resposta) => resposta.json())
        .then((dados) => {
            console.log(dados);
            if (dados.erro == true) {
                CEP.classList.add('red-glow');
                rua.value = "CEP inválido";
                UF.value = "";
                bairro.value = "";
            } else {
                bairro.value = dados.bairro;
                rua.value = dados.logradouro;
                UF.value = dados.uf;
                cidade.value = dados.localidade;
            }



        });
};

if (CEP.valueLength = 8) {
    CEP.onchange = () => {
        CEP.classList.remove('red-glow');
        console.log(CEP.value);
        pesquisaCEP(CEP.value);
    }
}