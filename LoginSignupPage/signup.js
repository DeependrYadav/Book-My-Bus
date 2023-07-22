// Function to show the custom toast notification
function showToast(message) {
    const toastContainer = document.getElementById("customToastContainer");
    const toast = document.createElement("div");
    toast.className = "custom-toast";
    toast.textContent = message;

    toastContainer.appendChild(toast);

    // Auto-hide the toast after 3 seconds (adjust as needed)
    setTimeout(function() {
        toastContainer.removeChild(toast);
    }, 3000);
}

function add_row() {

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;

    if (firstname == '' || lastname == '' || email == '' || password == '' || username == '' || mobile == '') {
        showToast('Please fill all mandatory field !!');
        return false;
    }
    if (!document.getElementById("agree").checked) {
        showToast('Please check Accepting all terms & conditions!!');
        return false;
    }

    // var form = $('#add_form')[0]; 
    // var formData = new FormData(form);
}