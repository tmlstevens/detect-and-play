jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

    var globalFaceResponse;

    var test = "test";
    console.log(test);

  


  

// DETECT

function ajaxScreenShot() {
    
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

    console.log(data);

console.log('a')
    $.ajax({
        url: detectURL,
        method: "POST",
        data: data,
    }).then(function(response) {
        // console.log(response.faces[0].face_token);
        
        var shortenMoodKey =response.faces[0].attributes.emotion; 
        
        $("#analysis").append(JSON.stringify(response.faces[0].attributes));

        console.log(shortenMoodKey.happiness);

        if (shortenMoodKey.happiness > (shortenMoodKey.fear + shortenMoodKey.surprise + 
            shortenMoodKey.anger + shortenMoodKey.disgust + shortenMoodKey.sadness
            +shortenMoodKey.neutral)) {
            happyMood();
        }








        //Youtube API Key
        //AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U


    })


}

function happyMood () {

    $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PLBSKL0_pVgjkjLh3bLvmT0mP_Rv9WkEXF',
    method: "GET",
    }).then(function(response){



        for (i=0; i<5; i++){

            console.log(response.items[i].snippet.resourceId.videoId);

            var divToContain = $('<div> </div>'); //created new div 
            divToContain.addClass("VideoContainerClass");

            var iframe = $(`<iframe width="560" height="315"
             src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}" 
             frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            
            $(divToContain).append(iframe);

            $("#appendvideo").append(divToContain);


        }

    
    })

    
        // var id = "l4WNrvVjiTw";
        // var iframe = $(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
        // $("#appendvideo").html(iframe);

    }
    








