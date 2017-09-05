const express = require('express');
const router = express.Router();
const query = require('../db/query');
const knex = require('../db/knex');

router.get('/officestaffs', (req, res, next) => {
    knex('officestaff')
      .then((data) => {
        res.json({
          officestaff : data
        })
      })
      .catch((err) => {
        res.json({
          errors: {
            msg: "Something went wrong"
          }
        })
      })
})

router.get('/sundayschoolstaffs', (req, res, next) => {
    knex('sundayschoolstaff')
      .then((data) => {
        res.json({
          sundayschoolstaff : data
        })
      })
      .catch((err) => {
        res.json({
          errors: {
            msg: "Something went wrong"
          }
        })
      })
})

router.get('/elders', (req, res, next) => {
    knex('elders')
      .then((data) => {
        res.json({
          elders : data
        })
      })
      .catch((err) => {
        res.json({
          errors: {
            msg: "Something went wrong"
          }
        })
      })
})

router.get('/deacons', (req, res, next) => {
    knex('deacons')
      .then((data) => {
        res.json({
          deacon : data
        })
      })
      .catch((err) => {
        res.json({
          errors: {
            msg: "Something went wrong"
          }
        })
      })
})


router.get('/worshipschedules', (req, res, next) => {
    knex('worshipscehdule')
      .then((data) => {
        res.json({
          worshipschedules : data
        })
      })
      .catch((err) => {
        res.json({
          errors: {
            msg: "Something went wrong"
          }
        })
      })
})

router.get('/ministries', (req, res, next) => {
    knex('ministries')
      .then((data) => {
        res.json({
          ministries : data
        })
      })
      .catch((err) => {
        res.json({
          errors: {
            msg: "Something went wrong"
          }
        })
      })
})

router.get('/goodnewsarchives', (req, res, next) => {
    knex('goodnewsarchive')
      .then((data) => {
        res.json({
          goodnewsarchives : data
        })
      })
      .catch((err) => {
        res.json({
          errors: {
            msg: "Something went wrong"
          }
        })
      })
})

router.get('/communityoutreaches', (req, res, next) => {
    knex('communityoutreach')
      .then((data) => {
        res.json({
          communityoutreaches : data
        })
      })
      .catch((err) => {
        res.json({
          errors: {
            msg: "Something went wrong"
          }
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
          [req.params.table] : data,
          "errors": {
            "msg": "Something went wrong"
          }
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
          [req.params.table] : data,
          "errors": {
            "msg": "Something went wrong"
          }
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
        [req.params.table] : data,
        "errors": {
          "msg": "Something went wrong"
        }
      })
    })
    .catch((err) => {
      res.json({
        'errors': err
      })
    })
})

module.exports = router;
