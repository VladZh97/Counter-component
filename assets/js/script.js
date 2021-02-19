window.addEventListener('DOMContentLoaded', () => {
  init();
})

const init = () => {

  fetch('/data')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { numbersRunningSpeedMilisecond: timeValue, style} = data;
      const { backgroundColor, textColor, numbersColor, titleFontSize, numbersFontSize } = style;


      const body = document.body;
      const numbers = document.querySelectorAll('.count__number');
      const title = document.querySelector('.content__title');
      const arrowTrigger = document.querySelector('.fa-chevron-down');
      const mainContainer = document.querySelector('.content');
      const animateItems = document.querySelectorAll('.animate__item')


      // SET STYLING FROM DEFAULT DATA
      body.style.setProperty('--bg-color', backgroundColor);
      body.style.setProperty('--text-color', textColor);
      title.style.setProperty('--title-size', titleFontSize);

      if(window.innerWidth <=576) {
        title.style.setProperty('--title-size', "39px");
      }

      numbers.forEach(number => {
        number.style.setProperty('--number-color', numbersColor);
        number.style.setProperty('--number-size', numbersFontSize);
      });


      // SCROLL ARROW (SCROLL TO THE MAIN CONTENT)
      const scrollDown = () => {
        mainContainer.scrollIntoView({behavior: "smooth"})
      }
      arrowTrigger.addEventListener('click', scrollDown)




      // OBSERVE ITEMS TO SET ACTIVE CLASS FOR ANIMATION
      const options = {
        threshold: 0.7,
      }
      const appeareOnScroll = new IntersectionObserver(observeItems, options)

      function observeItems(elements) {
        elements.forEach(element => {
          if(!element.isIntersecting) {
            return;
          } else {
            element.target.classList.add('active');
          }
        })
      }

      animateItems.forEach(animateItem =>{
        appeareOnScroll.observe(animateItem)
      })

      

      // USE JQUERY LIBRARY FOR COUNTING NUMBERS
      $('.counter').counterUp({
        time: timeValue,
        beginAt: 0,
      });

    });
}