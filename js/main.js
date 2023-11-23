function cerrar() {
    const usuario = document.getElementById("user");
    usuario.innerText = '';
    localStorage.clear();
    alert("sesion cerrada exitosamente");
    
}

function asignarNombre() {
    const usuario = document.getElementById("user");
    const usuarioLocal = localStorage.getItem("nombre");

    if (usuarioLocal && usuario) {
        usuario.innerText = usuarioLocal;
    }
}
function registro($event) {
    $event.preventDefault();
    const nombre = document.getElementById("nombre");


    const apellido = document.getElementById("apellido");

    const correo = document.getElementById("correo");

    const genero = document.getElementById("genero");

    const contraseña = document.getElementById("contrasena");

    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("apellido", apellido.value);
    localStorage.setItem("contraseña", contraseña.value);
    localStorage.setItem("correo", correo.value);
    localStorage.setItem("genero", genero.value);

    alert("su registro ha sido exitoso");
    window.location.href = "login.html";

    return false;
}

function inicio($event) {
    $event.preventDefault();
    const correo = document.getElementById("correo");
    const correoLocal = localStorage.getItem("correo");
    if (correo.value === correoLocal) {
        alert("su inicio ha sido exitoso");
        window.location.href = "index.html";
    
    } else {
        alert("fallido");
    }

    return false;
}



