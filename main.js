Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:100,
  //opening the back camera automatically else it will open the front camera
    constraints:{
        facingMode: "environment"
    }
});
camera=document.getElementById("camera");
Webcam.attach('#camera')