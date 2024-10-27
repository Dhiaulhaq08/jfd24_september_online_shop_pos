const express       = require('express')
const app           = express()
const port          = 3000
const cookieParser  = require ('cookie-parser')
const session       = require ('express-session')
const c_beranda     = require('./controller/c_beranda')
const c_auth        = require('./controller/c_auth')
const cek_login     = c_auth.cek_login
const c_toko        = require('./controller/c_toko')

//setting sesison untuk login
app.use(cookieParser('secret') )
app.use(session({
    secret:'secret',
    resave: true,
    saveUnitialized: false,
    cookie: {
        maxAge: (1000 * 60 ) * 30
        //batas session expired: 
        //1000 milidetik * 60 = 1menit
        //1  menit * 60 = 1jam
    }
}
))

app.use( express.urlencoded({extended:false}) )
app.use( express.static('public'))


app.set('view engine', 'ejs')
app.set('views', './view')

app.get('/', c_beranda.halaman_awal)
app.get('/auth/login', c_auth.halaman_login)
app.post('/auth/proses_login', c_auth.proses_login )

app.get('/toko',cek_login, c_toko.index)
app.listen(port, ()=>{
    console.log('aplikasi berjalan di http://localhost:3000')
})

