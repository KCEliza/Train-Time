var firebaseConfig = {
    apiKey: "AIzaSyCUA36SclUTbuJ50KhthzdvG88nfUKwUWA",
    authDomain: "orangepeel-17548.firebaseapp.com",
    databaseURL: "https://orangepeel-17548.firebaseio.com",
    projectId: "orangepeel-17548",
    storageBucket: "orangepeel-17548.appspot.com",
    messagingSenderId: "608521864072",
    appId: "1:608521864072:web:5769900b69a3cffb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();
$(".btn").on("click", function (event) {
    event.preventDefault();

    database.ref().push({
        name: $("#input-name").val().trim(),
        destination: $("#input-destination").val().trim(),
        time: $("#input-time").val().trim(),
        frequency: $("#input-frequency").val().trim()
    })
});

database.ref().on("child_added", function (snapshot) {
    var row = $("<tr>");
    var nameTD = $("<td>").text(snapshot.val().name);
    var destinationTD = $("<td>").text(snapshot.val().destination);
    var frequency = $("<td>").text(snapshot.val().frequency + " minutes");
    var firstTime = $("#input-time").val().trim();

    
    // console.log(firstTimeConverted)
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes")
    // (randomMoment.diff(moment("02/14/2001", firstTimeConverted), "minutes"))
    // console.log(diffTime);
    firstTimeConverted = moment(firstTime, "HH:mm").format("hh:mm a");

    var diffTime = moment().diff(moment(firstTimeConverted, "hh:mm a"), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // // Time apart (remainder)
    // var remainder = diffTime % frequency;
    // // console.log(remainder);

    // // Minute Until Train
    // var minutes = $("<td>").text(frequency - remainder);

    // // Next Train
    // var nextTrain = moment().add(minutes, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


//convert military time to normal time
// firstTimeConverted = moment(firstTime, "HH:mm").format("hh:mm a");
//find the difference in minutes before normal time and current time
//find remainder of diffTime%frequency
//subtract remainder from frequency
//add leftover minutes to current time
    

  
    row.append(nameTD, destinationTD, frequency);
    $("tbody").append(row);
})