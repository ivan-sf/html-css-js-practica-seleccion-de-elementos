let alumnos = 
[
    {
        nombre:"Isma",
        mail:"isma@gmail.com"
    },
    {
        nombre:"Estela",
        mail:"estela@gmail.com"
    },
    {
        nombre:"Ale",
        mail:"ale@gmail.com"
    },
    {
        nombre:"Diana",
        mail:"diana@gmail.com"
    },
    {
        nombre:"Jimmy",
        mail:"jimmy@gmail.com"
    }
];
let respuesta = "";
let container = document.querySelector(".container");
for(alumno in alumnos){
    let datos = alumnos[alumno];
    respuesta += `
    <div class="card">
            <div class="card-item">
                ${datos['nombre']}
            </div>
            <div class="card-item">
                ${datos['nombre']}
            </div>
            <div class="card-item card-calification">
                <select name="calificacion" class="calificacion">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
    `
} 
container.innerHTML+=respuesta;
const button = document.querySelector(".button-selector");
let elementos = document.querySelectorAll(".card-calification");
let calificacion = document.querySelectorAll(".calificacion");
button.addEventListener("click",()=>{
    // console.log(calificacion[0].value);
    container.removeChild(button);
    for(elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML=`<b>${calificacion[elemento].value}</b>`;
    }
});