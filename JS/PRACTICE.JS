
document.addEventListener('DOMContentLoaded', () => {
    work(printed)
})

let printed = [
    {
        img: "/img/aquaman.png"
    },

]


const work = (data) => {
    let component = document.getElementById("carta")
    data.forEach(element => {

        plantilla = ""

        plantilla += `
        <img class="card-img-top" src="${element.img}" style="display: flex; flex-direction: column;height: 100px;">
    <div class="card-body">
        <h4 class="card-title">Title</h4>
        <p class="card-text">Text</p>
    </div>
`

        component.innerHTML = plantilla



    });








}
