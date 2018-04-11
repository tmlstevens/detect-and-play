jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});



    var test = "test";
    console.log(test);

    function consoleLogImagePath() {

    	console.log(neededCode);
    }


  

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
        
        
        $("#analysis").append(JSON.stringify(response.faces[0].attributes));
        


    })

}




