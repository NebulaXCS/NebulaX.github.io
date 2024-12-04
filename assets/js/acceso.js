$(document).ready(()=>{
  $(".acceso").click(function(e){
    e.preventDefault();
    let tipoUsr = $(this).attr("data-usr");
    Swal.fire({
      title: "NebulaX",
      html:`
        <p>Proporcione sus credenciales de acceso (${tipoUsr}):</p>
        <input id="swal-input1" class="swal2-input" id="usuario" placeholder="Usuario">
        <input id="swal-input2" class="swal2-input" id="contrasena" placeholder="Contraseña">
      `,
      allowEscapeKey:false,
      allowOutsideClick:false
    });
  })
});