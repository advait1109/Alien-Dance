function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RIzBs2IPD/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML=results[0].label;
        document.getElementById("result_confidence").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        image1=document.getElementById("a1");
        image2=document.getElementById("a2");
        image3=document.getElementById("a3");
        image4=document.getElementById("a4");
        if (results[0].label=="Clap"){
            image1.src="aliens-01.gif";
            image2.src="aliens-02.png";
            image3.src="aliens-03.png";
            image4.src="aliens-04.png";
        }
        else if(results[0].label=="Bell"){
            image1.src="aliens-01.png";
            image2.src="aliens-02.gif";
            image3.src="aliens-03.png";
            image4.src="aliens-04.png";
        }
        else if(results[0].label=="Snap"){
            image1.src="aliens-01.png";
            image2.src="aliens-02.png";
            image3.src="aliens-03.gif";
            image4.src="aliens-04.png";
        }
        else{
            image1.src="aliens-01.png";
            image2.src="aliens-02.png";
            image3.src="aliens-03.png";
            image4.src="aliens-04.gif";
        }
    }
}