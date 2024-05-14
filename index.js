"use strict";

// function callRest(){
// let messageDiv= document.getElementById("messageArea");

//     fetch("http://jsonplaceholder.typicode.com/users/1")
//     .then(response => response.text)
//     .then(responseString => {
//         console.log(responseString);
//         messageDiv.innerHTML=responseString});

// }

function callRest(){
    let messageDiv= document.getElementById("messageArea");
   // let newSource = "http://jsonplaceholder.typicode.com/users/2";
fetch(newSource)
.then(function(response) {
    response.text().then(function(responseString) { 
        console.log(responseString);
        messageDiv.innerHTML=responseString;
    });
}).catch(function() {
    console.log("error");
});

}

function callAllUser(){
    let userTable = document.getElementById("userTable");
    let newSource = "https://jsonplaceholder.typicode.com/users";
    fetch(newSource)
    .then(response => response.json())
    .then(responseData => {
        console.log("response data length");
        for(let i=0;i<5;i++){
            let row = userTable.insertRow(-1);
           let cell1 = row.insertCell(0);
           let cell2 = row.insertCell(1);
           let cell3 = row.insertCell(2);
           let cell4 = row.insertCell(3);
           let cell5 = row.insertCell(4);
           let cell6 = row.insertCell(5);
           cell1.innerHTML=responseData[i].id;
           cell2.innerHTML=responseData[i].name;
           cell3.innerHTML=responseData[i].username;
           cell4.innerHTML=responseData[i].email;
           cell5.innerHTML=responseData[i].phone;
           cell6.innerHTML=responseData[i].website;

        }
    })
}