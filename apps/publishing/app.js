const STATES=['RECEIVED','INTEGRITY_CHECKED','METADATA_READY','READY_FOR_REVIEW','APPROVED','READY_TO_RELEASE','RELEASED'];
const fallback={works:[],counts:{total:0,ready_for_review:0,approved:0,ready_to_release:0}};

const transitions={
  RECEIVED:['INTEGRITY_CHECKED','BLOCKED'],
  INTEGRITY_CHECKED:['METADATA_READY','BLOCKED'],
  METADATA_READY:['READY_FOR_REVIEW','BLOCKED'],
  READY_FOR_REVIEW:['APPROVED','REJECTED','BLOCKED'],
  APPROVED:['READY_TO_RELEASE','BLOCKED'],
  READY_TO_RELEASE:['RELEASED','BLOCKED'],
  RELEASED:['ARCHIVED'],
  BLOCKED:['RECEIVED','INTEGRITY_CHECKED','METADATA_READY','READY_FOR_REVIEW','APPROVED','READY_TO_RELEASE'],
  REJECTED:['METADATA_READY','ARCHIVED'],
  ARCHIVED:[]
};

function canTransition(from,to,{humanApproval=false,releaseAuthorization=false}={}){
  if(!(transitions[from]||[]).includes(to)) return false;
  if(to==='APPROVED'&&!humanApproval) return false;
  if(to==='RELEASED'&&!releaseAuthorization) return false;
  return true;
}

async function loadPublishingData(){
  try{
    const response=await fetch('../../data/publishing.demo.json');
    if(!response.ok) throw new Error('data unavailable');
    return await response.json();
  }catch(error){
    console.info('BRI TSUN Publishing Panel: structural mode.',error.message);
    return fallback;
  }
}

function setText(id,value){const node=document.getElementById(id);if(node)node.textContent=String(value??0)}

function renderWorkflow(){
  const node=document.getElementById('workflow');
  if(!node)return;
  node.innerHTML=STATES.map((state,index)=>`<span>${state}</span>${index<STATES.length-1?'<b>→</b>':''}`).join('');
}

loadPublishingData().then(data=>{
  const counts=data.counts||fallback.counts;
  setText('works',counts.total);
  setText('review',counts.ready_for_review);
  setText('release',counts.ready_to_release);
  renderWorkflow();
});

window.BriTsunWorkflow=Object.freeze({states:[...STATES],canTransition});