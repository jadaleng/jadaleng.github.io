document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var endTime = (new Date('2021-09-13T21:00:00+02:00').getTime() / 1000);
  //var endTime = (new Date().getTime() / 1000) + 3;

  // Set up FlipDown
  var flipdown = new FlipDown(endTime, {
    headings: ["Dager", "Timer", "Minutter", "Sekunder"]})

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      setTimeout(()=> {
        const flipdown = document.getElementById("flipdown");
        flipdown.style.opacity = 0.0;
        const body = document.getElementsByTagName("body")[0];
        body.style.backgroundColor = "#FF4D8E"
        

        const mainDiv = document.getElementsByClassName("example")[0];
        mainDiv.style.color = "#FFFBEE"
        mainDiv.innerHTML = "<h1>Valglokalene er stengt</h1><h1>&#x1F91E &#x1F91E &#x1F91E</h1>"
      }, 100);
    });



});
