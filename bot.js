function talk(){
var know = {
"Hi": "Hi",
"Who are you" : "Hello, Peter here",
"How are you?" : "Good :)",
"How old are you?" : "I'm 19 years old",
"What school are you from?" : "I'm from Lyceum of the Philippines University Manila",
"ok" : "Thank You So Much ",
"Bye" : "Okay! Will meet soon.."
};
var user = document.getElementById('userBox').value;
document.getElementById('ChatLog').innerHTML = user + "<br>";
if (user in know) {
document.getElementById('ChatLog').innerHTML = know[user] + "<br>";
}else{
document.getElementById('ChatLog').innerHTML = "Sorry,I didn't understand <br>";
}
}