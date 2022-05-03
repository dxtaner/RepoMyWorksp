const express = require("express");
const app = express();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');

const ejs = require('ejs');

const photoController = require("./controllers/photoControllers")
const pageController = require("./controllers/pageControllers")
// connect db 
mongoose.connect('mongodb+srv://taner:BcuSG6DBvOzlSi82@cluster0.eoxcs.mongodb.net/PcatApp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
}).then(()=>{
    console.log("Db Connected");
}).catch((err)=>{
    console.log(err)
});

// Template Engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))
app.use(fileUpload());
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}))

// Routes 
app.get('/',photoController.getAllPhotos);
app.post('/photos', photoController.createPhoto);
app.get("/photos/:id",photoController.getPhoto);
app.put("/photos/:id", photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatildi..`)
})
