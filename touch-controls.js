(function(global){
'use strict';
function attach(zone,actions){
 let points=new Map(),session=null,wait;
 const cancelHold=()=>{clearTimeout(wait);actions.cancel()};
 const reset=()=>{clearTimeout(wait);points.clear();session=null};
 zone.addEventListener('pointerdown',e=>{
  if(e.pointerType==='mouse'||e.target.closest('button,input,select,dialog')||document.querySelector('dialog[open]'))return;
  e.preventDefault();zone.setPointerCapture?.(e.pointerId);
  if(!session){session={all:[],moved:false,multi:false,stopped:actions.running(),cancelled:false};if(session.stopped)actions.stop()}
  const p={x:e.clientX,y:e.clientY,dx:0,dy:0};points.set(e.pointerId,p);session.all.push(p);
  if(session.all.length>1){session.multi=true;cancelHold()}
  else if(!session.stopped)wait=setTimeout(()=>{if(session&&!session.moved&&!session.multi){session.ready=true;actions.prepare()}},180);
 });
 zone.addEventListener('pointermove',e=>{const p=points.get(e.pointerId);if(!p)return;e.preventDefault();p.dx=e.clientX-p.x;p.dy=e.clientY-p.y;if(Math.hypot(p.dx,p.dy)>10){session.moved=true;cancelHold()}});
 const end=(e,cancelled=false)=>{
  const p=points.get(e.pointerId);if(!p)return;e.preventDefault();p.dx=e.clientX-p.x;p.dy=e.clientY-p.y;
  if(Math.hypot(p.dx,p.dy)>10){session.moved=true;cancelHold()}
  session.cancelled ||= cancelled;points.delete(e.pointerId);if(points.size)return;
  clearTimeout(wait);const s=session;session=null;
  if(s.cancelled||s.stopped){actions.cancel();return}
  if(s.moved||s.multi){actions.cancel();if(s.all.length===1){const p=s.all[0];if(Math.abs(p.dx)>=60&&Math.abs(p.dx)>Math.abs(p.dy)*1.4)actions.gesture(p.dx>0?'next':'delete')}
   else if(s.all.length===2){const [a,b]=s.all;const vertical=p=>Math.abs(p.dy)>=60&&Math.abs(p.dy)>Math.abs(p.dx)*1.4;if(vertical(a)&&vertical(b)&&Math.sign(a.dy)===Math.sign(b.dy))actions.gesture(a.dy>0?'clear':'penalty')}
  }else if(s.ready)actions.release();else actions.tap?.();
 };
 zone.addEventListener('pointerup',e=>end(e));zone.addEventListener('pointercancel',e=>end(e,true));zone.addEventListener('lostpointercapture',e=>{if(points.has(e.pointerId))end(e,true)});
 global.addEventListener('blur',()=>{if(session){actions.cancel();reset()}});
 return {cancel:()=>{actions.cancel();reset()}};
}
global.LZTouch={attach};
})(window);
