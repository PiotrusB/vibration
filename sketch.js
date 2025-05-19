function setup() {
  createCanvas(100, 100);
  background(220);

  // Check if vibration is supported
  if (navigator.vibrate) {
    // Pattern: vibrate 100ms, pause 50ms, vibrate 100ms (tapping)
    navigator.vibrate([100, 50, 100]);
  } else {
    console.log("Vibration API not supported on this device.");
  }
}

function draw() {
  // Nothing here needed
}
