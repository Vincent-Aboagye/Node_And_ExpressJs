var express = require('express');
var router = express.Router();
const {get_landing, submit_lead, show_leads,show_lead,show_edit_lead,edit_lead,delete_lead,delete_lead_json} = require('../controllers/landing');
const {show_signup,show_login,signup,login,logout} = require('../controllers/users')

router.get('/login', show_login);
router.get('/signup', show_signup);
router.post('/login', login);
router.post('/signup', signup);
router.get('/logout', logout);
router.post('/logout', logout);

/* GET home page. */
router.get('/', get_landing );
router.post('/', submit_lead);
router.get('/leads', show_leads);
router.get('/lead/:lead_id', show_lead);
router.get('/lead/:lead_id/edit', show_edit_lead);
router.post('/lead/:lead_id/edit', edit_lead);
router.post('/lead/:lead_id/delete', delete_lead);
router.post('/lead/:lead_id/delete-json', delete_lead_json);
module.exports = router;
