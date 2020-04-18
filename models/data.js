const fs = require('fs');
const path = require('path');
const DATA_FILE = path.join(__dirname, '../', 'data', 'data.json');
const SITE_URL = 'http://localhost:3000/';

module.exports = class Data {
    constructor(data) {
        this.getNextId();
        this.timestamp = Date.now();
        this.text = data.text;
    }

    save() {
        console.log('Data model save()');
        
        fs.readFile(DATA_FILE, (err, fileContent) => {
            let loadedData = [];
            if (!err) {
                loadedData = JSON.parse(fileContent);
            }
            loadedData.push(this);
            fs.writeFile(DATA_FILE, JSON.stringify(loadedData), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        fs.readFile(DATA_FILE, function (err, fileContent) {
            if (err) {
                callback([]);
            }
            callback(JSON.parse(fileContent));
        });
    }

    getNextId() {
        fs.readFile(DATA_FILE, (err, fileContent) => {
            let loadedData = [];
            if (!err) {
                loadedData = JSON.parse(fileContent);
                console.log('loadedData.length + 1 = ' + (loadedData.length + 1));
                this.id = loadedData.length + 1;
                return this.id;
            }
            this.id = 1;// si no hay articulos id = 1
            return this.id;
        });
    }

    static getSiteUrl() {
        return SITE_URL;
    }
};