const fallback={works:[],counts:{total:0,ready_for_review:0,approved:0,ready_to_release:0}};

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

function setText(id,value){const node=document.getElementById(id);if(node)node.textContent=String(value ?? 0)}

loadPublishingData().then(data=>{
  const counts=data.counts||fallback.counts;
  setText('works',counts.total);
  setText('review',counts.ready_for_review);
  setText('release',counts.ready_to_release);
});