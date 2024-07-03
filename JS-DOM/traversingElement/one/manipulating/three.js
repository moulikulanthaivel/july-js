let div = document.createElement("div")              //create one element in inspect page
div.innerHTML = "<p>hello wake up to reality</p>"     // its child element of parent element
document.body.appendChild(div)                 // it helps our code show in our webpages
div.id = "title"                              // it represents what we want in parent element? id or class
console.log(div)