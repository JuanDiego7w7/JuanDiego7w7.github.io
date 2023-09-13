const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresionesRegulares = {
    nombre: /^([a-zA-Z\s]{2,50})$/, //Acepta minusculas, mayusculas, espacios en blanco
    correo:/^[a-z0-9\_\-]+@[a-z]+\.[a-z]+$/,
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "nombre":
            if(expresionesRegulares.nombre.test(e.target.value)){
                document.getElementById('nombre').classList.remove("campo-requerido");
                document.getElementById('nombre').classList.add("campo-verificado");
            }else{
                document.getElementById('nombre').classList.add("campo-requerido");
                document.getElementById('nombre').classList.remove("campo-verificado");
            }
            if(expresionesRegulares.nombre.test(e.target.value)==true){
                formulario.addEventListener("submit",(e)=>{
                    e.preventDefault();
                    formulario.action = "https://formsubmit.co/juandiegoiman1503@gmail.com";
                    formulario.submit();
                })
            }
            else{
                formulario.addEventListener("submit",(e)=>{
                    e.preventDefault();
                })
            }
            break;
        case "email":
            if(expresionesRegulares.correo.test(e.target.value)){
                document.getElementById('email').classList.remove("campo-requerido");
                document.getElementById('email').classList.add("campo-verificado");
            }else{
                document.getElementById('email').classList.add("campo-requerido");
                document.getElementById('email').classList.remove("campo-verificado");
            }
            if(expresionesRegulares.nombre.test(e.target.value)==true){
                formulario.addEventListener("submit",(e)=>{
                    e.preventDefault();
                    formulario.action = "https://formsubmit.co/juandiegoiman1503@gmail.com";
                    formulario.submit();
                })
            }
            else{
                formulario.addEventListener("submit",(e)=>{
                    e.preventDefault();
                })
            }
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario);
});





