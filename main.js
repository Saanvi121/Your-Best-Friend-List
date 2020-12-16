var listofpeople= [];
function makerow() {
    var name1= document.getElementById("person1").value
    var name2= document.getElementById("person2").value
    var name3= document.getElementById("person3").value
    var name4= document.getElementById("person4").value
    var name5= document.getElementById("person5").value

    listofpeople.push(name1)
    listofpeople.push(name2)
    listofpeople.push(name3)
    listofpeople.push(name4)
    listofpeople.push(name5)

    document.getElementById("displayname").innerHTML=listofpeople
    document.getElementById("submit").style.display="none"
    document.getElementById("sort").style.display="inline-block"
}

function alphasort() {
    listofpeople.sort()
    document.getElementById("displayname").innerHTML=listofpeople
}