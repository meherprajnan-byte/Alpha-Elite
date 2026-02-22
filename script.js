// Your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
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

// REGISTER
function register() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let dob = document.getElementById("dob").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

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
    })
    .catch((error) => {
      alert(error.message);
    });
}

// LOGIN
function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}