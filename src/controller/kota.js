const { response } = require(`../middlewares/response`);
const Kota = require(`../models/kota`);

const kotaController = {
  insert: async (req, res) => {
    try {
      const { nama, kode } = req.body;

      const data = {
        nama,
        kode,
      };

      await Kota.addKota(data);
      return response(res, 200, true, data, "input data success");
    } catch (error) {
      return response(res, 404, false, error, "input data fail");
    }
  },
  updateKota: async (req, res, next) => {
    try {
      const id = req.params.id;

      const { nama, kode } = req.body;

      const data = {
        id,
        nama: nama || null,
        kode: kode || null,
      };
      await Kota.updateKota(data);
      response(res, 200, true, data, "update data success");
    } catch (error) {
      console.log(error);

      response(res, 404, false, "update data failed");
    }
  },
  getAllData: async (req, res, next) => {
    try {
      const sortBy = req.query.sortBy || "id_kota";
      const sortOrder = req.query.sortOrder || "DESC";
      const search = req.query.search || "";

      const result = await Kota.getAll({
        search,
        sortBy,
        sortOrder,
      });
      response(res, 200, true, result.rows, "get data success");
    } catch (error) {
      console.log(error);
      response(res, 404, false, null, "get data");
    }
  },
  delete: async (req, res) => {
    try {
      await Kota.deleteKota(req.params.id);
      response(res, 200, true, null, "delete data success");
    } catch (err) {
      return response(res, 404, false, err, "delete data failed");
    }
  },
  detail: async (req, res) => {
    try {
      const result = await Kota.getDetailKota(req.params.id);
      response(res, 200, true, result.rows, "get data success");
    } catch (err) {
      return response(res, 404, false, err, "get data failed");
    }
  },
};

exports.kotaController = kotaController;
