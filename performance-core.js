(function(g){
'use strict';
const metrics=[1,5,12,50,100], caches=new WeakMap();
const value=s=>s.penalty==='DNF'?Infinity:s.time+(s.penalty==='+2'?2:0);
function average(a,i,n){if(i+1<n)return null;if(n===1)return value(a[i]);const v=a.slice(i-n+1,i+1).map(value).sort((a,b)=>a-b),trim=Math.ceil(n*.05);let sum=0;for(let k=trim;k<n-trim;k++)sum+=v[k];return sum/(n-2*trim)}
function entry(a,i){return metrics.map(n=>average(a,i,n))}
function contribute(c,s,row){const v=value(s);if(Number.isFinite(v)&&Number.isFinite(s.time)&&s.time>=0){c.sum+=v;c.count++}for(let k=0;k<metrics.length;k++)if(row[k]!=null)c.best[k]=c.best[k]==null?row[k]:Math.min(c.best[k],row[k])}
function rebuildSummary(a,c){c.sum=0;c.count=0;c.best=metrics.map(()=>null);for(let i=0;i<a.length;i++)contribute(c,a[i],c.rows[i])}
function ensure(a,limit=a.length){let c=caches.get(a);if(!c){c={rows:[],sum:0,count:0,best:metrics.map(()=>null)};caches.set(a,c)}if(c.rows.length>a.length){c.rows.length=0;c.sum=0;c.count=0;c.best.fill(null)}for(let i=c.rows.length;i<Math.min(a.length,limit);i++){const row=entry(a,i);c.rows.push(row);contribute(c,a[i],row)}return c}
function edit(a,index){g.LZOverview?.invalidate(a,index);const c=ensure(a);for(let i=index;i<Math.min(a.length,index+100);i++)c.rows[i]=entry(a,i);rebuildSummary(a,c)}
function remove(a,index){g.LZOverview?.invalidate(a,index,true);const c=caches.get(a);if(!c)return;c.rows.splice(index,1);for(let i=index;i<Math.min(a.length,index+99);i++)c.rows[i]=entry(a,i);rebuildSummary(a,c)}
function series(a,n){const c=ensure(a),k=metrics.indexOf(n);return c.rows.map(r=>r[k])}
function sampleIndices(length,limit=500){if(length<=limit)return Array.from({length},(_,i)=>i);return Array.from({length:limit},(_,i)=>Math.round(i*(length-1)/(limit-1)))}
async function prepare(a){if(caches.get(a)?.rows.length===a.length)return;for(let end=(caches.get(a)?.rows.length||0)+1000;end<a.length+1000;end+=1000){ensure(a,end);await new Promise(resolve=>setTimeout(resolve,0))}}
g.LZPerf={prepare,ensure,edit,remove,series,average,value,metrics,sampleIndices};
})(typeof window==='undefined'?globalThis:window);
