const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const res = require('express/lib/response');
const port = 3000;
const router = express.Router();
const app = express();

const conn = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
});

conn.connect((err)=> { if (err) throw err;});

app.use('/static',express.static(path.join(__dirname,'/static')));
app.use('/',router);
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');

router.get('/', (req,res) => { res.render('index') });
router.get('/home', (req,res) => { res.render('home'); });
router.get('/about', (req,res) => { res.render('about'); });
router.get('/inbox', (req,res) => { res.render('inbox'); });
router.get('/profile', (req,res) => { res.render('profile'); });

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});