const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

router.get('/:table', (req, res, next) => {
    knex(req.params.table)
      .then((data) => {
        res.json({
          [req.params.table] : data
        })
      })
      .catch((err) => {
        res.json({
          'errors': err
        })
      })
})

router.post('/:table', (req, res, next) => {
  if (JSON.stringify(req.body) == JSON.stringify({})) {
    res.json({
      message: 'Sorry, you did not include a proper post',
      body: req.body
    })
  } else {
    knex(req.params.table)
      .insert(req.body)
      .returning('*')
      .then((data) => {
        return knex(req.params.table)
      })
      .then((data)=> {
        res.json({
          [req.params.table] : data
        })
      })
      .catch((err) => {
        res.json({
          'errors': err
        })
      })
  }
})

router.put('/:table/:id', (req, res, next) => {
  if (JSON.stringify(req.body) == JSON.stringify({})) {
    res.json({
      message: 'Sorry, you did not include a proper update',
      body: req.body
    })
  } else {
    knex(req.params.table)
      .where('id', req.params.id)
      .update(req.body)
      .returning('*')
      .then((data) => {
        return knex(req.params.table)
      })
      .then((data)=> {
        res.json({
          [req.params.table] : data
        })
      })
      .catch((err) => {
        res.json({
          'errors': err
        })
      })
  }
})

router.delete('/:table/:id', (req, res, next) => {
  knex(req.params.table)
    .where('id', req.params.id)
    .del()
    .then((data) => {
      return knex(req.params.table)
    })
    .then((data)=> {
      res.json({
        [req.params.table] : data
      })
    })
    .catch((err) => {
      res.json({
        'errors': err
      })
    })
})

module.exports = router;
