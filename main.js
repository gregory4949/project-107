function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1YEozxSCk/model.json', modleReady);   
}

function modelReady(){
    classifier.classify(gotResult);
}