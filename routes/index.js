const express = require('express');
const doc = require('pdfkit');
const pdfService = require('../services/pdf_service')


const router = express.Router();

router.get('/invoice', (req, res, next) => {
    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment;filename=invoice.pdf`,
    });
    pdfService.buildPDF(
        (chunk) => stream.write(chunk),
        () => stream.end()
    );

})
module.exports = router