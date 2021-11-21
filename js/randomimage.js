let images = []

for(let i = 1; i < 50; i++){
    images.push(`images/people/PNG/User_${i}.png`)
}

var elems = document.getElementsByClassName("testimonials");
for (var i = 0; i < elems.length; i+= 1) {
    var randomNum = Math.floor(Math.random() * images.length);
    elems[i].src = images[randomNum];
}