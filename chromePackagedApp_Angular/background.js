/*
    Angular Chrome Packaged App
    StephaneAG - 2014
*/

chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('../main.html', {
    id: "GDriveExample",
    bounds: {
      width: 500,
      height: 600
    },
    minWidth: 500,
    minHeight: 600,
    frame: 'none' // create a chromeless window
  });
});

chrome.runtime.onInstalled.addListener(function() {
  console.log('installed');
});

chrome.runtime.onSuspend.addListener(function() { 
  // Do some simple clean-up tasks.
});