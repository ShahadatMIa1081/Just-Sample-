/*let Hours=document.getElementById('Hours')
let Minute = document.getElementById("Minute")
let scoend= document.getElementById("scoend")
setInterval(function(){
   let date = new Date();
 let s = date.getSeconds();
 let m=date.getMinutes();
 let h= date.getHours();
 scoend.innerText =s;
 Minute.innerText =m;
 Hours.innerText =h;
},1000)*/


/*let div = document.createElement("div");
div.className ="hee"
div.id ='he';
div.innerHTML = '<p>hello man how are you?</p>';
let text = document.createTextNode("hello ahmed");
div.appendChild(text)
let h1 = document.createElement('h1');
h1.textContent ="hlw amir hamza"
div.appendChild(h1)
document.body.appendChild(div)*/
/*let ul = document.createElement("ul")
ul.id ="id2"

let li1 = document.createElement("li")
let li2 = document.createElement("li")
li2.textContent = "hello ma";
ul.appendChild(li2)
li1.textContent="hello ammu";
ul.appendChild(li1)
let li3 = document.createElement('li')
li3.textContent="na khabo na"
ul.appendChild(li3)
document.body.appendChild(ul)
let script = document.createElement("script")
script.src = "sk vai"
document.body.appendChild(script)
function clickMe(){
 document.getElementById('id1').innerHTML= Date()
}*/

let menu = document.getElementById("menu")
let lang = ['python','java','js','react']
let fragment = document.createDocumentFragment();
lang.forEach((name)=>{
  let li = document.createElement("li");
  li.innerHTML = name;
  fragment.appendChild(li)
})
menu.appendChild(fragment)