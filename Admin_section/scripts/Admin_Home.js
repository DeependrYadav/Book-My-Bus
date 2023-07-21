
let baseURL = "";
let buses = 50;
let users = 10;
let routes = 30;

fetchData("AllBus")
fetchData("users")
fetchData("routes")
setTimeout(() => {
    console.log(buses)
    showGraph()
}, 2000)

function fetchData(Query) {
   
    fetch(`${baseURL}/${Query}`)
        .then((Response) => {
            return Response.json()
        })
        .then((data) => {
            console.log(data);
            Query == "AllBuses" ? buses = data.length :Query == "users" ? users = data.length :routes = data.length ;
            
        })

}






function showGraph() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Contry', 'Mhl'],
            ['Buses',buses ],
            ['Users',users ],
            ['Routes',routes ]
        ]);

        var options = {
            title: 'Company Growth Chart',
           // is3D: true
        };

        var chart = new google.visualization.BarChart(document.getElementById('myChart'));
        chart.draw(data, options);
    }
}
// let logout=document.getElementById("out")
// let log=document.getElementById("logout");
// log.addEventListener("click",()=>{
//     logout.style.display = "inline"
//     setTimeout(() => {
//         logout.style.display = "none";
//         window.open("./index.html")
//     }, 2000)
// })
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
            window.location.href = "login.html"; // Replace "login.html" with the actual logout page URL
          });
        }
      });
    });
  });
