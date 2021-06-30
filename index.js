const productos = [
    { 
        nombre: 'Manzana',
        precio: 800,
        stock: 50
    },
    { 
        nombre: 'Pera',
        precio: 1000,
        stock: 100
    },
    { 
        nombre: 'Plátano',
        precio: 850,
        stock: 30
    },
    { 
        nombre: 'Naranja',
        precio: 700,
        stock: 60
    },
    { 
        nombre: 'Kiwi',
        precio: 1500,
        stock: 40
    },
    { 
        nombre: 'Tuna',
        precio: 1500,
        stock: 1
    },
    { 
        nombre: 'Durazno',
        precio: '1500',
        stock: 0
    },
]

// Mostrar con console.log cuántos productos quedan en stock.
const sumaProductos = productos.reduce((acum, fruta) => {
    const suma = acum + fruta.stock
    return suma
}, 0)
console.log(sumaProductos)


// Subir el precio de los productos cuando quede poca existencia (modificar el precio de un producto cuando algún producto tenga una existencia).
const filtrarProducto = (array) => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            const nuevoProducto = array.map((fruta) => {
                if(fruta.stock === 1) {
                    fruta.precio = 3000
                }
                return fruta;
            });
            resolve(nuevoProducto);
        }, 3000)
    })
}

const main = async () => {
    const productosFiltrados = await filtrarProducto(productos);
    console.log('productosFiltrados', productosFiltrados)
}
main();


// Averiguar si pueden vender un producto (si hay suficiente en stock).
const filterStock = productos.filter((fruta) => {
    return fruta.stock > 0
})
console.log(filterStock)

//  Saber cuánto es el valor total de los productos.
const PrecioTotal = productos.reduce((acum, fruta) => {
    const sumaTotal = acum + (fruta.precio * fruta.stock)
    return sumaTotal
}, 0)

console.log('PrecioTotal', PrecioTotal)
