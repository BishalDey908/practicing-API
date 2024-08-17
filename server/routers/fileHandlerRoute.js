const express = require('express');
const multer = require('multer');
const fileHandleController = require('../controllers/fileHandleController'); // Import the controller
const auth = require('../middleware/auth');


const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Define the route for file upload
router.post('/', upload.single('file'),auth, fileHandleController.uploadFile);

module.exports = router;
