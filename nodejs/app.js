import express from "express"
import cors from "cors"

import { createLocation } from "./database.js"


const app = express()
app.use(cors())
app.use(express.json());


app.get("/api/test", (req,res) =>{
    
})

app.post("/submit", (req,res) => {
    const {age,postalCode,latt,lott,coment,gender} = req.body
    const databaseResponce = createLocation(age,gender,postalCode,coment,latt,lott)
    res.status(200).send(databaseResponce);

})




app.get("/:yok", (req, res) => {
    const getrequest = req.params.yok //Bulunamadı sayfası post versiyon
    res.status(404).send(`Not found: ${getrequest}`)
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send("Something Broke!");
})


app.listen(3000, () => {
    console.log("Server is started on port 3000...");
})