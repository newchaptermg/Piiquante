const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Import the auth middleware
const multer = require('../middleware/multer-config'); // Import the multer middleware
const sauceCtrl = require('../controllers/sauce'); // Import the sauce controller

// Apply the auth middleware to protect these routes
router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.get('/', auth, sauceCtrl.getAllSauces);

module.exports = router;
