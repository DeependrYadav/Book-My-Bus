const search_ticket_button = document.getElementById('search-ticket-button');
let baseURL = `https://honest-wing-5796-production.up.railway.app`;
const currUserId = JSON.parse(localStorage.getItem('uuid'));
if(currUserId == null){
    alert("Please Login to Cancel Ticket...!");
    window.location.href="./login.html";
}

function cancelTicket(ticketId){
    const userConfirmed = confirm("Are You Sure You Want To Cancel ?");
    if(userConfirmed){
        const cancelTicketApi = `${baseURL}/reservation/delete/${ticketId}?key=${currUserId}`;
        fetch(cancelTicketApi, {
            method: 'delete'
        })
        .then(response => {
            if(response.ok){
                response.json().then(data => {
                    alert("Reservation Cancelled Successfully...!");
                    window.location.href = "../index.html";
                })
            }else{
                alert("Dear Customer Please Enter Correct Ticket Id");
            }
        })
    }
}

search_ticket_button.addEventListener('click', () => {
    var searchIdText = document.getElementById('search-ticket-id');
    var searchId = searchIdText.value;
    if(searchId == ""){
        alert("Please Enter Id To Check Status");
        return;
    }
    cancelTicket(searchId);
    searchIdText.value = "";

})