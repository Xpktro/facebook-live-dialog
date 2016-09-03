window.onload = function() {
  document.getElementById('liveButton').onclick = function() {
    FB.ui(
      {
        display: 'popup',
        method: 'live_broadcast',
        phase: 'create',
      },
      function(response) {
        if(response != undefined && response.id) {
          FB.ui({
            display: 'popup',
            method: 'live_broadcast',
            phase: 'publish',
            broadcast_data: response,
          }, function(response) {});
        }
    });
  }
};
