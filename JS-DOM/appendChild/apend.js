let menu = document.getElementById("menu")

let list = document.createElement("li")
 list.innerHTML = "contact"
 menu.appendChild(list);

// this is textcontent
 console.log(menu.textContent)

// this is innerHtml
 menu.innerHTML = "<h1>Hello..!</h1>"