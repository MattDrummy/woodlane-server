const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// all get all routes

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
  getAll(req, res, 'deacons', 'deacon')
})

router.get('/worshipschedules', (req, res, next) => {
  getAll(req, res, 'worshipscehdule', 'worshipschedule')
})

router.get('/ministries', (req, res, next) => {
  getAll(req, res, 'ministries', 'ministries')
})

router.get('/goodnewsarchives', (req, res, next) => {
  getAll(req, res, 'goodnewsarchive', 'goodnewsarchives')
})

router.get('/communityoutreaches', (req, res, next) => {
  getAll(req, res, 'communityoutreach', 'communityoutreaches')
})

router.get('/pastsermonarchives', (req, res, next) => {
  getAll(req, res, 'pastsermonarchive', 'pastsermonarchive')
})

router.get('/goingdeepers', (req, res, next) => {
  getAll(req, res, 'goingdeeper', 'goingdeeper')
})

router.get('/resources', (req, res, next) => {
  getAll(req, res, 'resources', 'resource')
})

router.get('/memoryverses', (req, res, next) => {
  getAll(req, res, 'memoryverse', 'memoryverse')
})

router.get('/weeklyscriptures', (req, res, next) => {
  getAll(req, res, 'weeklyscriptures', 'weeklyscripture')
})

router.get('/currentsermons', (req, res, next) => {
  getAll(req, res, 'currentsermon', 'currentsermon')
})

router.get('/sermonparagraphs', (req, res, next) => {
  getAll(req, res, 'sermonparagraph', 'sermonparagraph')
})

// all get single routes

router.get('/officestaffs/:id', (req, res, next) => {
  getRecord(req, res, 'officestaff', 'officestaff')
})

router.get('/sundayschoolstaffs/:id', (req, res, next) => {
  getRecord(req, res, 'sundayschoolstaff', 'sundayschoolstaff')
})

router.get('/elders/:id', (req, res, next) => {
  getRecord(req, res, 'elders', 'elders')
})

router.get('/deacons/:id', (req, res, next) => {
  getRecord(req, res, 'deacons', 'deacon')
})

router.get('/worshipschedules/:id', (req, res, next) => {
  getRecord(req, res, 'worshipscehdule', 'worshipschedule')
})

router.get('/ministries/:id', (req, res, next) => {
  getRecord(req, res, 'ministries', 'ministries')
})

router.get('/goodnewsarchives/:id', (req, res, next) => {
  getRecord(req, res, 'goodnewsarchive', 'goodnewsarchives')
})

router.get('/communityoutreaches/:id', (req, res, next) => {
  getRecord(req, res, 'communityoutreach', 'communityoutreaches')
})

router.get('/pastsermonarchives/:id', (req, res, next) => {
  getRecord(req, res, 'pastsermonarchive', 'pastsermonarchive')
})

router.get('/goingdeepers/:id', (req, res, next) => {
  getRecord(req, res, 'goingdeeper', 'goingdeeper')
})

router.get('/resources/:id', (req, res, next) => {
  getRecord(req, res, 'resources', 'resource')
})

router.get('/memoryverses/:id', (req, res, next) => {
  getRecord(req, res, 'memoryverse', 'memoryverse')
})

router.get('/weeklyscriptures/:id', (req, res, next) => {
  getRecord(req, res, 'weeklyscriptures', 'weeklyscripture')
})

router.get('/currentsermons/:id', (req, res, next) => {
  getRecord(req, res, 'currentsermon', 'currentsermon')
})

router.get('/sermonparagraphs/:id', (req, res, next) => {
  getRecord(req, res, 'sermonparagraph', 'sermonparagraph')
})


// all post routes

router.post('/officestaffs', (req, res, next) => {
  postOne(req, res, 'officestaff', 'officestaff')
})

router.post('/sundayschoolstaffs', (req, res, next) => {
  postOne(req, res, 'sundayschoolstaff', 'sundayschoolstaff')
})

