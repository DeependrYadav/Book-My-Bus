let Tbody = document.getElementById("Tbody");
 let alldata=[
    {
        "id": 1,
        "BusName": "Bus 1",
        "DriverName": "Driver 1",
        "BusType": "Type A",
        "RouteFrom": "City A",
        "RouteTo": "City B",
        "ArrivalTime": "08:00 AM",
        "DepartureTime": "09:30 AM",
        "Seats": 50,
        "AvailableSeats": 10,
     
      },
      {
        "id": 2,
        "BusName": "Bus 2",
        "DriverName": "Driver 2",
        "BusType": "Type B",
        "RouteFrom": "City B",
        "RouteTo": "City C",
        "ArrivalTime": "10:00 AM",
        "DepartureTime": "12:00 PM",
        "Seats": 40,
        "AvailableSeats": 20,
       
      

 }]
getProduct()
function getProduct(){
    fetch("https://fashionhub-mrc2.onrender.com/AllProducts")
    .then((Response)=>{
        return Response.json()
    })
    .then((data)=>{
        console.log(alldata);
        //console.log(data);
        showData(alldata)
    })
}



function showData(data){
    Tbody.innerHTML = null;
    let htmlData = data.map((el)=>getCard(el.id,el.BusName,el.DriverName,el.BusType,el.RouteFrom,el.RouteTo,el.ArrivalTime,el.DepartureTime,el.Seats,el.AvailableSeats))
    Tbody.innerHTML = htmlData.join(" ");
    
    let tr = document.getElementsByClassName("edit");
    let deletebtn = document.getElementsByClassName("delete");
     console.log(tr);
    for(let k of tr){
        k.addEventListener("click",(e)=>{
            let rowId = e.target.dataset.id;

            toggleBilling(rowId,e.target)
        })
    }

    for(let btn of deletebtn){
        btn.addEventListener("click",(e)=>{
            let id = e.target.dataset.id;
            deleteProduct(id)
            // alert(id)
        })
    }

}
function toggleBilling(rowId,element) {
    // Select the billing text fields
    const billingItems = document.querySelectorAll(`#ID${rowId} input[type="text"]`);
    
    let obj= {}
    // Toggle the billing text fields
    billingItems.forEach((item) => {
        item.disabled = !item.disabled;
        let el = item.getAttribute("id")
        
        if(!item.disabled){
            element.innerText = "Save"
            item.style.border ="1px solid black"  
            item.style.width ="100%"   
        }else{
            obj[el] = item.value
            // console.log(1)
            // console.log(obj);
            element.innerText = "Edit"
            item.style.border ="none"  
            item.style.width ="100%"
            
        }
    });
    // console.log(obj)
    // console.log(billingItems[0].disabled == undefined)
    if(Object.keys(obj).length !== 0){
        updateData(obj,rowId)
    }
  }

 function updateData(obj,id){
    console.log(obj)
    fetch(`https://fashionhub-mrc2.onrender.com/AllProducts/${id}`,{
        method : "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(obj)
      })
      setTimeout(()=>{
        getProduct()
    },1200)
  }

  function deleteProduct(id){
    fetch(`https://fashionhub-mrc2.onrender.com/AllProducts/${id}`,{
        method : "DELETE"
    })
    setTimeout(()=>{
        getProduct()
    },1200)
  }

function getCard(id,BusName,DriverName,BusType,RouteFrom,RouteTo,ArrivalTime,DepartureTime,Seats,AvailableSeats){
    let imgURL="https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/1860x1050-volvo-9700-CGI1?qlt=82&wid=1024&ts=1656931444230&dpr=off&fit=constrain";
    if(id%2==0){
       imgURL="https://img.etimg.com/thumb/width-1200,height-900,imgsize-216810,resizemode-75,msid-94221038/news/bengaluru-news/bengalureans-can-soon-enjoy-double-decker-bus-rides-in-new-e-avatar.jpg";
   }
  
    return `
    <tr id=ID${id}>
        <td>${id}</td>
        
        <td><input type="text" id="title" value="${BusName}"  disabled></td>
    
        <td><input type="text" id="rating" value=${DriverName}  disabled></td>
        <td><input type="text" id="price" value=${BusType}  disabled></td>
        <td><input type="text" id="rating" value=${RouteFrom}  disabled></td>
        <td><input type="text" id="rating" value=${RouteTo}  disabled></td>
        <td><input type="text" id="rating" value=${ArrivalTime}  disabled></td>
        <td><input type="text" id="rating" value=${DepartureTime}  disabled></td>
        <td><input type="text" id="price" value=${Seats}  disabled></td>
        <td><input type="text" id="price" value=${AvailableSeats}  disabled></td>
        <td><img class = "bus-photo" src=${imgURL} alt=""></td>
        <td class="edit" data-id=${id} >Edit</td>
        <td class="delete" data-id=${id}>Delete</td>
    </tr>
    `
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