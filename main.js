// web components
// creo mi elemento 

class OsmanElement extends HTMLElement{
     constructor(){
      super();
      this.attachShadow({mode: "open"});
this.shadowRoot.innerHTML= `
<div>

`

     }
     
     //se ejecuta cuando crea el elemento  
     
     connectedCallback() {
        console.log("se ha creado");
        
}


//se ejecuta cuando se elimina el elemento

disconnectedCallback(){
    console.log("se a eliminado esta etiqueta");
}
}




// registro mi elemento en la lista de elementos disponibles en html
customElements.define("osman-element",OsmanElement);