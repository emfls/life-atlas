import { species } from './data.js';
import { matches } from './filter.js';
const form = document.querySelector('#filters');
const cards = [...document.querySelectorAll('#results .card')];
function update(){
 const visible = matches(species, document.querySelector('#query').value,document.querySelector('#group').value);
 const ids = new Set(visible.map(s=>s.id));
 cards.forEach((card,index)=>{card.hidden = !ids.has(species[index].id)});
 document.querySelector('#count').textContent = `${visible.length}종을 보여드립니다`;
 document.querySelector('#empty').hidden = visible.length !== 0;
}
form.addEventListener('input',update);
form.addEventListener('change',update);
form.addEventListener('submit',e=>e.preventDefault());
form.addEventListener('reset',()=>queueMicrotask(update));
