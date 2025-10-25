const images = ["images/image1.jpeg", "images/image2.jpg", "images/image3.jpeg", "images/image4.jpeg", "images/image5.jpg"];
const captions = ["Alex attempting to do acrobatics", "Alex thinking about throwing", "(From left to right) Alex and his brothers David and Joan", 
    "Alex sleeping", "Alex's favorite pokemon, Spheal"]
let curr_idx = 0;

let prevButton = document.getElementById("prevBtn");
prevButton.addEventListener('click', function(){
    let sliderImage = document.getElementById("sliderImage");
    let sliderCaption = document.getElementById("sliderCaption")

    if(curr_idx === 0){
        curr_idx = 5;
    }

    curr_idx = curr_idx - 1;

    sliderImage.src = images[curr_idx];
    sliderCaption.textContent = captions[curr_idx];
})


let nextButton = document.getElementById("nextBtn");
nextButton.addEventListener('click', function(){
    let sliderImage = document.getElementById("sliderImage");

    if(curr_idx === 4){
        curr_idx = -1;
    }

    curr_idx = curr_idx + 1;
    
    sliderImage.src = images[curr_idx];
    sliderCaption.textContent = captions[curr_idx];
})
