// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfbOKD43HrPYiIJayDiAsGFG91c-w6Kmw",
  authDomain: "alpha-elite-club.firebaseapp.com",
  projectId: "alpha-elite-club",
  storageBucket: "alpha-elite-club.appspot.com",
  messagingSenderId: "508151244698",
  appId: "1:508151244698:web:560b6db3999652ef067c23"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get services
const auth = firebase.auth();
const db = firebase.firestore();

// Auto Capital for Name
document.getElementById("name").addEventListener("input", function() {
  this.value = this.value.toUpperCase();
});

// REGISTER FUNCTION
function register() {

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let dob = document.getElementById("dob").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if(name === "" || phone === "" || dob === "" || email === "" || password === ""){
    alert("Please fill all fields!");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {

      db.collection("players").doc(userCredential.user.uid).set({
        name: name,
        phone: phone,
        dob: dob,
        matches: 0,
        amount: 0
      });

      alert("Registered Successfully!");
      window.location = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}
