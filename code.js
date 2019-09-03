function validarSenha(){
    var senha = document.forms["registro"]["senha"].value;
        if(senha.length < 6){
            alert("Senha menor que 6 caracteres");
            return false;    
        }
}
