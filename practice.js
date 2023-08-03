
var firebaseConfig = {
    apiKey: "AIzaSyBezMCfQCsQtgZSddqTGmCI83QVIXo79Dk",
    authDomain: "kwitter-e51f7.firebaseapp.com",
    databaseURL: "https://kwitter-e51f7-default-rtdb.firebaseio.com",
    projectId: "kwitter-e51f7",
    storageBucket: "kwitter-e51f7.appspot.com",
    messagingSenderId: "901758817486",
    appId: "1:901758817486:web:488bb794755d48231e6c9f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}