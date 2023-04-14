let btn=document.getElementById("button");
let mDiv=document.getElementById("toast");
btn.addEventListener("click",function(e){
	if(mDiv.childElementCount==0)
	{
	function createMain(tag,atrb,value,innertxt)
	{
		let divTop =document.createElement(tag);
		divTop.setAttribute(atrb,value);
		divTop.innerText=innertxt;
		mDiv.appendChild(divTop)		
		
	}
	
	createMain("div","id","top-div","");
	createMain("div","id","bot-div","This is a Toast Message");
	
	let topDiv=document.getElementById("top-div");
	let botDiv=document.getElementById("bot-div");
	console.log(topDiv);
	
	
	function createinnerDiv(tag,atrb,value,innertxt)
	{
		let divTop =document.createElement(tag);
		divTop.setAttribute(atrb,value);
		divTop.innerText=innertxt;
		topDiv.appendChild(divTop)		
		
	}

	createinnerDiv("div","id","inner-div","");
	createinnerDiv("div","id","inner-div-right","");
	
	let innerDiv=document.getElementById("inner-div");
	let innerDivRight=document.getElementById("inner-div-right");
		
	function createLeftDiv(tag,atrb,value,innertxt)
	{
		let divTop =document.createElement(tag);
		divTop.setAttribute(atrb,value);
		divTop.innerText=innertxt;
		innerDiv.appendChild(divTop)
	}
	
	createLeftDiv("p","class","icon","");
	createLeftDiv("h2","class","heading","Bootsrtap");
	
	function createRightDiv(tag,atrb,value,innertxt)
	{
		let divTop =document.createElement(tag);
		divTop.setAttribute(atrb,value);
		divTop.innerText=innertxt;
		innerDivRight.appendChild(divTop)
	}
	
	createRightDiv("p","class","eta","Just Now");
	createRightDiv("i","class","fa-solid fa-xmark","");
	
	let closBtn=document.getElementsByClassName("fa-solid fa-xmark");
	closBtn[0].addEventListener("click",function(b){
		let closeDiv=b.target.parentNode.parentNode.parentNode;
		console.log(closeDiv);
		botDiv.remove();
		topDiv.remove();
	});
		}
});
