const express = require('express');
const bdEstado = require('../../../db.fake/bd.estado.fake');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.status(200).json({ estados: bdEstado.buscaEstados() });
});


module.exports = router;