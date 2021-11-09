const router = require('express').Router();
const fetch = require("node-fetch");
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const histRoutes = require('./histRoutes')

const weather = require('./weather');



const APIKEY = "vndfj4AayPvwX1yadlBaCgAxdOpLyzjqwyuLoznl";

router.get("/fetch_image", async (req, res) => {
    console.log("/fetch_image endpoint called");
    const url = `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`;
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

    res.json(response.url);

    const image = response.hdurl;
    return image;



    
});

 router.use('/', homeRoutes);
 router.use('/api', apiRoutes);
 router.use('/', weather);
 router.use('/', histRoutes);


 module.exports = router;
