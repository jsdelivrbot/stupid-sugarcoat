window.onload = function(){
	addAudio();
	// addCursor();
	addIngredient('Florsocker', "https://www.mathem.se/varor/florsocker/florsocker-500g-dansukker", rand(2)+1, 'dl');
	addPurchaseList("Florsocker 500g Dansukker", "https://www.mathem.se/varor/florsocker/florsocker-500g-dansukker", '14,95');
	addRecipeInstruction();
	addTitle();
	addStars();
	addSprinkles();
}

function addAudio(){
	let audio = document.createElement("audio");
	let source = document.createElement("source");
	audio.autoplay = true;
	source.src = "https://rawgit.com/jonasjohansson/sugarcoat/master/honey.mp3";
	source.type = "audio/mp3";
	audio.appendChild(source);
	document.body.appendChild(audio);
}

function addCursor(){
	let cursor = document.createElement('div');
	cursor.id = "cursor";
	cursor.style.position = "absolute";
	cursor.style.width = "128px";
	cursor.style.height = "128px";
	cursor.style.backgroundImage = "https://rawgit.com/jonasjohansson/sugarcoat/master/cursor.png";
	document.body.appendChild(cursor);
	document.addEventListener("mousemove", (e) => {
		let posX = e.pageX - (cursor.offsetWidth * 0.5) + 'px';
		let posY = e.pageY - (cursor.offsetHeight * 0.5) + 'px';
		cursor.style.left = posX;
		cursor.style.top = posY;
	})
}

function addIngredient(itemTitle, itemLink, itemAmount, itemMeasurement){
	const list = document.querySelector(".ingredientList ul");
	const items = list.querySelectorAll("li:not(:first-child)");
	const index = rand(items.length);
	const item = items[0].cloneNode(true);

	const span = item.querySelector("span");
	span.innerHTML = itemAmount + ' ' + itemMeasurement;

	const link = item.querySelector("a");
	link.title = itemTitle;
	link.innerHTML = link.title;
	link.href = itemLink;

	list.insertBefore(item,items[index]);
}

function addPurchaseList(itemTitle, itemLink, itemPrice){
	const list = document.querySelector(".purchaseList ul");
	const items = list.querySelectorAll("li");
	const index = rand(items.length);
	const item = items[0].cloneNode(true);

	item.querySelector(".productAmount").style.pointerEvents = "none";

	const link = item.querySelector("a");
	link.title = itemTitle;
	link.innerHTML = link.title;
	link.href = itemLink;

	const price = item.querySelector(".totalPrice strong");
	price.innerHTML = itemPrice;

	list.insertBefore(item,items[index]);
}

function addRecipeInstruction(){
	const instructions = document.querySelector(".recipeInstructions p");

	let a = instructions.innerHTML;
	let b = "<br><br><strong>Glasyr</strong>";
	b += "<br>Blanda samman florsocker och lite vatten till en smidig smet. Garnera när rätten är färdig.";
	b += "<br><br>";

	let position = a.indexOf("Recept");

	if (position > 0){
		instructions.innerHTML = [a.slice(0, position), b, a.slice(position)].join('');
		a = instructions.innerHTML;
		position = a.indexOf("Recept");
		instructions.innerHTML = [a.slice(0, position+7), ' Rose Hallgren, Jonas Johansson, ', a.slice(position+7)].join('');
	} else {
		instructions.innerHTML += b;
	}
}

function addTitle(){
	const words = ["Supersöt", "Sockersöt", "Sockrad", "Sliskig"];
	let title = document.querySelector(".recipePage h1");
	let text = title.innerHTML.toLowerCase();
	title.innerHTML = words[rand(words.length)] + ' ' + text;
}

function addStars(){
	const stars = document.querySelectorAll(".icon-star-empty");
	for (const star of stars){
		star.classList.remove("icon-star-empty");
		star.classList.add("icon-star");
	}
}

function addSprinkles(){
	!function(){var t=["#ffffff"],i=window.innerWidth,e=(window.innerHeight,{x:i/2,y:i/2}),n=[];function o(t){i=window.innerWidth,window.innerHeight}function s(i){if(i.touches.length>0)for(var e=0;e<i.touches.length;e++)a(i.touches[e].clientX,i.touches[e].clientY,t[Math.floor(Math.random()*t.length)])}function h(i){e.x=i.clientX,e.y=i.clientY,a(e.x,e.y,t[Math.floor(Math.random()*t.length)])}function a(t,i,e){var o=new function(){this.character="*",this.lifeSpan=120,this.initialStyles={position:"absolute",display:"block",pointerEvents:"none","z-index":"10000000",fontSize:"16px","will-change":"transform"},this.init=function(t,i,e){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.position={x:t-10,y:i-20},this.initialStyles.color=e,this.element=document.createElement("span"),this.element.classList.add("sparkle"),this.element.innerHTML=this.character,function(t,i){for(var e in i)t.style[e]=i[e]}(this.element,this.initialStyles),this.update(),document.body.appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px,0) scale("+this.lifeSpan/120+")"},this.die=function(){this.element.parentNode.removeChild(this.element)}};o.init(t,i,e),n.push(o)}function l(){requestAnimationFrame(l),function(){for(var t=0;t<n.length;t++)n[t].update();for(t=n.length-1;t>=0;t--)n[t].lifeSpan<0&&(n[t].die(),n.splice(t,1))}()}document.addEventListener("mousemove",h),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),window.addEventListener("resize",o),l()}();

}

/* HELPERS */

function rand(num){
	return Math.floor(Math.random()*num);
}

String.prototype.insertAt = function(index, string) { 
  return this.substr(0, index) + string + this.substr(index);
}