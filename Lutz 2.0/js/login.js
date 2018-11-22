class Login_Administrador{
    constructor(){
        this.email = email.value;
        this.senha = senha.value;
    }
}

class Login_Banco{
    constructor(){
        this.dados = JSON.parse(localStorage.getItem("login")) || [];
    }

    inserir(usuario){	
        var cadastros = JSON.parse(localStorage.getItem("cadastro"));

   		if(localStorage.getItem("login"))
		{	
			this.dados = [];
			this.dados[0] = usuario;
		} else {
			this.dados = JSON.parse(localStorage.getItem("login"));
			this.dados.push(usuario);
		}
		localStorage.setItem("login",JSON.stringify(usuario));
    }
}

function entrar() {
    var usuario = new Login_Administrador;
    var bd = new Login_Banco(); 
	bd.inserir(usuario); 
	window.location.href="login.html";
}
