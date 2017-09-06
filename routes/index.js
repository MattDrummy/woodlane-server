const express = require('express');
const router = express.Router();
const query = require('../db/query');
const knex = require('../db/knex');

router.get('/officestaffs', (req, res, next) => {
  getAll(req, res, 'officestaff', 'officestaff')
})

router.get('/sundayschoolstaffs', (req, res, next) => {
  getAll(req, res, 'sundayschoolstaff', 'sundayschoolstaff')
})

router.get('/elders', (req, res, next) => {
  getAll(req, res, 'elders', 'elders')
})

router.get('/deacons', (req, res, next) => {
  getAll(req, res, )
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

router.get('/pastsermonarchives', (req, res, next) => {
    knex('pastsermonarchive')
      .then((data) => {
        res.json({
          pastsermonarchive : data
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

router.get('/goingdeepers', (req, res, next) => {
    knex('goingdeeper')
      .then((data) => {
        res.json({
          goingdeeper : data
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

router.get('/resources', (req, res, next) => {
    knex('resources')
      .then((data) => {
        res.json({
          resource : data
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

router.get('/memoryverses', (req, res, next) => {
    knex('memoryverse')
      .then((data) => {
        res.json({
          memoryverse : data
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

router.get('/weeklyscriptures', (req, res, next) => {
    knex('weeklyscriptures')
      .then((data) => {
        res.json({
          weeklyscripture : data
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

function getAll(req, res, table, model){
  knex(table)
    .then((data) => {
      res.json({
        model : data
      })
    })
    .catch((err) => {
      res.json({
        errors: {
          msg: "Something went wrong"
        }
      })
    })
}
module.exports = router;
