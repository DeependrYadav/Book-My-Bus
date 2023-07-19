
let baseURL = "";
let buses = 0;
let users = 0;
let routes = 0;

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
let logout=document.getElementById("out")
let log=document.getElementById("logout");
log.addEventListener("click",()=>{
    logout.style.display = "inline"
    setTimeout(() => {
        logout.style.display = "none";
        window.open("./index.html")
    }, 2000)
})