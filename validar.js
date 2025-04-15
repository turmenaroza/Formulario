function Enviar(){
    let nome = document.getElementById ('nome-atleta').value.trim();
    let CPF = document.getElementById ('cpf-atleta').value.trim();
    let idade = parseInt(document.getElementById ('idade-atleta').value,10);

    if (!nome){
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
   alert 
}


