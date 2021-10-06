console.log(document.getElementById("click"))
document.getElementById("click").addEventListener("click",function (){
var e = document.createElement("p")
e.textContent = "Loading..."
fetch('https://passwordinator.herokuapp.com/generate?num=true&char=true&caps=true')
.then((res) => res.json())
.then((data) => {
	e.remove()
	document.getElementById("password").textContent = data.data
	document.getElementById("password").style.border = "2px solid black"
})

}
)
