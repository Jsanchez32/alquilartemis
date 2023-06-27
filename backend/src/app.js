//2.Importamos el framework express//
import express from "express";
//Importamos donde manejaremos la rutas de categoria//
import categoriaRoutes from "./routes/categorias.routes.js";
import constructoraRoutes from "./routes/constructoras.routes.js";
import empleadoRoutes from "./routes/empleados.routes.js";
import productoRoutes from "./routes/productos.routes.js"
//2.1.Guardamos el express en una constante para usarla//
const app = express();

//2.3.Declaramos el puerto//
app.set("port",5000);

//9.Nos permite recibir la respuesta, para entender json//
//Middleware//
app.use(express.json());

//Routes//

app.use("/api/categorias",categoriaRoutes);
app.use("/api/constructoras",constructoraRoutes);
app.use("/api/empleados",empleadoRoutes);
app.use("/api/productos",productoRoutes)

//2.2.Exportamos la app para usarla luego//
export default app;