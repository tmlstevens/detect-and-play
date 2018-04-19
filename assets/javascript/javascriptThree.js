



// var config = {
//     apiKey: "AIzaSyA4GD27c_ZXDgx_EZQwpT5bgxzVR5hiDss",
//     authDomain: "detect-and-play-comments.firebaseapp.com",
//     databaseURL: "https://detect-and-play-comments.firebaseio.com",
//     projectId: "detect-and-play-comments",
//     storageBucket: "",
//     messagingSenderId: "408093729756"
//   };
// firebase.initializeApp(config);

 var config = {
    apiKey: "AIzaSyBoO2Gz2kM4RAlSlnMrTAElarkeOI5lw7E",
    authDomain: "comments-with-image.firebaseapp.com",
    databaseURL: "https://comments-with-image.firebaseio.com",
    projectId: "comments-with-image",
    storageBucket: "",
    messagingSenderId: "749091040494"
  };
  firebase.initializeApp(config);

 var database = firebase.database();

 
 


var comment = {
    dateTime: moment().format('M/D/YY'),
    name,
    review: review
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

database.ref().on('child_added', function(snapshot) {  
    comment = snapshot.val();

    var feedback = $('<div>');
    feedback.addClass("review-div");

    var commentss = $('<div>')
    commentss.addClass("commentssClass");
    commentss.html(comment.review);
    $(feedback).append(commentss);

    var namee = $('<div>')
    namee.addClass("nameeClass");
    namee.html(comment.name + ",&nbsp" + comment.dateTime);
    $(feedback).append(namee);


    $('#all-reviews').prepend(feedback);
})
