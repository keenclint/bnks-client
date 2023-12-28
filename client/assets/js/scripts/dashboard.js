const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");

    const loginEndpoint = 'https://stantrust-server.onrender.com';

    fetch(`${loginEndpoint}/dashboard/${username}`) // Replace URL with your API endpoint
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      //return response.json();
      return response.json();

    })
    .then(data => {
      // Once data is fetched, handle and display it
      displayUserData(data);
      console.log("log is",data)

    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });


  function displayUserData(res) {
      if (isLoggedIn === "true" && username) {
        const data = JSON.parse(res.data)
        document.getElementById("acc-num").innerText = data.account;
        document.getElementById("balance").innerText = `$${data.balance}.00`;
        document.getElementById("deposits").innerText = `$${data.deposits}.00`;
        document.getElementById("withdrawals").innerText = `$${data.withdrawals}.00`;
        //document.getElementById("transactions").innerText = res.transactions;
        // document.getElementById("idr").innerText = res.idr;
        // document.getElementById("dps").innerText = res.dps;
        // document.getElementById("loans").innerText = res.loans;    
      } else {
        // Redirect to the login.html page if the user is not logged in
        window.location.href = "login.html";
      }
  
    }