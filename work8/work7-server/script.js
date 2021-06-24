const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var cors = require('cors');

const app = express();

app.use(bodyParser.json({ extended: true })); // парсинг json,a
app.use('/', express.static('work7-front'));
app.use(cors()); // защита от обращения одного сайта/страницы к другому сайту/странице

app.listen(3000, () => {
    console.log('Server is runing at a port 3000!!!') // подняли сервер через 3000 порт
});

app.get("/catalogData", (req, res) => {
    fs.readFile("../work7-server/catalogData.json", "utf-8", (err,data) => {
        res.send(data);
    });
});

// Добавить ручку удаления товара!!!

app.post('/addToCart', (req, res) => { // метод отправления на сервер объекта из catalogData.json
    fs.readFile("../work7-server/cart.json", "utf-8", (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            const cart = JSON.parse(data); // парсим карточку товара и пушим его в массив cart
            const item = req.body;

            //console.log(item)

            cart.push(item) 

            fs.writeFile('../work7-server/catalogData.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}')
                } else {
                    res.send('{"result": 1}')
                }
            });
        }
    });
});