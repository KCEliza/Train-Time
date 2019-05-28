var firebaseConfig = {
    apiKey: "AIzaSyCUA36SclUTbuJ50KhthzdvG88nfUKwUWA",
    authDomain: "orangepeel-17548.firebaseapp.com",
    databaseURL: "https://orangepeel-17548.firebaseio.com",
    projectId: "orangepeel-17548",
    storageBucket: "orangepeel-17548.appspot.com",
    messagingSenderId: "608521864072",
    appId: "1:608521864072:web:5769900b69a3cffb"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
$("#add-user").on("click", function (event) {
            event.preventDefault();