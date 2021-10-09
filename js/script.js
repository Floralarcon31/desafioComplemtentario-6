//Ordenar un array de objetos - alfabeticamente

const destinos =[
    {paquete:"Río de Janeiro", transporte:"avion", precio :68500},
    {paquete:"El Calafate", transporte:"avion", precio :55500},
    {paquete:"New York", transporte:"avion", precio :108000},
    {paquete:"Iguazu", transporte:"bus", precio :25000},
    {paquete:"Mendoza", transporte:"bus", precio :28500},
    {paquete:"Cancun", transporte:"avion", precio :38500},
];

destinos.sort((a,b) =>{
    if(a.paquete < b.paquete){
        return -1;
    }
    else if(a.paquete > b.paquete){
        return 1;
    }
    else{
        return 0;
    }
})
console.table(destinos);