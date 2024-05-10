const express = require("express");
const router = express.Router();
router.get('/',(req,res)=>{
    res.status(200).json({message:"This is home page"})
})
router.get("/login", (req, res) => {
  res.status(200).json({ message: "This is login page" });
});

module.exports = router;
