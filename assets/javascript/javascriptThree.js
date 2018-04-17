
var config = {
    apiKey: "AIzaSyA4GD27c_ZXDgx_EZQwpT5bgxzVR5hiDss",
    authDomain: "detect-and-play-comments.firebaseapp.com",
    databaseURL: "https://detect-and-play-comments.firebaseio.com",
    projectId: "detect-and-play-comments",
    storageBucket: "",
    messagingSenderId: "408093729756"
  };
firebase.initializeApp(config);
var database = firebase.database();

var comment = {
    dateTime: moment().format('M/D/YY'),
    name,
    review
}

$(document).on('click','#pushNew',function() {
    event.preventDefault();
    // var now = moment().format('M/D/YY');
    comment.dateTime; // = now;
    comment.name = $('#name').val().trim();
    comment.review = $('#review').val().trim();
    database.ref().push(comment);
    $("#name").val("");
    $("#review").val("");
});
// Append train to table when database receives new record 
database.ref().on('child_added', function(snapshot) {  
    comment = snapshot.val();
    comment.id = snapshot.key;
    // comment.dateTime = snapshot.val();

    var feedback = $('<div class="review-div">' + comment.review + '<br>review by:&nbsp' + comment.name + ',&nbsp' + comment.dateTime + '</div>');

    $('#all-reviews').prepend(feedback);
})

