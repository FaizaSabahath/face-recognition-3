Webcam.set({
    width : 350,
    height : 300,
    img_format : 'png',
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'">';
    });
}
console.log("ml5 version",ml5.version);
classifier = ml5.imgClassify("https://images.wallpaperscraft.com/image/snow_mountains_dawn_122302_1080x1920.jpg/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded !");
}
function check(){
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("results_object").innerHTML = results[0].label;
        document.getElementById("results_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}