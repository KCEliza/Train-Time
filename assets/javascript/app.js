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
    var tFrequency = $("#input-frequency").val().trim()
    var firstTime = $("#input-time").val().trim();



    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    var diffTime = $("<td>").text(moment().diff(moment(snapshot.val().firstTimeConverted), "minutes"));
    var tRemainder = diffTime % tFrequency;
    var tMinutesTillTrain = tFrequency - tRemainder;
    var nextTrain = $("<td>").text(moment().add(snapshot.val().tMinutesTillTrain, "minutes"));
    var timeTD = $("<td>").text(moment(snapshot.val().nextTrain).format("minutes"));

    

  
    row.append(nameTD, destinationTD, timeTD, nextTrain, diffTime);
    $("tbody").append(row);
})