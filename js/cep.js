

const pesquisarCep = async() => {

    // limparFormulario()

    const cep = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`



    // if(cepValido(cep)){

    const dados = await fetch(url)
    // console.log(dados)
    const endereco = await dados.json()

    // if (endereco.hasOwnProperty('erro')){
    //     document.getElementById('endereco').value = 'CEP não encontrado'
    // } else{
    preencherFormulario(endereco)
    // }

    // } else{
    //     document.getElementById('endereco').value = 'CEP incorreto!'
    // }

  
    // fetch(url).then(resposta => resposta.json()).then(console.log)
}


const preencherFormulario = (endereco) =>{

    document.getElementById('rua').value = endereco.logradouro
    document.getElementById('complemento').value = endereco.complemento
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf
}

// const limparFormulario = (endereco) =>{
//     document.getElementById('endereco').value = ""
//     document.getElementById('bairro').value = ""
//     document.getElementById('cidade').value = ""
//     document.getElementById('estado').value = ""
// }

// const eNumero = (numero) => /^[0-9]+$/.test(numero);

// const cepValido = (cep) => cep.length == 8 && eNumero(cep);

document.getElementById('submitCEP').onclick = pesquisarCep
