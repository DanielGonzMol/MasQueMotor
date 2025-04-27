// Simulamos una "API" de coches
const coches = [
    { nombre: "Toyota Corolla", imagen: "https://cdn.pixabay.com/photo/2020/04/09/14/03/toyota-5029197_960_720.jpg", precio: "18,000€" },
    { nombre: "Honda Civic", imagen: "https://cdn.pixabay.com/photo/2015/01/19/13/51/honda-604019_960_720.jpg", precio: "20,000€" },
    { nombre: "Ford Mustang", imagen: "https://cdn.pixabay.com/photo/2016/06/22/05/36/ford-1477828_960_720.jpg", precio: "30,000€" },
    { nombre: "BMW Serie 3", imagen: "https://cdn.pixabay.com/photo/2016/06/19/21/52/bmw-1466345_960_720.jpg", precio: "35,000€" },
    { nombre: "Audi A4", imagen: "https://cdn.pixabay.com/photo/2015/01/19/13/51/audi-604023_960_720.jpg", precio: "33,500€" },
    { nombre: "Mercedes-Benz Clase C", imagen: "https://cdn.pixabay.com/photo/2016/11/22/20/07/auto-1851294_960_720.jpg", precio: "37,000€" },
    { nombre: "Volkswagen Golf", imagen: "https://cdn.pixabay.com/photo/2017/03/19/02/04/volkswagen-2155364_960_720.jpg", precio: "22,000€" },
    { nombre: "Seat León", imagen: "https://cdn.pixabay.com/photo/2020/08/14/09/26/seat-5487307_960_720.jpg", precio: "21,000€" },
    { nombre: "Kia Sportage", imagen: "https://cdn.pixabay.com/photo/2021/06/17/11/50/kia-6341360_960_720.jpg", precio: "26,000€" },
    { nombre: "Hyundai Tucson", imagen: "https://cdn.pixabay.com/photo/2021/02/13/11/12/hyundai-6011243_960_720.jpg", precio: "27,000€" },
    { nombre: "Peugeot 3008", imagen: "https://cdn.pixabay.com/photo/2017/08/14/18/23/peugeot-2640794_960_720.jpg", precio: "29,000€" },
    { nombre: "Renault Captur", imagen: "https://cdn.pixabay.com/photo/2020/11/20/12/28/renault-5758454_960_720.jpg", precio: "24,000€" },
    { nombre: "Nissan Qashqai", imagen: "https://cdn.pixabay.com/photo/2020/11/16/14/00/nissan-5748298_960_720.jpg", precio: "28,500€" },
    { nombre: "Mazda CX-5", imagen: "https://cdn.pixabay.com/photo/2019/11/12/14/48/mazda-4622151_960_720.jpg", precio: "31,000€" },
    { nombre: "Citroën C5 Aircross", imagen: "https://cdn.pixabay.com/photo/2019/11/06/12/18/citroen-4606172_960_720.jpg", precio: "27,500€" },
    { nombre: "Tesla Model 3", imagen: "https://cdn.pixabay.com/photo/2020/10/24/10/58/tesla-5680950_960_720.jpg", precio: "45,000€" },
    { nombre: "Jeep Renegade", imagen: "https://cdn.pixabay.com/photo/2020/06/20/15/39/jeep-5321418_960_720.jpg", precio: "26,500€" },
    { nombre: "Alfa Romeo Giulia", imagen: "https://cdn.pixabay.com/photo/2020/07/07/10/58/alfa-romeo-5380487_960_720.jpg", precio: "39,000€" },
    { nombre: "Mini Cooper", imagen: "https://cdn.pixabay.com/photo/2017/01/06/19/15/mini-1953035_960_720.jpg", precio: "25,000€" },
    { nombre: "Volvo XC40", imagen: "https://cdn.pixabay.com/photo/2019/08/04/14/31/volvo-4383216_960_720.jpg", precio: "38,000€" }
];


// Función para cargar coches
function cargarCoches() {
    const grid = document.getElementById('coches-grid');

    coches.forEach(coche => {
        const card = document.createElement('div');
        card.className = 'coche-card';
        card.innerHTML = `
            <img src="${coche.imagen}" alt="${coche.nombre}">
            <div class="info">
                <h3>${coche.nombre}</h3>
                <p>Precio: ${coche.precio}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Ejecutamos al cargar la página
document.addEventListener('DOMContentLoaded', cargarCoches);
