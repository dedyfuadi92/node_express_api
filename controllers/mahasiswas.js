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
export const createMahasiswa = (req, res) => {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    conn.query("insert into mahasiswa (nim,nama,jurusan) values (?,?,?)",
        [nim, nama, jurusan],
        function (err, result, fields) {
            if (err) {
                conn.log(err);
            } else {
                ok(`Berhasil insert data nim ${nim}`, res);
                console.log('Berhasil insert data');
            }
        }
    );
};
export const getOneMahasiswa = (req, res) => {
    const { nim } = req.params;
    mahasiswas = conn.query(`SELECT * FROM mahasiswa where nim="${nim}"`, function (err, result, fields) {
        if (err) {
            conn.log(err);
        } else {
            ok(result, res);
            console.log('Berhasil ambil data ter-filter');
        }
    });
};
export const deleteOneMahasiswa = (req, res) => {
    const { id_mahasiswa } = req.params;
    mahasiswas = conn.query(`delete FROM mahasiswa where id_mahasiswa="${id_mahasiswa}"`, function (err, result, fields) {
        if (err) {
            conn.log(err);
        } else {
            ok(`Berhasil hapus data dengan id_mahasiswa ${id_mahasiswa}`, res);
            console.log('Berhasil hapus data');
        }
    });
};
/* export const updateOneUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send(`User with id ${id} has been updated`);
}; */