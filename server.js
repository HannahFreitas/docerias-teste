const app = require("./src/app");
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Esse servidor está rodando na porta ${PORT}`)
});