router.post('/elders', (req, res, next) => {
  postOne(req, res, 'elders', 'elders')
})

router.post('/deacons', (req, res, next) => {
  postOne(req, res, 'deacons', 'deacon')
})

router.post('/worshipschedules', (req, res, next) => {
  postOne(req, res, 'worshipschedule', 'worshipschedules')
})

router.post('/ministries', (req, res, next) => {
  postOne(req, res, 'ministries', 'ministries')
})

router.post('/goodnewsarchives', (req, res, next) => {
  postOne(req, res, 'goodnewsarchive', 'goodnewsarchives')
})

router.post('/communityoutreaches', (req, res, next) => {
  postOne(req, res, 'communityoutreach', 'communityoutreaches')
})

router.post('/pastsermonarchives', (req, res, next) => {
  postOne(req, res, 'pastsermonarchive', 'pastsermonarchive')
})

router.post('/goingdeepers', (req, res, next) => {
  postOne(req, res, 'goingdeeper', 'goingdeeper')
})

router.post('/resources', (req, res, next) => {
  postOne(req, res, 'resoures', 'resource')
})

router.post('/memoryverses', (req, res, next) => {
  postOne(req, res, 'memoryverse', 'memoryverse')
})

router.post('/weeklyscriptures', (req, res, next) => {
  postOne(req, res, 'weeklyscriptures', 'weeklyscripture')
})

router.post('/currentsermons', (req, res, next) => {
  postOne(req, res, 'currentsermon', 'currentsermon')
})

router.post('/sermonparagraphs', (req, res, next) => {
  postOne(req, res, 'sermonparagraph', 'sermonparagraph')
})

// all put routes

router.put('/officestaffs/:id', (req, res, next) => {
  updateOne(req, res, 'officestaff', 'officestaff')
})

router.put('/sundayschoolstaffs/:id', (req, res, next) => {
  updateOne(req, res, 'sundayschoolstaff', 'sundayschoolstaff')
})

router.put('/elders/:id', (req, res, next) => {
  updateOne(req, res, 'elders', 'elders')
})

router.put('/deacons/:id', (req, res, next) => {
  updateOne(req, res, 'deacons', 'deacon')
})

router.put('/worshipschedules/:id', (req, res, next) => {
  updateOne(req, res, 'worshipschedule', 'worshipschedules')
})

router.put('/ministries/:id', (req, res, next) => {
  updateOne(req, res, 'ministries', 'ministries')
})

router.put('/goodnewsarchives/:id', (req, res, next) => {
  updateOne(req, res, 'goodnewsarchive', 'goodnewsarchives')
})

router.put('/communityoutreaches/:id', (req, res, next) => {
  updateOne(req, res, 'communityoutreach', 'communityoutreaches')
})

router.put('/pastsermonarchives/:id', (req, res, next) => {
  updateOne(req, res, 'pastsermonarchive', 'pastsermonarchive')
})

router.put('/goingdeepers/:id', (req, res, next) => {
  updateOne(req, res, 'goingdeeper', 'goingdeeper')
})

router.put('/resources/:id', (req, res, next) => {
  updateOne(req, res, 'resoures', 'resource')
})

router.put('/memoryverses/:id', (req, res, next) => {
  updateOne(req, res, 'memoryverse', 'memoryverse')
})

router.put('/weeklyscriptures/:id', (req, res, next) => {
  updateOne(req, res, 'weeklyscriptures', 'weeklyscripture')
})

router.put('/currentsermons/:id', (req, res, next) => {
  updateOne(req, res, 'currentsermon', 'currentsermon')
})

router.put('/sermonparagraphs/:id', (req, res, next) => {
  updateOne(req, res, 'sermonparagraph', 'sermonparagraph')
})

// all delete routes

router.delete('/officestaffs/:id', (req, res, next) => {
  deleteOne(req, res, 'officestaff', 'officestaff')
})

