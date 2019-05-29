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
    var tFrequency = snapshot.val().frequency;
    var firstTime = $("#input-time").val().trim();

    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log(diffTime + "TIME DIFFERENCE");

    var tRemainder = diffTime % tFrequency;//do i maybe need specify the format of frequency
    console.log(tRemainder + "remainder");

    // Minute Until Train
    var tMinutesTillTrain = $("<td>").text(tFrequency - tRemainder);
    console.log(tMinutesTillTrain + "minutes until train")

    // Next Train
    var nextTrain = $("<td>").text(moment().add(tMinutesTillTrain, "minutes"));
    var next = $("<td>").text(moment(nextTrain).format("hh:mm"));
    console.log(next + "next train")

    //puts the text onto the page inside of each row created
    row.append(nameTD, destinationTD, frequency, next, tMinutesTillTrain );
    $("tbody").append(row);
})