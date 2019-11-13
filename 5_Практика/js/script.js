let crypto = [  
{    
name : "Bitcoin",    
price: 1388.37  
},  
{    
name : "Ethereum",    
price: 716  
},  
{    
name : "Litecoin",    
price: 140  
}
]

function getColor(){
	let rgb = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
	return rgb;
}

function getWidth(price){
	let windowPer=100;
	let windowWidth=window.innerWidth;
	let chartWidth=(price*windowPer)/windowWidth;
	return chartWidth;
}


function createBlock(name, price,color,width){
    let paste= document.createElement('div');
    paste.innerHTML = `<p class="name">${name}</p><p class="price">${price}</p><div style = 'background-color:rgb(${color[0]},${color[1]},${color[2]}); width:${width}%'  class=color></div>`;
    return  paste;
}

function insertBlock(htmlCode){
	let container = document.getElementById('container');
	container.appendChild(htmlCode);
}

for( var i=0; i<crypto.length; i++){
	let color=getColor();
	let divWidth=getWidth(crypto[i].price);
	let paste=createBlock(crypto[i].name, crypto[i].price, color, divWidth);
	insertBlock(paste);
}





