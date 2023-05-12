const firebaseConfig = {
    apiKey: "AIzaSyA7zHwtB_4-s-_RtKJmuWOpYI1Uibqqx54",
    authDomain: "c-94-new.firebaseapp.com",
    databaseURL: "https://c-94-new-default-rtdb.firebaseio.com",
    projectId: "c-94-new",
    storageBucket: "c-94-new.appspot.com",
    messagingSenderId: "503801582090",
    appId: "1:503801582090:web:d2986d1cfdad205f2fc5f3",
    measurementId: "G-XCYW52057Y"
  };
  firebase.initializeApp(firebaseConfig);

  user
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();