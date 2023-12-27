const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");

    if (isLoggedIn === "true" && username) {
      document.getElementById("acc-num").innerText = acc_num;
      document.getElementById("balance").innerText = balance;
      document.getElementById("deposits").innerText = acc_num;
      document.getElementById("withdrawals").innerText = withdraw;
      document.getElementById("transactions").innerText = transactions;
      document.getElementById("idr").innerText = idr;
      document.getElementById("dps").innerText = dps;
      document.getElementById("loans").innerText = loans;


      // Sample user data (replace this with your actual data fetching logic)
      const userData = {
        name: "John Doe",
        email: "john@example.com",
        // Add more user data properties here...
      };

      displayUserData(userData);
    } else {
      // Redirect to the login.html page if the user is not logged in
      window.location.href = "login.html";
    }

    function displayUserData(data) {
      const userDataDiv = document.getElementById("userData");
      // Display fetched user data
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          userDataDiv.innerHTML += `<p><strong>${key}:</strong> ${data[key]}</p>`;
        }
      }
    }