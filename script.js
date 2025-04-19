function insert_Row() {
    //Write your code here
    let x=document.createElement("tr");
	let a=document.createElement("td");
	let b=document.createElement("td");
	a.innerText="New Cell1";
	b.innerText="New Cell2";
	x.appendChild(a);
	x.appendChild(b);
	document.getElementById("sampleTable").prepend(x)
  
}
