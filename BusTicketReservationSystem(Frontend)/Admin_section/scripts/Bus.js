let Tbody = document.getElementById("Tbody");
 
//let uuid=localStorage.getItem("uuid") || "";
let uuid="wt0Ob5";
let baseURL = `http://localhost:8080`;
getProduct()
function getProduct(){
    fetch(`${baseURL}/Bus/viewAllBus?key=${uuid}`)
    .then((Response)=>{
        return Response.json()
    })
    .then((data)=>{
        console.log(data);
        //console.log(data);
        showData(data)
    })
}



function showData(data){
    Tbody.innerHTML = null;
    let htmlData = data.map((el)=>getCard(el.busId,el.busName,el.driverName,el.busType,el.routeFrom,el.routeTo,el.arrivalTime,el.departureTime,el.seats,el.availabeSeats))
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
    console.log(billingItems);
    let obj= {}
    // Toggle the billing text fields
    billingItems.forEach((item) => {
        item.disabled = !item.disabled;
        let el = item.getAttribute("id")
        console.log(el);
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
      let busId="busId";
    if(obj[busId] == undefined)obj[busId] = id;
    console.log(obj);
    fetch(`${baseURL}/Bus/update?key=${uuid}`,{
        method : "PUT",
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
    fetch(`${baseURL}/Bus/delete/${id}?key=${uuid}`,{
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
        
        <td><input type="text" id="BusName" value="${BusName}"  disabled></td>
    
        <td><input type="text" id="DriverName" value=${DriverName}  disabled></td>
        <td><input type="text" id="BusType" value=${BusType}  disabled></td>
        <td><input type="text" id="RouteFrom" value=${RouteFrom}  disabled></td>
        <td><input type="text" id="RouteTo" value=${RouteTo}  disabled></td>
        <td><input type="text" id="ArrivalTime" value=${ArrivalTime}  disabled></td>
        <td><input type="text" id="DepartureTime" value=${DepartureTime}  disabled></td>
        <td><input type="text" id="Seats" value=${Seats}  disabled></td>
        <td><input type="text" id="AvailableSeats" value=${AvailableSeats}  disabled></td>
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