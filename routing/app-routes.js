const router = require('express').Router();
const {resolve} = require ('path');

// réponse index
router.get('/index', (req, res) => {
  res.sendFile(resolve('public', 'index.html'));
});

// réponse contact
router.get('/contact', (req, res) => {
  res.sendFile(resolve('public', 'contact.html'));
});

// réponse services
router.get('/services', (req, res) => {
  res.sendFile(resolve('public', 'services.html'));
});

// Page par défault en cas d'erreur de saisie d'url 
router.get('*', (req, res) => {
  res.sendFile(resolve('public', 'error.html'));
});

module.exports = router;