document.getElementById('formulario').onsubmit = validarCadastro;

function validarCadastro(){
	var nome= document.getElementById("nome");
	var email = document.getElementById("email");
	var senha = document.getElementById("senha");
	var senha2 = document.getElementById("senha2");
	var contErro =0;

	//validação do nome
	var caixa_nome = document.getElementById("msg-nome");
	if (nome.value=="" || nome.value.indexOf(" ")==-1) {
		caixa_nome.innerHTML ="Favor preencher o nome completo";
		caixa_nome.style.display = "block";
		contErro+=1;
	}
	else{
		caixa_nome.style.display = "none";
	}

	// validação do email
	var caixa_email= document.getElementById("msg-email");
	if (email.value=="" || email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1){
		caixa_email.innerHTML ="Favor preencher um email válido (aaa@aaa.com)";
		caixa_email.style.display = "block";
		contErro+=1;
	}
	else{
		caixa_email.style.display ="none"
	}

	/*validação do senha*/
	var caixa_senha = document.getElementById("msg-senha");
	
	if (senha.value =="" || senha.value.length<6 ) {
		caixa_senha.innerHTML = "Favor preencher a senha com no minimo 6 caracteres";
		caixa_senha.style.display = "block";
		contErro+=1;
	}
	else{
		caixa_senha.style.display = "none";
	}

		/*validação da senha2*/
	var caixa_senha2 = document.getElementById("msg-senha2");
	
	if (senha2.value =="" || senha2.value.length<6 ) {
		caixa_senha2.innerHTML = "Favor repetir a senha";
		caixa_senha2.style.display = "block";
		contErro+=1;
	}
	else{
		caixa_2senha.style.display = "none";
	}

	if(senha.value != "" || senha2.value != "" || senha.value != senha2.value){
		caixa_senha2.innerHTML="As senhas não conferem";
		caixa_senha2.style.display = "block";
		contErro+=1;
	}
	if(contErro>0)	
		return false;
	else
		return true;
}