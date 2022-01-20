
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAVdPYjDL8M14NKFHMVRolywHtPjGTiUzw",
      authDomain: "ornal-65a89.firebaseapp.com",
      databaseURL:"https://ornal-65a89-default-rtdb.firebaseio.com",
      projectId: "ornal-65a89",
      storageBucket: "ornal-65a89.appspot.com",
      messagingSenderId: "49464279922",
      appId: "1:49464279922:web:6f2d7a7b81cfa328fa13eb",
      measurementId: "G-66LVE5QY3G"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";  

     function add_room(){
           room_name= document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose:"addingroomname"
           });
      localStorage.setItem("room_name", room_name);
      window.location="ornal_page.html"; 
     } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_Names+" </div> <hr>";
       document.getElementById("output").innerHTML+=row;
      
      //End code
      });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name",name);
window.location="ornal_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}