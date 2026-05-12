import express from "express";
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("LAIKA backend funcionando");
});


/*para conectarse al robot, por ahora fake*/
app.get("/robot", (req, res) => {
    res.json({
        battery: 88,
        speed: 1.4,
        status: "Juan"
    });
});

app.post("/move", (req, res) => {

   const direction = req.body.direction;

console.log("El robot se mueve hacia:", direction);

res.send(`Moviendo robot hacia ${direction}`);

});

app.listen(3000, "0.0.0.0", () => {
    console.log("Servidor corriendo");
});

