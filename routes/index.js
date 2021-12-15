const express = require('express')
const router = express.Router()
const confirmAuthentication = require('../public/javascripts/confirmAuthenticaton.js')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const formData = req.body

  const { authentication, errorMsg, userName } = confirmAuthentication(formData)
  if (authentication) {
    res.render('mainPage', { userName })
  } else {
    res.render('index', { emailValue: formData.email, errorMsg })
  }
  
})

module.exports = router