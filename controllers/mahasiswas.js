// import { v4 as uuidv4 } from 'uuid';
import { conn } from '../koneksi.js';
let mahasiswas = [];

export const getAllMahasiswa = (req, res) => {
    mahasiswas = conn.query("SELECT * FROM mahasiswa", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    res.send(mahasiswas);
};