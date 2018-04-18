jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});
    

  
function removeVideos() {

    $(".VideoContainerClass").empty();
}

  

// DETECT

function ajaxScreenShot() {

    removeVideos();
    
    var imageFile = neededCode;

	var api_key = "N2r5hDIKEfpq8-C8_4R9FsHZ2IeohyU-";
	var api_secret = "bEnlP7JnI8FUw0q4m7SGXrqudZXeeBOP"
    // var params = $.param({
    // 	api_key: api_key,
    // 	api_secret: api_secret,
    // });
    var detectURL =  "https://api-us.faceplusplus.com/facepp/v3/detect";
    var data = {
    	'image_base64': imageFile, 
    	'return_landmark': 1,
        'api_key': api_key,
        'api_secret': api_secret,
        'return_attributes': 'emotion'
    };

    


    $.ajax({
        url: detectURL,
        method: "POST",
        data: data,
    }).then(function(response) {
        
        
        var shortenMoodKey =response.faces[0].attributes.emotion; 
        
        console.log(JSON.stringify(response.faces[0].attributes));

        var highestMoodKey;
        var highestMoodValue = 0;
        

var moodKeys = Object.keys(shortenMoodKey);

var moodValues = Object.values(shortenMoodKey);



        for (var i=0; i< moodValues.length; i++){

            if (moodValues[i] >= highestMoodValue) {

                highestMoodValue=moodValues[i];
                highestMoodKey=i;

            }
        }

       

        switch (moodKeys[highestMoodKey]) {
            case "happiness":
            happyMood();
            break;
            case "fear":
            fearMood();
            break;
            case "surprise":
            surpriseMood();
            break;
            case "anger":
            angerMood();
            break;
            case "disgust":
            disgustMood();
            break;
            case "sadness":
            sadnessMood();
            break;
            case "neutral":
            neutralMood();
            break;

        }


    })


}

function happyMood () {

    $("#myModalHappy").show();



    $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PLBSKL0_pVgjkjLh3bLvmT0mP_Rv9WkEXF&maxResults=5',
    method: "GET",
    }).then(function(response){



        for (i=0; i<5; i++){
        

            var divToContain = $('<div> </div>'); 
            divToContain.addClass("VideoContainerClass");

            var iframe = $(`<iframe width="95%" height="315"
             src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}" 
             frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            
            $(divToContain).append(iframe);

            $("#appendvideo").append(divToContain);


        }

    
    })

    

    }

    function fearMood () {
        $("#myModalFear").show();
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PLBSKL0_pVgjn-w4q1ddR2yjwPf-BueoX5&maxResults=5',
        method: "GET",
    }).then(function(response){
        for (i=0; i<5; i++){
            var divToContain = $('<div> </div>'); //created new div 
            divToContain.addClass("VideoContainerClass");
            var iframe = $(`<iframe width="95%" height="315"
                src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            $(divToContain).append(iframe);
            $("#appendvideo").append(divToContain);
        }
    })
}


function surpriseMood () {

    $("#myModalSurprise").show();

    $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PLBSKL0_pVgjkbJv_JOQm6ZB7is9Ctp7hf&maxResults=5',
    method: "GET",
    }).then(function(response){



        for (i=0; i<5; i++){

            

            var divToContain = $('<div> </div>'); //created new div 
            divToContain.addClass("VideoContainerClass");

            var iframe = $(`<iframe width="95%" height="315"
             src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}" 
             frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            
            $(divToContain).append(iframe);

            $("#appendvideo").append(divToContain);


        }

    
    })

    

    }


function angerMood () {

    $("#myModalAnger").show();
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PLBSKL0_pVgjl-tkD0jJnb3_1HUM-QFD4s&maxResults=5',
        method: "GET",
    }).then(function(response){
        for (i=0; i<5; i++){
            var divToContain = $('<div> </div>'); //created new div 
            divToContain.addClass("VideoContainerClass");
            var iframe = $(`<iframe width="95%" height="315"
                src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            $(divToContain).append(iframe);
            $("#appendvideo").append(divToContain);
        }
    })
}
function disgustMood () {
    $("#myModalDisgust").show();
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PLBSKL0_pVgjmGGbISlHpt36R9DN8GkoxW&maxResults=5',
        method: "GET",
    }).then(function(response){
        for (i=0; i<5; i++){
            var divToContain = $('<div> </div>'); //created new div 
            divToContain.addClass("VideoContainerClass");
            var iframe = $(`<iframe width="95%" height="315"
                src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            $(divToContain).append(iframe);
            $("#appendvideo").append(divToContain);
        }
    })
}
function sadnessMood () {
    $("#myModalSadness").show();
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PLBSKL0_pVgjliDANarGD13WUyMxnwJG5y&maxResults=5',
        method: "GET",
    }).then(function(response){
        for (i=0; i<5; i++){
            var divToContain = $('<div> </div>'); //created new div 
            divToContain.addClass("VideoContainerClass");
            var iframe = $(`<iframe width="95%" height="315"
                src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            $(divToContain).append(iframe);
            $("#appendvideo").append(divToContain);
        }
    })
}
function neutralMood () {
    $("#myModalNeutral").show();
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PLBSKL0_pVgjmKlyVBA35pkosUqDW3OXa6&maxResults=5',
        method: "GET",
    }).then(function(response){
        for (i=0; i<5; i++){
            var divToContain = $('<div> </div>'); //created new div 
            divToContain.addClass("VideoContainerClass");
            var iframe = $(`<iframe width="95%" height="315"
                src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            $(divToContain).append(iframe);
            $("#appendvideo").append(divToContain);
        }
    })
}

$("#myModalHappy").click(function () {
    $("#myModalHappy").hide();
});
$("#myModalFear").click(function () {
    $("#myModalFear").hide();
});
$("#myModalSurprise").click(function () {
    $("#myModalSurprise").hide();
});
$("#myModalAnger").click(function () {
    $("#myModalAnger").hide();
});
$("#myModalDisgust").click(function () {
    $("#myModalDisgust").hide();
});
$("#myModalSadness").click(function () {
    $("#myModalSadness").hide();
});
$("#myModalNeutral").click(function () {
    $("#myModalNeutral").hide();
});

    








