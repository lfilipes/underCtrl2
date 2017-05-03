var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlGourmet = require('../controllers/gourmetController');
var ctrlReservoir = require('../controllers/reservoirController');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// reservoir Get
router.get('/data', ctrlReservoir.rd_data);
router.get('/data_c', ctrlReservoir.rd_data_c);
router.get('/data_last', ctrlReservoir.rd_data_last);
// rotas do Leandro
router.get('/data/1/latest', ctrlReservoir.rd_data_latest);
router.get('/data/1/UCSCistern1', ctrlReservoir.rd_data_C);
router.get('/data/1/UCSCistern1/bl2', ctrlReservoir.rd_data_C1);
router.get('/data/1/UCSCistern1/bl5', ctrlReservoir.rd_data_C2);

router.get('/data/1/UCSReserv1/bl3', ctrlReservoir.rd_data_R1bl3);
router.get('/data/1/UCSReserv1/bl5', ctrlReservoir.rd_data_R1bl5);
//
router.get('/data/1/UCSReserv1', ctrlReservoir.rd_data_R1);
router.get('/data/1/UCSReserv1/bl2', ctrlReservoir.rd_data_R1bl2);


// reservoir Post
router.post('/data', ctrlReservoir.wr_data);

// gourmet Get
router.get('/data1', ctrlGourmet.rd_data);
// gourmet Post
router.post('/data1', ctrlGourmet.wr_data);

module.exports = router;
