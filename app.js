const express = require('express')
const app = express()
const fs = require('fs')
const ytdl = require('ytdl-core')
const download = require('./videoDownload')
const path = require('path');
require('dotenv/config')


app.use(
    express.urlencoded({
        extended:true,
    }),
) 
app.use(express.json())

app.get('/', (req, res)=>{

    res.sendFile('./index.html', { root: path.join(__dirname)}, (err) => {
        console.log(err)
    })
})

app.use(express.static(__dirname + '/public'))

app.post('/download', (req, res)=>{
    let { url, nome } = req.body
    
    let downloadOptions = { 
        video :{
            url,
            nome
        },
        audioQuality : {
            quality: 'highestaudio'
        },
        path : './videos/'
    }

    
    download(downloadOptions)

    setTimeout(()=>{
        res.download('./videos/' + nome + '.mp4')
    }, 3000)
})

let porta = process.env.PORT || 8000
try {
    app.listen(porta)
    console.log('Servidor rodando na porta ', porta)
} catch (error) {
    console.log('ERrOO')
    console.log(error)
}
