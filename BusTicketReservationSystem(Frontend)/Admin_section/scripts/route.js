let uuid=JSON.parse(localStorage.getItem("uuid")) || "";

let baseURL = `https://honest-wing-5796-production.up.railway.app`;

 document.getElementById("routeForm").addEventListener("submit",function (event) {
  event.preventDefault();
    let obj={ 
         "routeFrom":document.getElementById("routeFrom").value,
         "routeTo":document.getElementById("routeTo").value,
         "distance":document.getElementById("distance").value
    }
    console.log(obj);
    fetch(`${baseURL}/route/add?key=${uuid}`,{
        method : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(obj)
      })
      .then( function(response) {
        if (response.status === 400){
          response.json().then(data => {
            alert(data.message); // Display JSON content in an alert
          });
        }else{
          return response.json(); // Parse and return JSON response
        }
      })
      .then((data) => {
        // Handle the response data if required
        if(data)alert("Succefully Added");
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch request
        console.error("Fetch error:", error);
      });
      
    });
    
 
    document.addEventListener("DOMContentLoaded", function () {
      // Add event listener to the "Logout" link
      var logoutLink = document.getElementById("logout");
      logoutLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        Swal.fire({
          title: "Logout Confirmation",
          text: "Are you sure you want to logout?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Logout",
          cancelButtonText: "Cancel",
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
        }).then((result) => {
          if (result.isConfirmed) {
            // Handle the logout action here (replace with your actual logout logic)
            Swal.fire({
              title: "Logged Out!",
              text: "You have been successfully logged out.",
              icon: "success",
              confirmButtonColor: "#3085d6",
            }).then(() => {
              // Redirect to the login page or any other designated page for logging out
              fetch(`${baseURL}/admin/logout?key=${uuid}`,{
                  method: 'POST',
                  headers: {
                    'Content-type': 'application/json'
                  }
                }).then((res)=>res.json())
                .then((data)=>{
                  console.log(data);
                  alert("Check");
                  window.location.href = "../index.html"; // Replace "login.html" with the actual logout page URL
                });
            });
          }
        });
      });
    });