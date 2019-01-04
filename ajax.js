document.addEventListener("DOMContentLoaded", function() {

  const stepOne = document.getElementById('step12');
  const stepThreeToSix = document.getElementById('step3456');
  const stepSeven = document.getElementById('step7');
  const stepEight = document.getElementById('step8');


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
  stepSeven.addEventListener('click', function() {
    const request =  axios.get('http://intro-ajax-api.herokuapp.com/count')

    .then(function(response) {
      const countResponse = document.getElementById('count')
      countResponse.innerText = `The total number of requests to this url is: ${response.data}`;
      stepSeven.appendChild(countResponse);
      console.log(response.data);
    });
  });
  // --------------------------------------------------
  // STEP 8
  // --------------------------------------------------
  stepEight.addEventListener('click', function() {
    const request =  axios.get('http://intro-ajax-api.herokuapp.com/time')

    .then(function(response) {
      const timeResponse = document.getElementById('time')
      timeResponse.innerText = `The current date/time is: ${response.data}`;
      stepEight.appendChild(timeResponse);
      console.log(response.data);
    });
  });


});
