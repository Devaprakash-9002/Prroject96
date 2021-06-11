// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBnKnsWhKYGKm7Hue62qYVCTySXMdVqlXA",
      authDomain: "kwitter-33af5.firebaseapp.com",
      databaseURL: "https://kwitter-33af5-default-rtdb.firebaseio.com",
      projectId: "kwitter-33af5",
      storageBucket: "kwitter-33af5.appspot.com",
      messagingSenderId: "29793106555",
      appId: "1:29793106555:web:985a351cb2846554cb40de",
      measurementId: "G-LJCXBNW4LM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}