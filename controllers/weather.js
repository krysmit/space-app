const router = require('express').Router();
const fetch = require("node-fetch");



const APIKEY = "692798ff348f6c77bfb138a18371d9bb";

router.get("/fetch_data", async (req, res) => {
    console.log("/fetch_data endpoint called");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=${APIKEY}`;
    const options = {   
        "method": "GET",
    }

    

    const response = await fetch(url, options)
    .then(res => res.json())
    .catch(e => {
        console.error({
            "message": "no",
            error: e,
        });
    });
    console.log(response);
    res.json(response);

    
});
module.exports = router;