const images = ["images/image1.jpeg", "images/image2.jpg", "images/image3.jpeg", "images/image4.jpeg", "images/image5.jpg"];
let curr_idx = 0;

let prevButton = document.getElementById("prevBtn");
prevButton.addEventListener('click', function(){
    let sliderImage = document.getElementById("sliderImage");

    if(curr_idx === 0){
        curr_idx = 6;
    }
    curr_idx = curr_idx - 1;

    sliderImage.src = images[curr_idx];
})


let nextButton = document.getElementById("nextBtn");
nextButton.addEventListener('click', function(){
    let sliderImage = document.getElementById("sliderImage");

    if(curr_idx === 6){
        curr_idx = -1;
    }

    curr_idx = curr_idx + 1;
    sliderImage.src = images[curr_idx];
})
