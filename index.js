var rn1 = Math.floor(Math.random() * 3) + 1 ;

var imsource1 = "images/haha" + rn1 + ".png";

var imgl = document.querySelectorAll("img")[0].setAttribute("src", imsource1)


var rn2 = Math.floor(Math.random() * 3) + 1 ;

var imsource2 = "images/hehe" + rn2 + ".png";

var img2 = document.querySelectorAll("img")[1].setAttribute("src", imsource2)

if(rn1==rn2){
    document.querySelector("h2").innerHTML = " 🔴 Draw !!";
}
