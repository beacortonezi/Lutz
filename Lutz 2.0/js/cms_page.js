class Cms{
    constructor(){
        this.titulo = titulo.value;
        this.descricao = descricao.value;
        this.autor = autor.value;
        this.data = data.value;
        this.noticia = noticia.value;
        this.frase_destaque = frase_destaque.value;
    }
}

class Cms_Banco{
    constructor(){
        this.dados = JSON.parse(localStorage.getItem("cms_dados")) || [];
    }

    inserir(usuario){		
		if(localStorage.length == 0)
		{	
			this.dados = [];
			this.dados[0] = usuario;
		} else {
			this.dados = JSON.parse(localStorage.getItem("cms_dados"));
			this.dados.push(usuario);
		}
		localStorage.setItem("cms_dados",JSON.stringify(this.dados));
    }
}

function postar() {
    var usuario = new Cms;
    var bd = new Cms_Banco(); 
	bd.inserir(usuario); 
	window.location.href="cms_page.html";
}