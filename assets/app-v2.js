import { species } from './data-v2.js';
import { matches } from './filter-v2.js';
const form = document.querySelector('#filters');
const cards = [...document.querySelectorAll('#results .card')];
function update(){
 const visible = matches(species, document.querySelector('#query').value,document.querySelector('#group').value,document.querySelector('#environment').value);
 const ids = new Set(visible.map(s=>s.id));
 cards.forEach(card=>{card.hidden = !ids.has(card.dataset.id)});
 document.querySelector('#count').textContent = `${visible.length}종을 보여드립니다`;
 document.querySelector('#empty').hidden = visible.length !== 0;
}
form.addEventListener('input',update);
form.addEventListener('change',update);
form.addEventListener('submit',e=>e.preventDefault());
form.addEventListener('reset',event=>{event.preventDefault();for(const selector of ['#query','#group','#environment'])document.querySelector(selector).value='';update();});
