fetch('/fetch_data').then(res => res.json()).then(data => {
    console.log(data);
    var tm = data.sys.sunset;
    var time = new Date(tm * 1000).toTimeString();
    var date = new Date(tm * 1000).toDateString();

    console.log(date, time);
}).catch(err => {
   console.log(err);
})