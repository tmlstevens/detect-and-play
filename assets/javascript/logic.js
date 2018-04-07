$(document).ready(function(){
    var test = "test";
    console.log(test);

    var apiSecret = "bEnlP7JnI8FUw0q4m7SGXrqudZXeeBOP";
    var apiKey = "N2r5hDIKEfpq8-C8_4R9FsHZ2IeohyU-";

// DETECT
    var imagePath;
    var imageFile = "http://img.wennermedia.com/social/dwayne-the-rock-johnson-for-president-094088ba-7415-4b23-8a9a-0150b55749ec.jpg";

    var detectURL =  "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=N2r5hDIKEfpq8-C8_4R9FsHZ2IeohyU-&api_secret=bEnlP7JnI8FUw0q4m7SGXrqudZXeeBOP&image_url=" + imageFile + "&return_landmark=1&return_attributes=emotion";
    
    $.ajax({
        url: detectURL,
        method: "POST"
    }).then(function(response) {
        // console.log(response.faces[0].face_token);
        
        console.log(response);
    })
});

        



