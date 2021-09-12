document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var endTime = (new Date('2021-09-13T21:00:00+02:00').getTime() / 1000);

  // Set up FlipDown
  var flipdown = new FlipDown(endTime, {
    headings: ["Dager", "Timer", "Minutter", "Sekunder"]})

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });



});
