class Cadastro_Administrador{
    constructor(){
        this.nome = nome.value;
        this.email_adm = email_adm.value;
        this.senha_adm = senha_adm.value;
        this.conf_senha_adm = conf_senha_adm.value;
    }
}

class Cadastro_Banco{
    constructor(){
        this.dados = JSON.parse(localStorage.getItem("cadastro")) || [];
    }

    inserir(usuario){		
		if(localStorage.getItem("cadastro")){	 
            this.dados = JSON.parse(localStorage.getItem("cadastro"));
			this.dados.push(usuario)
		} else {
			this.dados = [];
			this.dados[0] = usuario;
		}
		localStorage.setItem("cadastro",JSON.stringify(this.dados));
    }
}

function cadastrar() {
    var usuario = new Cadastro_Administrador;
    var bd = new Cadastro_Banco(); 
	bd.inserir(usuario); 
    window.location.href="login.html";
}