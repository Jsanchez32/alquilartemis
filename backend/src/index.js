//3.Importamos el app de app.js//
import app from "./app.js";

//1.Se crea el metodo main//
const main = ()=>{
    //3.1 Escuchamos el puerto declarato anteriormente//
    app.listen(app.get('port'));
    //3.2.Mandamos un mensaje al puerto//
    console.log(`Prueba 3 en el puerto ${app.get('port')}`);
};

//1.1.Invocamos el main//
main();