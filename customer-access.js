/* Real Firebase account access is isolated from the browser-local demo. */
function openCustomerAccess(mode='signin'){location.href='secure.html'+(mode==='signup'?'?mode=signup':'')}
const renderBeforeAccess=render;render=function(){renderBeforeAccess();if(portalMode){const actions=$('.portal-header>.actions');if(actions){const button=document.createElement('a');button.className='button-link';button.textContent='Customer sign in / sign up';button.id='customer-access-open';button.href='secure.html';actions.prepend(button)}}};
render();
