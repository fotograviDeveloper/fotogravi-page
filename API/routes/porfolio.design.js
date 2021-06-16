const { Router } = require("express")
const router = Router()
const pDesign = require ("../database/portafolioDesign.json")
router.get('/api/Design', (req, res) =>{

res.json(pDesign)
    
})

module.exports = router;