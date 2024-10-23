const express = require('express')
const app = express()
const port = 3000
const c_beranda = require('./controller/c_beranda')

app.use( express.urlencoded({extended:false}) )
app.set('view engine', 'ejs')
app.set('views', './view')

app.get('/', c_beranda.halaman_awal)

app.listen(port, ()=>{
    console.log('aplikasi berjalan di http://localhost:3000')
})