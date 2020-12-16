const models = require('../models');

exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express', user: req.user });
  }

exports.submit_lead = function(req, res, next) {
    let email = req.body.lead_email
    if (email != ''){
      console.log("this is your mail: ", email)
      return models.Lead.create({
        email: email
      }).then(lead => {
        res.redirect('/leads');
      })
    }
    else{
        res.redirect('/')
    
  }
}

exports.show_leads = function(req, res, next){
  models.Lead.findAll().then(leads =>{
    res.render('leads/leads', { title: 'Express', leads: leads })
  });
}

exports.show_lead = function(req, res, next){
  models.Lead.findOne({
    where: {
      id: req.params.lead_id
    }
  }).then( lead => {
    res.render( 'leads/lead', {lead : lead})
  });
  
}

exports.show_edit_lead = function(req, res, next){
  models.Lead.findOne({
    where: {
      id: req.params.lead_id
    }
  }).then( lead => {
    res.render('./leads/edit_lead', {lead : lead})
  });
}


exports.edit_lead = function(req, res, next){
  return models.Lead.update({
    email: req.body.lead_email
  },
  {
    where: {
      id: req.params.lead_id
    }
  }).then( result => {
    res.redirect('/lead/' + req.params.lead_id)
  })
  
  
}

exports.delete_lead= function(req, res, next){
  return models.Lead.destroy(
  {
    where: {
      id: req.params.lead_id
    }
  }).then( result => {
    res.redirect('/leads')
  });
  
  
}

exports.delete_lead_json= function(req, res, next){
  return models.Lead.destroy(
  {
    where: {
      id: req.params.lead_id
    }
  }).then( result => {
    res.send({msg: "Success"});
  })
  
  
}