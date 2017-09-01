const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

router.get('/:table', (req, res, next) => {
    knex(req.params.table)
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.json(err)
      })
})

router.post('/:table', (req, res, next) => {
  if (!req.body.post) {
    res.json({
      message: 'Sorry, you did not include a proper post'
    })
  }
})

router.put('/:table/:id', (req, res, next) => {

})

router.delete('/:table/:id', (req, res, next) => {

})

module.exports = router;
