document.addEventListener("DOMContentLoaded", function() {

  const stepOne = document.getElementById('step12');
  const stepThreeToSix = document.getElementById('step3456');


  // --------------------------------------------------
  // STEP 1 & 2
  // --------------------------------------------------
  stepOne.addEventListener('click', function() {

    const request = axios.get('http://intro-ajax-api.herokuapp.com/')

    .then(function(response) {
      console.log(response);
    });

  });
  // --------------------------------------------------
  // STEP 3, 4, 5, 6
  // --------------------------------------------------
   stepThreeToSix.addEventListener('click', function() {
    const request =  axios.get('http://intro-ajax-api.herokuapp.com/ping')

    .then(function(response) {
      console.log(response.data);

    const dataElement = document.getElementById('step3456');
    const displayResponse = document.getElementById('text');
      displayResponse.innerText = response.data;
      dataElement.appendChild(displayResponse);
      console.log("Yay it worked!");

    })

    .catch(function(error) {
      const displayResponse = document.getElementById('text');
      const dataElement = document.getElementById('step3456');
        displayResponse.innerText = "Sorry this doesn't work, we'll get right on fixing it.";
        dataElement.appendChild(displayResponse);
    })

    .then(function(response) {
      console.log("Hey the request finished!");

    });
  });
  // --------------------------------------------------
  // STEP 7
  // --------------------------------------------------

});