router.delete('/sundayschoolstaffs/:id', (req, res, next) => {
  deleteOne(req, res, 'sundayschoolstaff', 'sundayschoolstaff')
})

router.delete('/elders/:id', (req, res, next) => {
  deleteOne(req, res, 'elders', 'elders')
})

router.delete('/deacons/:id', (req, res, next) => {
  deleteOne(req, res, 'deacons', 'deacon')
})

router.delete('/worshipschedules/:id', (req, res, next) => {
  deleteOne(req, res, 'worshipschedule', 'worshipschedules')
})

router.delete('/ministries/:id', (req, res, next) => {
  deleteOne(req, res, 'ministries', 'ministries')
})

router.delete('/goodnewsarchives/:id', (req, res, next) => {
  deleteOne(req, res, 'goodnewsarchive', 'goodnewsarchives')
})

router.delete('/communityoutreaches/:id', (req, res, next) => {
  deleteOne(req, res, 'communityoutreach', 'communityoutreaches')
})

router.delete('/pastsermonarchives/:id', (req, res, next) => {
  deleteOne(req, res, 'pastsermonarchive', 'pastsermonarchive')
})

router.delete('/goingdeepers/:id', (req, res, next) => {
  deleteOne(req, res, 'goingdeeper', 'goingdeeper')
})

router.delete('/resources/:id', (req, res, next) => {
  deleteOne(req, res, 'resoures', 'resource')
})

router.delete('/memoryverses/:id', (req, res, next) => {
  deleteOne(req, res, 'memoryverse', 'memoryverse')
})

router.delete('/weeklyscriptures/:id', (req, res, next) => {
  deleteOne(req, res, 'weeklyscriptures', 'weeklyscripture')
})

router.delete('/currentsermons/:id', (req, res, next) => {
  deleteOne(req, res, 'currentsermon', 'currentsermon')
})

router.delete('/sermonparagraphs', (req, res, next) => {
  deleteOne(req, res, 'sermonparagraph', 'sermonparagraph')
})

function getAll(req, res, table, model){
  knex(table)
    .then((data) => {
      res.json({
        [model] : data
      })
    })
    .catch((err) => {
      res.json({
        errors: [{
          msg: "Something went wrong"
        }]
      })
    })
}

function postOne(req, res, table, model){
  if (Object.keys(req.body).length < 1) {
    res.json({
      message: 'Sorry, you did not include a proper post',
      body: req.body
    })
  } else {
    knex(table)
      .insert(req.body)
      .returning('*')
      .then((data) => {
        return knex(table)
      })
      .then((data)=> {
        res.json({
          [model] : data
        })
      })
      .catch((err) => {
        res.json({
          errors: [{
            msg: "Something went wrong"
          }]
        })
      })
  }
}

function updateOne(req, res, table, model) {
  if (Object.keys(req.body).length === 0) {
    res.json({
      message: 'Sorry, you did not include a proper update',
      body: req.body
    })
  } else {
    knex(table)
      .where('id', req.params.id)
      .update(req.body)
      .returning('*')
      .then((data) => {
        return knex(req.params.table)
      })
      .then((data)=> {
        res.json({
          [model] : data
        })
      })
      .catch((err) => {
        res.json({
          errors: [{
            msg: "Something went wrong"
          }]
        })
      })
  }
}

function deleteOne(req, res, table, model){
  knex(table)
    .where('id', req.params.id)
    .del()
    .then((data) => {
      return knex(table)
    })
    .then((data)=> {
      res.json({
        [model] : data
      })
    })
    .catch((err) => {
      res.json({
        errors: [{
          msg: "Something went wrong"
        }]
      })
    })
}

function getRecord(req, res, table, model, id){
  knex(table)
    .where('id', req.params.id)
    .then((data) => {
      res.json({
        [model] : data
      })
    })
    .catch((err) => {
      res.json({
        errors: [{
          msg: "Something went wrong"
        }]
      })
    })
}

module.exports = router;
