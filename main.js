class OsmanElement extends HTMLElement {
    constructor() {
      super();
      // Crear Shadow DOM
      this.attachShadow({ mode: "open" });
  
      // Agregar HTML y estilos al Shadow DOM
      this.shadowRoot.innerHTML = `
        <style>
          div.container {
           transform:
    perspective(750px)
    translate3d(0px, 0px, -250px)
    rotateX(27deg)
    scale(0.9, 0.9);
  border-radius: 20px;
  border: 5px solid #e6e6e6;
  box-shadow: 0 70px 40px -20px rgba(0, 0, 0, 0.2);
  transition: 0.4s ease-in-out transform;

  &:hover {
    transform: translate3d(0px, 0px, -250px);
  }
            border:;
            left: 30vw;
            position: absolute;
            width: 40vw;
            height: auto;
            text-align: center;
            border-radius: 1vw;
            font-size: 2em;
            padding: 20px;
            background-color: #C4DAD2;
            color:16423C;
          }
          h2 {
            margin-bottom: 15px;
          }
          input {
            width: 80%;
            padding: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1em;
          
 transform:
    perspective(750px)
    translate3d(0px, 0px, -250px)
    rotateX(27deg)
    scale(0.9, 0.9);
  border-radius: 20px;
  border: 5px solid #e6e6e6;
  box-shadow: 0 70px 40px -20px rgba(0, 0, 0, 0.2);
  transition: 0.4s ease-in-out transform;

  &:hover {
    transform: translate3d(0px, 0px, -250px);
  }
  
}}
        </style>
  
        <div class="container">
          <h2>CARTA DE INFORMACION</h2>
          <p>Nombre: Osman</p>
          <p>Edad: 20 años</p>
          
          <h2>Hobbies</h2>
          <p>Ver películas, leer libros, Ver la UFC</p>
  
          <h2>Formulario de contacto</h2>
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" placeholder="Ingresa tu nombre">
          
          <label for="email">Correo:</label>
          <input type="email" id="email" name="email" placeholder="Ingresa tu correo">
           <button >Click</button>
        </div>
      `;
    }
  
    // Se ejecuta cuando se agrega el elemento al DOM
    connectedCallback() {
      console.log("Se ha creado el elemento");
    }
  
    // Se ejecuta cuando se elimina el elemento del DOM
    disconnectedCallback() {
      console.log("Se ha eliminado esta etiqueta");
    }
  }
  
  // Registrar el nuevo elemento personalizado
  customElements.define("osman-element", OsmanElement);