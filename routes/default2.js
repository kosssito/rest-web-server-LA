const { Router } = require('express');


const router = Router();

router.get('/',(req, res)=> {
    res.send('Got a POST request2');
  });

module.exports = router;