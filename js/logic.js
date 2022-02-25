console.log("Jai Shree Ganesh");

// Declare flag vairable
let flag = 0;

// Create a function and pass the num vairable
function slideShow (num){
    
    // Target all the slides class
    let slide = document.getElementsByClassName('slides');

    // if size of index equal to slides.length then resart the sliding   (Right Slide)
    if(num == slide.length){
        flag = 0; 
        num = 0;
    }
    
    // if size of index lessthan < 0 then Decrease the sliding (Left Slide)
    if(num < 0){
        flag = slide.length-1;
        num = slide.length-1;
    }

    // Sliding start by Arrsy 1 by 1 passing the image 
    for(let y of slide){

        // Display none when you slide the image then next image will be come 
        y.style.display = "none";
    }

    // display block mean all images are show on the browser
    slide[num].style.display = "block";
}

// calling the function and pass the flag
slideShow(flag);


// create a 2nd function and target the arrow onclick buttons
function controller(x){
    // adding X  value in the flag 
    flag = flag + x;

    // calling the function and pass the flag
    slideShow(flag);
}