const express = require('express');

const router = express.Router;

// a router can have middleware that applies only to the router
router.use(express.json());

router.get('/', (req, res) => {
    res.send('get to /suppliers')
})

router.get('/:name', (req, res) => {
    const { name } = req.params;
    res.send(`get to /suppliers/${name}`)
})

module.exports = router;