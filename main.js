var dreamContent = document.getElementsByClassName("dream-part-row");
var actualDreamContent = dreamContent[0];

var onMouseOver = function() {
    console.log("the function is working when i scroll over the element");
};

actualDreamContent.addEventListener("mouseover", onMouseOver);