const form = document.querySelector(".Fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueinobotao(){
    form.style.left = "40%"
    form.style.transform = "translateX(-40)"
    mascara.style.visibility = "visible"
}

function esconderform(){
    form.style.left = "-300px"
    form.style.transform = "translateX(-0)"
    mascara.style.visibility = "hidden"
}