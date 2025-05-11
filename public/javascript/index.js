// Simulamos una "API" de coches
const coches = [
    { nombre: "Toyota Corolla", imagen: "https://scene7.toyota.eu/is/image/toyotaeurope/Corolla-14:Medium-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0", precio: "18,000€" },
    { nombre: "Honda Civic", imagen: "https://www.honda.es/content/dam/central/cars/civic-hybrid/accessories/Honda-civic-hybrid-accessories-29-1x1-mobile.jpg/_jcr_content/renditions/fb_w.webp", precio: "20,000€" },
    { nombre: "Ford Mustang", imagen: "https://www.ford.es/content/dam/guxeu/rhd/central/cars/2020-mustang-mach-1/launch/gallery/exterior/Ford-Mach1-eu-SHOT_02_Mach_1_Dynamic_Car_to_Car-16x9-2160x1215-Gallery_D_T_M-2.jpg.renditions.small.jpeg", precio: "30,000€" },
    { nombre: "BMW Serie 3", imagen: "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2keJXKVZPty157WN4cSk%25p1XZmQGZI5LasNF1NGnjZR65e6CKy%25YCjyON74mvhB1VWxbZkVFxve%25WNRGmSk%25gl6JOYGwgFMA8NFCE%25rrxlpKAuhFqIbVBIHS9oXEHe%25P6waKM4VtuMwGVfu82aTjrlc2YDafaiojmqn1nv9DyLOEOB%25qTJIsI8pL3uBrE36JdSeZsc3uzVMRrdySkNh5Z4rVA0ogRcXNF4HvmUx0Kc%252y5b4WxfjTSUcP81D37nxbUEqdrw89GsLzZBUiprJ849Gw6ZuUwWptYRSGtc67m5Vp4EYCygN6KgmlTv0YheyX324motTQdjcyiL3azDxTLDdnkq83KmzOALUdtlkIFJG4IQABKupciaFeWS6xwBKMPVY8T9WhbNmUfNPo90yG1lbHi4TpEn9%25wc36sIiftxdYbDw178zm98tECUkyih7slGAnW%25CrXpFOMslZQ6KIvwXRaYWB2NQ5nmPej4agOybMxrnvIT9h8UO2B3iohzIjedwHNxBDMzt%25r0eqhk7fHiMLoAC0wAhJHFl422ou%25KXcmHHSfWQxbz%25V1Pa89MfNEbnERM10s9OsehE4riIrzKscZwBZ6drxRteRhyZ857M5obRUgChg8F5GaFbEdfbY5p0qBDFjTgH%25ekxh06FXRTne0IqQmSOP5SFagdT86myZ1RCz1Ww5", precio: "35,000€" },
    { nombre: "Audi A4", imagen: "https://media.audi.com/is/image/audi/nemo/models/a4/a4-limousine/my-2023/stage-large-image/AA4_L_191007_3-L.jpg?width=1920", precio: "33,500€" },
    { nombre: "Mercedes-Benz Clase C", imagen: "https://www.mercedes-benz.es/content/dam/hq/passengercars/cars/c-class/c-class-saloon-w206-pi/overview/stage/09-2023/images/mercedes-benz-c-class-w206-stage-3840x3840-09-2023.jpg/1740018404388.jpg?im=Crop,rect=(0,1066,3840,1707);Resize=(2730)", precio: "37,000€" },
    { nombre: "Volkswagen Golf", imagen: "https://assets.volkswagen.com/is/image/volkswagenag/turismos_highlights_iq_light1080x1080px?Zml0PWNyb3AsMSZmbXQ9d2VicCZxbHQ9Nzkmd2lkPTk2MCZhbGlnbj0wLjAwLDAuMDAmYmZjPW9mZiZhZTFl", precio: "22,000€" },
    { nombre: "Seat León", imagen: "https://www.seat.es/content/dam/public/seat-website/carworlds/leon-new-cw/slider-cards/seat-leon-2025-led-taillights.jpg", precio: "21,000€" },
    { nombre: "Kia Sportage", imagen: "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/kia-sportage-nq5-my22/discover/kia-sportage-my22-driving-pleasure-d-w.jpg", precio: "26,000€" },
    { nombre: "Hyundai Tucson", imagen: "https://dmassets.hyundai.com/is/image/hyundaiautoever/Hyundai_TUCSON_2024_PHEV_Video_Thumbnail_02:16x9?wid=1920&hei=1080&fit=wrap,1", precio: "27,000€" },
    { nombre: "Peugeot 3008", imagen: "https://www.peugeot.es/content/dam/peugeot/master/b2c/our-range/showroom/3008/2023-new-e-3008-/3008-white-label/3008-hybrid-white-label/E_3008_BARRES_DE_TOIT.png?imwidth=1920", precio: "29,000€" },
    { nombre: "Renault Captur", imagen: "https://cdn.group.renault.com/ren/es/glp/2560x1440_captur_Repsol_AutoGas.jpg.ximg.large.webp/133d07376a.webp", precio: "24,000€" },
    { nombre: "Nissan Qashqai", imagen: "https://www-europe.nissan-cdn.net/content/dam/Nissan/es/vehicles/Nuevo_QQ/qq2024/QQ-Red-3840x2160%20(2).jpg.ximg.l_full_h.smart.jpg", precio: "28,500€" },
    { nombre: "Mazda CX-5", imagen: "https://media-assets.mazda.eu/image/upload/q_auto,f_auto,w_1800/mazdaes/globalassets/cars/2023-mazda-cx-5/220916_1800_851_galerie_5.jpg?rnd=495f65", precio: "31,000€" },
    { nombre: "Citroën C5 Aircross", imagen: "https://www.citroen.es/content/dam/citroen/master/b2c/models/new-c5-aircross/l-m/Citroen_C5_Aircross_Confort_2880_1531.jpg?imwidth=1920", precio: "27,500€" },
    { nombre: "Tesla Model 3", imagen: "https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/TD_Component_M3_Desktop.jpg", precio: "45,000€" },
    { nombre: "Alfa Romeo Giulia", imagen: "https://www.alfaromeo.es/content/dam/alfa/cross/giulia/white-label-update/grid/key-strength/AR-GIULIA-M24-538X378-KEYSTRENGHTS-2.jpg", precio: "39,000€" },
    { nombre: "Mini Cooper", imagen: "https://www.mini.es/content/dam/MINI/common/home/main-stage/mini-J05-stage-superwide.avif.asset.1744188956911.avif", precio: "25,000€" },
    { nombre: "Volvo XC40", imagen: "https://www.volvocars.com/images/cs/v3/assets/blt0feaa88e629251fc/bltf5599c5251bd3a21/6690104f8308bea6d9dab8c8/xc40-promotional-text-image-black-edition-4x3.png?branch=prod_alias&auto=avif&quality=85&format=webp&iar=0&w=1920&imdensity=1", precio: "38,000€" }
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
