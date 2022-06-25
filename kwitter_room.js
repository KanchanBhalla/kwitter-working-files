
var firebaseConfig = {
  apiKey: "AIzaSyCNc4UHXOkcHSFrgvrV91Ekz11r7z8IUf8",
  authDomain: "classtest-c34d2.firebaseapp.com",
  databaseURL: "https://classtest-c34d2-default-rtdb.firebaseio.com",
  projectId: "classtest-c34d2",
  storageBucket: "classtest-c34d2.appspot.com",
  messagingSenderId: "117919394209",
  appId: "1:117919394209:web:af13aa1cbdb420f9d4c3e0"
};
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}


