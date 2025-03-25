const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
console.log(arrows);
console.log(movieLists);
arrows.forEach((arrow, i) => {
    const widthratio = Math.floor(window.innerWidth / 300)
  let clickcounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    console.log(imageItem);

    clickcounter++;
    if (imageItem - (4 + clickcounter) + (4-widthratio) >= 0) {
      const currentTransform = window.getComputedStyle(movieLists[i]).transform;
      const currentTranslateX = currentTransform !== 'none' ? parseInt(currentTransform.split(',')[4]) : 0;
      movieLists[i].style.transform = `translateX(${currentTranslateX - 300}px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
    }
  });
});


/* dark mode */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")
ball.addEventListener("click",function(){
    items.forEach((item)=> item.classList.toggle("active"))
    
   
    
})