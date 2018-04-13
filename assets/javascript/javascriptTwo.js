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

        if (shortenMoodKey.happiness > (shortenMoodKey.fear && shortenMoodKey.surprise && 
            shortenMoodKey.anger && shortenMoodKey.disgust && shortenMoodKey.sadness
            && shortenMoodKey.neutral)) {
            happyMood();
        }
        if (shortenMoodKey.fear > (shortenMoodKey.happiness && shortenMoodKey.surprise && 
            shortenMoodKey.anger && shortenMoodKey.disgust && shortenMoodKey.sadness
            && shortenMoodKey.neutral)) {
            fearMood();
        }
        if (shortenMoodKey.surprise > (shortenMoodKey.happiness && shortenMoodKey.fear && 
            shortenMoodKey.anger && shortenMoodKey.disgust && shortenMoodKey.sadness
            && shortenMoodKey.neutral)) {
            surpriseMood();
        }
        if (shortenMoodKey.anger > (shortenMoodKey.fear + shortenMoodKey.surprise + 
            shortenMoodKey.happiness + shortenMoodKey.disgust + shortenMoodKey.sadness
            +shortenMoodKey.neutral)) {
            angerMood();
        }
        if (shortenMoodKey.disgust > (shortenMoodKey.fear + shortenMoodKey.surprise + 
            shortenMoodKey.happiness + shortenMoodKey.anger + shortenMoodKey.sadness
            +shortenMoodKey.neutral)) {
            disgustMood();
        }
        if (shortenMoodKey.sadness > (shortenMoodKey.fear + shortenMoodKey.surprise + 
            shortenMoodKey.happiness + shortenMoodKey.disgust + shortenMoodKey.anger
            +shortenMoodKey.neutral)) {
            sadnessMood();
        }
        if (shortenMoodKey.neutral > (shortenMoodKey.fear + shortenMoodKey.surprise + 
            shortenMoodKey.happiness + shortenMoodKey.disgust + shortenMoodKey.sadness
            +shortenMoodKey.anger)) {
            neutralMood();
        }
    })
}

function happyMood () {
//Youtube API Key
//AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U
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
function fearMood () {
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
        method: "GET",
    }).then(function(response){
        for (i=0; i<5; i++){
            var divToContain = $('<div> </div>'); //created new div 
            divToContain.addClass("VideoContainerClass");
            var iframe = $(`<iframe width="560" height="315"
                src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            $(divToContain).append(iframe);
            $("#appendvideo").append(divToContain);
        }
    })
}
function surpriseMood () {
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI',
        method: "GET",
    }).then(function(response){
        for (i=0; i<5; i++){
            var divToContain = $('<div> </div>'); //created new div 
            divToContain.addClass("VideoContainerClass");
            var iframe = $(`<iframe width="560" height="315"
                src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            $(divToContain).append(iframe);
            $("#appendvideo").append(divToContain);
        }
    })
}
function angerMood () {
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PL6Go6XFhidED5RmiuRdks87fyOvlXqn14',
        method: "GET",
    }).then(function(response){
        for (i=0; i<5; i++){
            var divToContain = $('<div> </div>'); //created new div 
            divToContain.addClass("VideoContainerClass");
            var iframe = $(`<iframe width="560" height="315"
                src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            $(divToContain).append(iframe);
            $("#appendvideo").append(divToContain);
        }
    })
}
function disgustMood () {
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PLMC9KNkIncKvYin_USF1qoJQnIyMAfRxl',
        method: "GET",
    }).then(function(response){
        for (i=0; i<5; i++){
            var divToContain = $('<div> </div>'); //created new div 
            divToContain.addClass("VideoContainerClass");
            var iframe = $(`<iframe width="560" height="315"
                src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            $(divToContain).append(iframe);
            $("#appendvideo").append(divToContain);
        }
    })
}
function sadnessMood () {
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PLP9GgDwtdPPQEejYdDz6EJhdEZbTuO5Lz',
        method: "GET",
    }).then(function(response){
        for (i=0; i<5; i++){
            var divToContain = $('<div> </div>'); //created new div 
            divToContain.addClass("VideoContainerClass");
            var iframe = $(`<iframe width="560" height="315"
                src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            $(divToContain).append(iframe);
            $("#appendvideo").append(divToContain);
        }
    })
}
function neutralMood () {
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyDU3pOoVRxd7L2HiBLLWlCHZBhevXCln0U&playlistId=PLZT-Z4PSNV5fUlyLXiHatp1SJJaCfF3JM',
        method: "GET",
    }).then(function(response){
        for (i=0; i<5; i++){
            var divToContain = $('<div> </div>'); //created new div 
            divToContain.addClass("VideoContainerClass");
            var iframe = $(`<iframe width="560" height="315"
                src="https://www.youtube.com/embed/${response.items[i].snippet.resourceId.videoId}"
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
            $(divToContain).append(iframe);
            $("#appendvideo").append(divToContain);
        }
    })
}








