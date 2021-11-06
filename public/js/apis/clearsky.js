const APIKEY = "d19d0c16157ce3486e364b59c5b2484e";

router.get("/fetch_clearsky", async (req, res) => {
    const url = "api.openweathermap.org/data/2.5/weather?q={city name}&appid=" + {APIKEY};
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

    console.log("RESPONSE ", response);
    res.json(response.url);

    const clear = response.json;
    return clear;

});