const express = require('express')
var cors = require('cors')
const app = express()
const bodyParser = require('body-parser');
app.use(express.json());
app.use(cors())
const imageDir = 'public/images';
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, imageDir)
    },
    filename: (req, file, cb) => {
        console.log("now the last file uploaded is " + Date.now() + '_' + file.originalname);
        cb(null, Date.now() + '_' + file.originalname)
    }
})
const upload = multer({ storage: storage });
const {Client} = require('pg')

function imagesfoldernames() {
    const filenames = fs.readdirSync(imageDir);
    return filenames
}

async function selectfromtable() {
    const client = new Client ({
        host: "localhost",
        user: "postgres",
        port: "5432",
        password: "arielle",
        database: "postgres"
    });
    await client.connect();
    try {
        const res = await client.query(`SELECT * FROM public."Template"`);
        const myrows = res.rows;
        await client.end();
        return myrows
    } catch(err) {
        console.log(err.message);
    }
}

async function insertInfo(newforminfo) {
    const client = new Client ({
        host: "localhost",
        user: "postgres",
        port: "5432",
        password: "arielle",
        database: "postgres"
    });
    await client.connect();
    try {
        const queryText = 'INSERT INTO Template(text, date) VALUES($1, $2) RETURNING *';
        const values = [newforminfo.text, newforminfo.date];
        const res = await client.query(queryText, values);
        const myrows = res.rows;
        console.log(myrows);
        await client.end();
        return myrows;
    } catch(err) {
        console.log(err.message);
    }
}

const port = 3001

app.get('/', async (req, res) => {
    let myrows = await selectfromtable();
    console.log(myrows);
    res.send(myrows);
})

app.get('/forminfo', async (req, res)=>{
    let newforminfo = req;
    await insertInfo(newforminfo);
    let myrows = await selectfromtable();
    res.send(myrows);
})


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})