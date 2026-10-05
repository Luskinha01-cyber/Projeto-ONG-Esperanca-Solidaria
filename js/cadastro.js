// Máscaras dos campos do formulário de cadastro

// Máscara de CPF: 000.000.000-00
function mascaraCPF(valor) {
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return valor;
}

// Máscara de telefone: (00) 00000-0000
function mascaraTelefone(valor) {
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/^(\d{2})(\d)/, '($1) $2');
    valor = valor.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
    return valor;
}

// Máscara de CEP: 00000-000
function mascaraCEP(valor) {
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/^(\d{5})(\d)/, '$1-$2');
    return valor;
}

var cpf = document.getElementById('cpf');
var telefone = document.getElementById('telefone');
var cep = document.getElementById('cep');

cpf.addEventListener('input', function () {
    cpf.value = mascaraCPF(cpf.value);
});

telefone.addEventListener('input', function () {
    telefone.value = mascaraTelefone(telefone.value);
});

cep.addEventListener('input', function () {
    cep.value = mascaraCEP(cep.value);
});

// Quando o formulário é enviado (sem servidor), só mostra a mensagem de sucesso
var form = document.getElementById('formCadastro');
var mensagem = document.getElementById('mensagemSucesso');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    form.reset();
    mensagem.style.display = 'block';
});
