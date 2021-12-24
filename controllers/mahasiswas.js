// import { v4 as uuidv4 } from 'uuid';
// var kon = require('../koneksi.js');
import { conn } from '../koneksi.js';
let mahasiswas = [];

export const getAllMahasiswa = (req, res) => {
    mahasiswas = conn.connect(function (err) {
        if (err) throw err;
        //Select all customers and return the result object:
        conn.query("SELECT * FROM mahasiswa", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });
    res.send(mahasiswas);
};