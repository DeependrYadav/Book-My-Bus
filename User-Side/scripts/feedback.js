function addFeedback() {
    let uuid = JSON.parse(localStorage.getItem("uuid")) || "";
    if (uuid == "") {
        openCustomAlert("Please Login First");
    } else {
        let url = "http://localhost:8088/feedback/add?key=" + uuid;
        console.log(uuid);
        let obj = {
            "driverRating": document.getElementById("driver").value,
            "serviceRating": document.getElementById("service").value,
            "overallRating": document.getElementById("overall").value,
            "comments": document.getElementById("comment").value
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify that we're sending JSON data
            },
            body: JSON.stringify(obj), // Convert the data to JSON format
        })
        .then(response => response.json())
        .then(data => {
                showToast("Feedback Added Sucesssfully");
                console.log(data);
                location = "../User-Side/index.html";
            })
        .catch(error => {
            // console.error('Error posting data:', error);
        });

    }
   
}


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