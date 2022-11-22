import { monsters } from './monsters.js';
//console.log(monsters);
for (let monster of monsters) {
    showMonster(monster);
}

function showMonster(monster) {
    const monsterEle = document.createElement('div');
    monsterEle.className = 'monster';

    const img = document.createElement('img');
    img.src = `https://robohash.org/${monster.id}}?set=set2`;
    img.alt = monster.name;

    const name = document.createElement('p');
    name.className = "name";
    name.innerText = monster.name;

    const email = document.createElement('p');
    email.className = "email";
    email.innerText = monster.email;

    monsterEle.append(img, name, email);

    document.querySelector('.monsters').append(monsterEle);
}

showError();
function showError(){
    const errorDiv = document.createElement('div');  
    errorDiv.className = "p-5 not-found"; 
    errorDiv.style.display = "none";
    const errorSpan = document.createElement('span');  
    errorSpan.innerText = "404";
    const errorh1 = document.createElement('h1'); 
    errorh1.innerText = "🧟‍♂️ No Monster Found 🧟‍♂️"; 
    errorDiv.append (errorSpan,errorh1);
    //console.log(errorDiv);
    document.querySelector('.monsters').append(errorDiv);
 }
document.querySelector('#search-monster-form').addEventListener('keyup', function (e) {
    const keyword = e.target.value.toLowerCase();
    //console.log(keyword);
    const monsters = document.querySelectorAll('.monster');
    let flag = true;
    console.log(monsters);
    for (let monster of monsters) {
        const name = monster.children[1].innerText.toLowerCase();
        const email = monster.children[2].innerText.toLowerCase();
        if(name.includes(keyword) || email.includes(keyword)){
            monster.style.display = 'block';
            flag = false;
        }else{
          monster.style.display = 'none';
        }
    }
    if(flag){
        document.querySelector('.not-found').style.display = 'block';
    }else{
        document.querySelector('.not-found').style.display = 'none';
    }
});

document.querySelector('#search-monster-form').addEventListener('submit',e=>{
    e.preventDefault();
});