/* Independent watchdog: also runs when an ES module fails before its own catch. */
(()=>{
  let phase='loading',timer;
  const root=()=>document.querySelector('#secure-app');
  function fail(kind='connection'){
    if(phase==='ready')return;
    phase='failed';clearTimeout(timer);
    const messages={
      file:['Open the account page through a web server','This account page uses JavaScript modules and cannot be opened by double-clicking an HTML file. Run npm start in the project folder, then open http://127.0.0.1:4173/secure.html.'],
      offline:['Internet connection required','Firebase sign-in needs an internet connection. Reconnect and retry. The local demo is available separately.'],
      storage:['Account storage is unavailable','Firebase could not use browser session storage. Check the site’s storage permissions or try a normal browser window, then retry.'],
      module:['Account files could not load','A required account script failed to load. Retry, or refresh the page with Ctrl+Shift+R to request fresh files.'],
      connection:['Firebase connection did not finish','The connection is taking too long or a required request is blocked. Check your connection, then retry. If this repeats, try another browser or network and report the page address.']
    };
    const [title,detail]=messages[kind]||messages.connection;
    const panel=document.createElement('section');panel.className='card secure-auth';
    const heading=document.createElement('h1');heading.textContent=title;panel.append(heading);
    const text=document.createElement('p');text.className='sub';text.textContent=detail;panel.append(text);
    const actions=document.createElement('div');actions.className='secure-actions';
    const retry=document.createElement('button');retry.className='primary';retry.textContent='Retry connection';retry.onclick=()=>location.reload();actions.append(retry);
    const demo=document.createElement('a');demo.href='portal.html';demo.className='button-link';demo.textContent='Local demo portal';actions.append(demo);panel.append(actions);
    const note=document.createElement('p');note.className='footnote';note.textContent='No sign-in was completed by this loading screen. Customer-record access remains subject to Firebase setup and ownership rules.';panel.append(note);
    root()?.replaceChildren(panel);
  }
  window.KCHECK_BOOT={ready(){phase='ready';clearTimeout(timer)},fail};
  if(location.protocol==='file:'){fail('file');return}
  if(!navigator.onLine){fail('offline');return}
  window.addEventListener('error',event=>{if(phase==='loading'&&((event.target?.tagName==='SCRIPT')||/secure-app|firebase-config/.test(event.filename||'')))fail('module')},true);
  window.addEventListener('offline',()=>{if(phase==='loading')fail('offline')});
  timer=setTimeout(()=>fail('connection'),15000);
})();
