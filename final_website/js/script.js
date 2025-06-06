function askName() {
    var nameReturn=document.getElementById("ask-name");
    var name=prompt('Hello! welcome to my (semi) interactive website! Please enter your name','HERE');
    if (name ==='null') {
        alert('Please Try Again');
    } else {
        nameReturn.innerHTML = 'Hey ' + name + '! Nice to meet you! Welcome to my website!'
    var rest = document.getElementById("rest-of-page");
    rest.style.display = "block";
    }
}