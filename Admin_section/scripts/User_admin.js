let uuid="wt0Ob5";
let baseURL = `http://localhost:8080`;
async function getData() {
    let res=await fetch(`${baseURL}/user/viewall?key=${uuid}`);
    let data=await res.json();
  
    display(data)


}

getData()
let show=document.getElementById("tbody");
let M_img_url="https://img.icons8.com/color/48/null/circled-user-male-skin-type-4--v1.png" ;
let F_img_url="https://img.icons8.com/color/48/null/circled-user-female-skin-type-1-2--v1.png";
function   display(data){
    data.map((elem,index)=>{
      if(index!=0){
        let row=document.createElement("tr");
        let c1=document.createElement("td");
                c1.innerText=index;
         let image=document.createElement("img");
         if(elem.gender=="Male"){
           console.log(elem.gender);
             image.src=M_img_url;
         }
          else 
           image.src=F_img_url;      
           console.log(image);   
        let c2=document.createElement("td");
       c2.append(image)
         
        let c3=document.createElement("td");
          c3.innerText=elem.firstName+" "+elem.lastName;

        let c4=document.createElement("td");
           c4.innerText=elem.email;
        let c5=document.createElement("td");
         c5.innerText="female";
         let c6=document.createElement("td");
           c6.innerText=elem.contact;
           let c7=document.createElement("td");
            c7.innerText=elem.reservation;
            
            let c8=document.createElement("td");
                c8.innerHTML=`<button class="d-button">DELETE</button>`
                row.append(c1,c2,c3,c4,c5,c6,c7,c8)
                show.append(row);
                c8.addEventListener("click",()=>{
                  deleteData(elem.busId)
                  row.style.display="none";
                 
                })
           
        }
    })
}
async function  deleteData(id){
    let res=await fetch(`${baseURL}/user/delete/${id}?key=${uuid}`,{
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
    }
    })
}
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