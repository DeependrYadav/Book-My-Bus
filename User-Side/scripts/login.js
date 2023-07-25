let currUserID = JSON.parse(localStorage.getItem('uuid'));

if(currUserID == undefined){
    currUserID = null;
}

localStorage.setItem('uuid', JSON.stringify(currUserID));

//custome alert


function openCustomAlert(message) {
    const customAlert = document.getElementById('customAlert');
    const customAlertMessage = document.getElementById('customAlertMessage');

    customAlertMessage.textContent = message;
    customAlert.style.display = 'block';
    setTimeout(() => {
        closeCustomAlert();
    }, 5000)
}

function closeCustomAlert() {
    const customAlert = document.getElementById('customAlert');
    customAlert.style.display = 'none';
}



// Function to show the custom toast notification
function showToast(message) {
    const toastContainer = document.getElementById("customToastContainer");
    const toast = document.createElement("div");
    toast.className = "custom-toast";
    toast.textContent = message;

    toastContainer.appendChild(toast);

    // Auto-hide the toast after 3 seconds (adjust as needed)
    setTimeout(function () {
        toastContainer.removeChild(toast);
    }, 3000);
}

function sign_in() {
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;

    if (password == '' || username == '') {
        showToast('Please fill all mandatory field !!');
        return false;
    }
    if (!document.getElementById("agree").checked) {
        showToast('Please check Accepting all terms & conditions!!');
        return false;
    }
    let signInObj = {
        "userName": username,
        "password": password
    }
    if (signInObj.username == "admin" && signInObj.password == "admin1234") loginAdmin(signInObj);
    else loginUser(signInObj);
}


<<<<<<< HEAD:LoginSignupPage/login.js
function loginUser(obj) {
    let url = "http://localhost:8088/user/login";

    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify that we're sending JSON data
            },
            body: JSON.stringify(obj), // Convert the data to JSON format
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            if (data.userId== null) {
                console.log("If"+data);
                openCustomAlert("Invalid Credantials");
            } else {
                showToast("User Login SucessFull!!");
                console.log(data);
                openCustomAlert("WelCome " + data.type);
                localStorage.setItem("uuid", JSON.stringify(data.uuid));
                localStorage.setItem("username", JSON.stringify(data.type));
                console.log("else"+data);
               window.location.href="../User-Side/index.html";
                //change page location from here after ssucessfull signup
            }


        })
        .catch(error => {
            // console.error('Error posting data:', error);
        });
}
=======
function loginUser(obj){
 let url="http://localhost:8088/user/login";

 fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // Specify that we're sending JSON data
    },
    body: JSON.stringify(obj), // Convert the data to JSON format
})
.then(response => response.json())
.then(data => {
    console.log(data);
    // if (data.userLoginId == null) {
    //      openCustomAlert(data.message);
    //     console.log(data);
    // } else {
        // showToast("User Login SucessFull!!");
        // openCustomAlert("WelCome" +data.type);
        currUserID = data.uuid;
        console.log(currUserID);
        cuuid = JSON.parse(localStorage.getItem('uuid'));
        cuuid = currUserID;
        localStorage.setItem('uuid', JSON.stringify(cuuid));
        alert("Welcome " + data.type);
        window.location.href = "./index.html";
        console.log(data);
        // }
        //change page location from here after ssucessfull signup
        
    })
    .catch(error => {
        // console.error('Error posting data:', error);
});
}
function loginAdmin(obj){
 let url="http://localhost:8088/admin/login";
>>>>>>> 1065953bda4f29a54e0f1348c3463088c798d6c0:User-Side/scripts/login.js

function loginAdmin(obj) {
    let url = "http://localhost:8088/admin/login";

    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify that we're sending JSON data
            },
            body: JSON.stringify(obj), // Convert the data to JSON format
        })
        .then(response => response.json())
        .then(data => {
            if (data.userId == null) {
                openCustomAlert(data.message);
            } else {
                showToast("Admin Login SucessFull!!");
                openCustomAlert("WelCome Admin!!");
                localStorage.setItem("uuid", json.stringify(data.key));
                console.log(data);
                Location = "../Admin_section/Admin_Home.html";
            }
        })
        .catch(error => {
            // console.error('Error posting data:', error);
        });
}