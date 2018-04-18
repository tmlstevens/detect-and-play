

  


 //--------------------
      // GET USER MEDIA CODE
      //--------------------
          navigator.getUserMedia = ( navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia ||
                             navigator.msGetUserMedia);

      var video;
      var webcamStream;
      var tooLong;
      var neededCode;

      $('#on-off').click(function() {
        if ($(this).html() === 'Start Webcam') {
           $(this).html('Stop Webcam');
           startWebcam()
        }
        else if ($(this).html() === 'Stop Webcam') {
           $(this).html('Start Webcam');
           stopWebcam()
        }
     })

      function startWebcam() {
        $("video").show();
        if (navigator.getUserMedia) {
           navigator.getUserMedia (

              // constraints
              {
                 video: true,
                 audio: false
              },

              // successCallback
              function(localMediaStream) {
                  video = document.querySelector('video');
                  video.srcObject = localMediaStream;
                 //video.src = window.URL.createObjectURL(localMediaStream);
                 webcamStream = localMediaStream;
              },

              // errorCallback
              function(err) {
                 console.log("The following error occured: " + err);
              }
           );
        } else {
           console.log("getUserMedia not supported");
        }  
        $("#myCanvas").show();
        

      }

      function stopWebcam() {
          webcamStream.getTracks().forEach(track => track.stop())
        $("video").hide();
      }
      //---------------------
      // TAKE A SNAPSHOT CODE
      //---------------------
      var canvas, ctx;

      function init() {
        // Get the canvas and obtain a context for
        // drawing in it
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext('2d');
      }

      function snapshot() {

        $("#myCanvas").show();
         // Draws current image from the video element into the canvas
        ctx.drawImage(video, 0,0, canvas.width, canvas.height);
        
        tooLong = canvas.toDataURL("image/jpeg")
        neededCode = tooLong.slice(23);

        
        
        
        
       
      }




    
    function removesnapshot(){
      $("#myCanvas").hide();
       
      
    }

  

