//your JS code here. If required.
let p = document.getElementById("status")
function Click(){
	
	p.innerText = '';
	let h = document.createElement("h1")
	h.innerText = "Entered Metaverse"
	p.append(h)
}