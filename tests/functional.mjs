import assert from 'node:assert/strict';
import {species} from '../assets/data-v2.js';
import {matches} from '../assets/filter-v2.js';
const handlers={};
const inputs=Object.fromEntries(['query','group','environment','count','empty'].map(id=>['#'+id,{value:'',textContent:'',hidden:false}]));
const cards=species.map(s=>({dataset:{id:s.id},hidden:false}));
const form={addEventListener(type,fn){handlers[type]=fn;}};
globalThis.document={querySelector:q=>q==='#filters'?form:inputs[q],querySelectorAll:q=>{assert.equal(q,'#results .card');return cards}};
await import('../assets/app-v2.js');
const visible=()=>cards.filter(c=>!c.hidden).map(c=>c.dataset.id);
for(const s of species){inputs['#query'].value=s.scientific;handlers.input();assert.deepEqual(visible(),[s.id]);}
inputs['#query'].value='   ＰＡＮＴＨＥＲＡ   ';handlers.input();assert.deepEqual(visible(),['lion']);
inputs['#query'].value='';inputs['#group'].value='양서류';inputs['#environment'].value='담수 연계';handlers.change();assert.deepEqual(visible(),['axolotl','golden-frog']);
inputs['#environment'].value='해양';handlers.input();assert.deepEqual(visible(),[]);assert.equal(inputs['#empty'].hidden,false);assert.equal(inputs['#count'].textContent,'0종을 보여드립니다');
let prevented=false;handlers.reset({preventDefault(){prevented=true}});assert.equal(prevented,true);assert.equal(visible().length,7);for(const k of ['query','group','environment'])assert.equal(inputs['#'+k].value,'');assert.equal(inputs['#empty'].hidden,true);
handlers.reset({preventDefault(){}});assert.equal(visible().length,7);
for(const g of new Set(species.map(s=>s.group)))for(const e of new Set(species.map(s=>s.environment)))assert.deepEqual(matches(species,'',g,e),species.filter(s=>s.group===g&&s.environment===e));
let submitPrevented=false;handlers.submit({preventDefault(){submitPrevented=true}});assert.equal(submitPrevented,true);
console.log('PASS Life: seven species searches; NFKC/case/trim; all group/environment combinations; empty/count; explicit/repeated reset; submit prevention.');
