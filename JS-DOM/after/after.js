let containers = document.createElement("div")

let paragraphs = document.createElement("p")

containers.appendChild(paragraphs)

let span =  document.createElement("span")

paragraphs.after(span)

console.log(containers.outerHTML);

//------------------------------------

let container = document.getElementById("div")

let paragraph = document.getElementById("para")

function add(){
    const move = document.createElement("div");
    move.innerHTML = "<h2>super</h2>"

    move.after(paragraph)
}
console.log(container.outerHTML)

//------------------------------------
// this is append accepts one or more elements in our node


let parent = document.createElement("div")
let child = document.createElement("p")
let spans = document.createElement("spans")

parent.append("hello all ") //append after
parent.prepend(spans) //prepend before text
console.log(parent)