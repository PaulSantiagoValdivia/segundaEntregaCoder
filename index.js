
let shoppingCart = [];
let validate;
let option;
let mensaje;
const airforce1 = 150, cortez = 130, airmax = 180, originals = 130, performance = 120, style = 125, rsfast = 160, runner = 100, authentic = 160, oldSkool = 165, oneStart = 170, dc1 = 120, dc2 = 110, dc3 = 140;
const productShoes = [
    { id: 1, name: "nike", type: ["airforce1", "cortez", "airmax"], size: [39, 40, 41, 42, 43], price: [airforce1, cortez, airmax] },
    { id: 2, name: "adidas", type: ["originals", "performance", "style"], size: [39, 40, 41, 42, 43], price: [originals, performance, style] },
    { id: 3, name: "puma", type: ["rsfast", "runner"], size: [39, 40, 41, 42, 43], price: [rsfast, runner] },
    { id: 4, name: "vans", type: ["authentic", "oldSkool", "oneStart"], size: [39, 40, 41, 42, 43], price: [authentic, oldSkool, oneStart] },
];

alert("Bienvenido a NFT valdivia \nPor el momento solo contamos con zapatillas\nPronto tendremos mas novedades para usted");
menu()
do {
    validate = parseInt(prompt("Desea realizar otra operacion? \nDigite 1 para continuar, 0 para salir"));
    if (validate) {
        menu();
    } else {
        alert("Hasta luego, vuelva pronto");
        validate = false;
    }
} while (validate);
function menu() {
    //validamos que el usuario ingrese una opcion que este en el menu 
    do {
        //pedimos al usuario que prosceso desea realizar
        option = parseInt(prompt("Digite 1 para visualizar nuestro stock de marcas\nDigite 2 buscar una marca\nDigite 3 para visualizar marcas modelos talle y precio "));
        //validamos que option coincida con uno de los case sino mostrara un mensaje deafault
        switch (option) {
            //LLamado a funciones 
            case 1: showCatalg(); break;
            case 2: showTrademark(); break;
            case 3: showAllMark(); break;        
            default: alert("ingrese una opcion valida");
        }
    } while (option !== 1 && option !== 2 && option !== 3);
}
function showCatalg() {
    productShoes.forEach(compra => {
        alert("contamos con estas marcas :\n" + compra.name);
    });

}
function showTrademark() {
    do {
        nameShoes = prompt("ingrese la marca que desea buscar en la tienda");
        validate = productShoes.find(product => product.name === nameShoes);
        if (validate) {
            showValidate(validate);
        } else {
            alert("la marca ingresada no se encuentra en stock.\n ingrese otra nuevamente");
        }
    } while (!validate);
}
function showValidate(validate) {
    mensaje = ` 
            tipo: ${validate.type}
            talla: ${validate.size}`;
    alert(mensaje);

}
function showAllMark() {
    let mensaje
    let typeLength;
    let iterator = 0;
    let guardado;
    nameShoes=prompt("Ingrese el modelo que desea comprar");
    for (const product of productShoes) {
        typeLength = product.type.length;
        while (iterator < typeLength) {
            mensaje = `
        marca: ${product.name}
        modelo: ${product.type[iterator]}
        precio: ${product.price[iterator]}U$D 
        talla: ${product.size}`;
            alert(mensaje);
            iterator++;
        }
        
        iterator = 0;
    }

}




