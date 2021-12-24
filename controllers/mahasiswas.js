// import { v4 as uuidv4 } from 'uuid';
import { ok } from '../res.js';
import { conn } from '../koneksi.js';
let mahasiswas = [];

export const getAllMahasiswa = (req, res) => {
    mahasiswas = conn.query("SELECT * FROM mahasiswa", function (err, result, fields) {
        if (err) {
            conn.log(err);
        } else {
            ok(result, res);
            console.log('Berhasil ambil data');
        }
    });
};