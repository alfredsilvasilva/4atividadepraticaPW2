
const express = require("express")
const app =  express()
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.json({ message: "Seja bem vindo" });
});
const pacienteControler = require ('./app/controler/pacienteControler')
app.use ('/',pacienteControler)

app.listen(3000,()=>{
    console.log("servidor rodando no http://localhost:3000");
})