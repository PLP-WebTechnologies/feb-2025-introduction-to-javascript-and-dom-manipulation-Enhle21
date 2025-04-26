// function to change the text content of the heading
function changeText() {
    document.getElementById("main-title").textContent ="Text has been changed!";
}

// function to change the background color of the body
function changeColor() {
    document.body.style.backgroundColor = "d4edda"; //light green
}

// function to add new paragraph element on the page
function addElement() {
    // create a new <p> element
    const newpara = document.createElement("p");
    newpara.textcontent = "This is a new paragraph added dynamically!";
    newpara.id = "dynamic-para"  // give it an id so we can remove it later
    document.getElementById("extra-container").appendChild(newpara);  // add to the page
}
// function to remove the paragraph that was added
function removeElement(){
    // find the element
    const para = document.getElementById("dynamic-para");
    if (para) {
        para.remove();   // remove it if it exists
    }
}