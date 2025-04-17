function Enviar(){
    let nome = document.getElementById ('nome-atleta').value.trim();
    let CPF = document.getElementById ('cpf-atleta').value.trim();
    let idade = parseInt(document.getElementById ('idade-atleta').value,10);
    let email = document.getElementById ('email').value.trim();
    let telefone = document.getElementById ('telefone').value.trim();

    if (!nome || !/^[a-zA-Z]+$/ ){
        alert ('Por favor, preencha o nome');
        return;
    }else {
        console.log (nome);
    }
    if ((CPF.length) !== 11){
        alert ('Por favor, insira um Cpf válido ');
        return;
    } else {
        console.log (CPF);
    }
    if (isNaN (idade) || idade<14){
        alert ('Sua idade deve ser um número maior ou igual a 14. ');
        return;
    } else {
        console.log (idade);
    }
    if (isNaN (email) ){
        alert (' Insira um email válido');
        return;
    } else {
        console.log (email);
    }
    if (!telefone){
        alert ('Por favor, preencha o telefone');
        return;
    }else {
        console.log (telefone);
    }
   alert ('Formulário enviado com sucesso')
}


