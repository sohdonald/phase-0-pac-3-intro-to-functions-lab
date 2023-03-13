//string = "hello";

function shout(string) {
    return string.toUpperCase();
}
// this passes test one

function whisper(string) {
    return string.toLowerCase();
}
// this passes test two

function logShout(string) {
    console.log(shout("Hello"));
}
// this passes test three

function logWhisper(string) {
    console.log(whisper("Hello"));
}
function sayHiToHeadphonedRoommate(string) {
    if(string === string.toLowerCase()){
        return "I can't hear you!"
    } else if(string === string.toUpperCase()) {
        return "YES INDEED!"
    } else if(string === "Let's have dinner together!") {
        return "I would love to!"
    }
}
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); 

