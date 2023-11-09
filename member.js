function skilsMember() {
    var member = document.getElementById("member");
    var memberValue = member.value;
    var memberError = document.getElementById("memberError");
    if (memberValue == "") {
        memberError.innerHTML = "Please enter your member";
        memberError.style.color = "red";
        member.style.border = "2px solid red";
        return false;
    } else {
        memberError.innerHTML = "";
        member.style.border = "2px solid green";
        return true;
    }
}