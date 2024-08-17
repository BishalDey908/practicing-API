const fs = require('fs');
const path = require('path');
const textModel = require('../model/textModel');

// Controller for handling file upload
exports.uploadFile = (req, res) => {
    const filePath = path.join(__dirname, '..', req.file.path);

    // Read and print the content of the file
    fs.readFile(filePath, 'utf8', async(err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading file', error: err });
        }

        console.log('File Content:', data);
        const setdata = await textModel.create({text:data})
        return res.status(200).json({ message: 'File uploaded and set data in DB successfully', content: data });
    });
};
