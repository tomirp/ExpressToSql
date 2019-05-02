const Handlebars = require('handlebars')
const pdf = require('html-pdf')
const fs = require('fs')


var source = 
`<!DOCTYPE html>

    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="container">
            <p class="display-4 d-flex justify-content-between border-bottom">
                <span class="text-left">Invoice</span>
                <span class="text-right">#{{invoice}}</span>
            </p>
            <img src={{imgSrc}} alt="">
            <h1>Account Details</h1>
            <p>
                Username    : {{username}} <br>
                Name        : {{name}} <br>
                Email       : {{email}} <br>
                Plan        : <strong>Free</strong>
            </p>
        </div>
    </body>
    
    </html>`
    
var data = {}
var template = Handlebars.compile(source) //compile text html
var result = template(data)

fs.writeFileSync('./result.html', 'utf8')

var options = {format: 'Letter'}

pdf.create(htmls, options).toFile('./result.pdf', (err, result) => {
    if(err) return console.log(err.message)

    console.log("PDF BERHASIL DIBUAT")
})