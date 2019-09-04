const express = require('express');

const router = express.Router;

// a router can have middleware that applies only to the router
router.use(express.json());

router.get('/', (req, res) => {
    res.send('get to /products')
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`get to /products/${id}`)
})

module.exports = router;