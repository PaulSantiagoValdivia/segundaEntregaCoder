
let shoppingCart = [];
let validate;
let option;
let mensaje;
const airforce1 = 150, cortez = 130, airmax = 180, originals = 130, performance = 120, style = 125, rsfast = 160, runner = 100, authentic = 160, oldSkool = 165, oneStart = 170;
const productShoes = [
    { id: 1, name: "nike", type: "airforce1", size: [39, 40, 41, 42, 43], price: airforce1 },
    { id: 2, name: "nike", type: "cortez", size: [39, 40, 41, 42, 43], price: cortez },
    { id: 3, name: "nike", type: "airmax", size: [39, 40, 41, 42, 43], price: airmax },
    { id: 4, name: "adidas", type: "originals", size: [39, 40, 41, 42, 43], price: originals },
    { id: 5, name: "adidas", type: "performance", size: [39, 40, 41, 42, 43], price: performance },
    { id: 6, name: "adidas", type: "style", size: [39, 40, 41, 42, 43], price: style },
    { id: 7, name: "puma", type: "rsfast", size: [39, 40, 41, 42, 43], price: rsfast },
    { id: 8, name: "puma", type: "runner", size: [39, 40, 41, 42, 43], price: runner },
    { id: 9, name: "vans", type: "authentic", size: [39, 40, 41, 42, 43], price: authentic },
    { id: 10, name: "vans", type: "oldSkool", size: [39, 40, 41, 42, 43], price: oldSkool },
    { id: 11, name: "vans", type: "oneStart", size: [39, 40, 41, 42, 43], price: oneStart },
];

alert("Bienvenido a shoers valdivia \nPor el momento solo contamos con zapatillas\nPronto tendremos mas novedades para usted");
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
        option = parseInt(prompt("Digite 1 para visualizar nuestro stock\nDigite 2 buscar una marca\nDigite 3 para visualizar marcas modelos talle y precio "));
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
        alert("contamos con estos tipos de zpatillas :\n Tipo: " + compra.type + "\nMarca:" + compra.name);
    });

}
function showTrademark() {
    do {
        nameShoes = prompt("ingrese la marca que desea buscar en la tienda");
        validate = productShoes.find((product) => product.name === nameShoes);
        if (validate) {
            showValidate();
        } else {
            alert("la marca ingresada no se encuentra en stock.\n ingrese otra nuevamente");
        }
    } while (!validate);
}
function showValidate() {
    validate = productShoes.filter((product) => product.name === nameShoes);
    validate.forEach(element => {
        mensaje = `
        marca: ${element.name}
        modelo: ${element.type}
        precio: ${element.price}U$D 
        talla: ${element.size}`
        alert(mensaje)
    });


}
function showAllMark() {
    let mensaje
    for (const product of productShoes) {
        mensaje = `
        marca: ${product.name}
        modelo: ${product.type}
        precio: ${product.price}U$D 
        talla: ${product.size}`;
        alert(mensaje);
    }
}

