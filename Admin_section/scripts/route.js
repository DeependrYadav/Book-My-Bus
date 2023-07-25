//let uuid=localStorage.getItem("uuid") || "";
let uuid="wt0Ob5";
let baseURL = `http://localhost:8080`;
 let routefrom=document.getElementById("routeFrom");
 let routeTo=document.getElementById("routeTo")
 let  distance=document.getElementById("distance")
 document.getElementById("routeForm").addEventListener("submit",function (event) {
  event.preventDefault();
    let obj={ 
         "routeFrom":routefrom,
         "routeTO":routeTo,
         "distance":distance
    }
    fetch(`${baseURL}/route/add?key=${uuid}`,{
        method : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(obj)
      }).then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          alert("Network response was not ok");
        }
        // Assuming the response contains JSON data, you can parse it
        return response.json();
      })
      .then((data) => {
        // Handle the response data if required
        alert("Succefully Added");
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch request
        console.error("Fetch error:", error);
      });
      
    });
    
 
