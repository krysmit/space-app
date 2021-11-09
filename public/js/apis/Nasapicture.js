fetch('/fetch_image').then(res => res.json()).then(data => {
    console.log(data);
    var img = document.getElementById('Nasaimg');
    img.setAttribute('src', data);
}).catch(err => {
   console.log(err);
})
