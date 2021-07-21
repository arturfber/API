const pesquisarCnpj = async() => {

    // limparFormulario()

    const cnpj = document.getElementById('cnpj').value
    const url = `https://www.receitaws.com.br/v1/cnpj/${cnpj}`


    // if(cepValido(cep)){
    
    // console.log(url)
    // const dados = await fetch(url, {
    //     mode: 'no-cors',  
    //     async:true
    //     })
    
    // console.log(dados)
    // const endereco = await dados.json()

    $.ajax({
        url: `https://receitaws.com.br/v1/cnpj/${cnpj}`,
        dataType: 'jsonp',
        type: 'GET',
        success: function (data) {
            var dadosCnpjs = {
                tipo : data.tipo,
                abertura : data.abertura,
                nome : data.nome,
                fantasia : data.fantasia,
                cnpj : data.cnpj,
                cep : data.cep,
                logradouro : data.logradouro,
                complemento : data.complemento,
                bairro : data.bairro,
                cidade : data.municipio,
                numero : data.numero,
                uf : data.uf,
            }
            console.log(dadosCnpjs);
            preencherFormulario(dadosCnpjs)
        }
    })

    // if (endereco.hasOwnProperty('erro')){
    //     document.getElementById('endereco').value = 'CEP não encontrado'
    // } else{
    
    // }

    // } else{
    //     document.getElementById('endereco').value = 'CEP incorreto!'
    // }

  
    // fetch(url).then(resposta => resposta.json()).then(console.log)
}


const preencherFormulario = (data) =>{
 
    document.getElementById('tipo').value = data.tipo
    document.getElementById('abertura').value = data.abertura
    document.getElementById('nome').value = data.nome
    document.getElementById('fantasia').value = data.fantasia
    document.getElementById('cep').value = data.cep
    document.getElementById('rua').value = data.logradouro
    document.getElementById('complemento').value = data.complemento
    document.getElementById('bairro').value = data.bairro
    document.getElementById('cidade').value = data.cidade
    document.getElementById('estado').value = data.uf
}

// const limparFormulario = (endereco) =>{
//     document.getElementById('endereco').value = ""
//     document.getElementById('bairro').value = ""
//     document.getElementById('cidade').value = ""
//     document.getElementById('estado').value = ""
// }

// const eNumero = (numero) => /^[0-9]+$/.test(numero);

// const cepValido = (cep) => cep.length == 8 && eNumero(cep);

document.getElementById('submitCNPJ').onclick = pesquisarCnpj

// document.getElementById('cnpj').addEventListener('input', function (e) {
//     var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
//     e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
//   });