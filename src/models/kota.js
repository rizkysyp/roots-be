const Pool = require("../config/db");

const addKota = ({ nama, kode }) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO kota(nama,kode) VALUES ('${nama}','${kode}')`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const updateKota = ({ id, nama, kode }) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `UPDATE kota SET nama = COALESCE($2, nama), kode = COALESCE($3, kode) WHERE id_kota = $1`,
      [id, nama, kode],
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};
const deleteKota = (id) => {
  console.log(id);
  return new Promise((resolve, reject) => {
    Pool.query(`DELETE FROM kota WHERE id_kota='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
};

const getAll = ({ search, sortBy }) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT id_kota, kota.nama,kota.kode FROM kota as kota
        WHERE kota.nama ILIKE ('%${search}%') ORDER BY kota.${sortBy} `,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};
const getDetailKota = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT kota.id, kota.name,,kota.kode FROM kota as kota WHERE kota.id = '${id}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    )
  );
};
module.exports = {
  addKota,
  updateKota,
  deleteKota,
  getAll,
  getDetailKota,
};
