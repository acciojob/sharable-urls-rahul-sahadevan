// your code here
const h3 = document.getElementById("url");
const button = document.getElementById("button");
button.addEventListener("click",() =>{
    const name = document.getElementById("name").value;
    // console.log(name);
	const year = document.getElementById("year").value;
    if(year === ""){
        h3.innerText = h3.innerText+"?name="+name;
    }
    else if(name === ""){
        h3.innerText = h3.innerText+"?year="+year;
    }
    else{

        h3.innerText= h3.innerText+"?name="+name+"&year="+year;
    }
})