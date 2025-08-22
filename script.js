let slideIndex = 1;
ShowSlides(slideIndex);

export function PlusSlides(n) {
    ShowSlides(slideIndex += n);
}

export function CurrentSlide(n) {
    ShowSlides(slideIndex = n);
}

function ShowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  const lineRefs = React.useRef(slides);

  for (i = 0; i < slides.length; i++) {
    lineRefs.current[i].display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}