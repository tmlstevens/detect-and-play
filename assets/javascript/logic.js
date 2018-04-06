$(document).ready(function(){
    var test = "test";
    console.log(test);

    var apiSecret = "bEnlP7JnI8FUw0q4m7SGXrqudZXeeBOP";
    var apiKey = "N2r5hDIKEfpq8-C8_4R9FsHZ2IeohyU-";

// DETECT
    var imagePath;
    var imageFile = "image_file=" + imagePath

    var detectURL =  "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=N2r5hDIKEfpq8-C8_4R9FsHZ2IeohyU-&api_secret=bEnlP7JnI8FUw0q4m7SGXrqudZXeeBOP&" + imageFile + "&return_landmark=1&return_attributes=gender,age,smiling";
    
    $.ajax({
        url: detectURL,
        method: "POST"
        }).then(console.log);

        
// ANALYZE
    var faceTokens = ''; //need response value from DETECT

    var analyzeURL = "https://api-us.faceplusplus.com/facepp/v3/face/analyze?api_key=N2r5hDIKEfpq8-C8_4R9FsHZ2IeohyU-&api_secret=bEnlP7JnI8FUw0q4m7SGXrqudZXeeBOP&return_landmark=1&face_tokens=" + faceToken;

    $.ajax({
    url: queryURL,
    method: "POST"
    }).then(console.log);

})
