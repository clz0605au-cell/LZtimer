(function(g){
'use strict';
const states=new WeakMap(),base=[1,5,12,50,100];
function state(a){let s=states.get(a);if(!s){s={revision:0,metrics:new Map()};states.set(a,s)}return s}
function invalidate(a,index,deleted=false){const s=states.get(a);if(!s)return;s.revision++;for(const [n,c]of s.metrics){if(deleted)c.values.splice(index,1);c.dirty=Math.min(c.dirty??index,index);c.end=Math.max(c.end||0,Math.min(a.length,index+n))}}
const pause=async()=>{do{await new Promise(resolve=>setTimeout(resolve,g.document?.body.classList.contains('running')?100:0))}while(g.document?.body.classList.contains('running'))};
async function calculate(a,n,lo,end,s,version){const start=Math.max(0,lo-n+1),coordinates=[...new Set(a.slice(start,end).map(g.LZPerf.value).filter(Number.isFinite))].sort((a,b)=>a-b),ranks=new Map(coordinates.map((x,i)=>[x,i+1])),counts=new Int32Array(coordinates.length+1),sums=new Float64Array(coordinates.length+1),result=[];let dnf=0;
 const add=(v,d)=>{if(!Number.isFinite(v)){dnf+=d;return}for(let k=ranks.get(v);k<counts.length;k+=k&-k){counts[k]+=d;sums[k]+=v*d}};
 const first=k=>{if(k<=0)return 0;let index=0,count=0,sum=0,bit=1;while(bit*2<counts.length)bit*=2;for(;bit;bit>>=1){const next=index+bit;if(next<counts.length&&count+counts[next]<k){index=next;count+=counts[next];sum+=sums[next]}}return sum+(k-count)*coordinates[index]};
 const trim=Math.ceil(n*.05);for(let i=start;i<end;i++){if(s.revision!==version)return null;add(g.LZPerf.value(a[i]),1);if(i-n>=start)add(g.LZPerf.value(a[i-n]),-1);if(i>=lo)result.push(i+1<n?null:dnf>trim?Infinity:(first(n-trim)-first(trim))/(n-2*trim));if((i-start)%512===511)await pause()}return result}
async function prepareOne(a,n){if(base.includes(n))return;const s=state(a);let c=s.metrics.get(n);if(!c){c={values:[],best:null,dirty:0,end:a.length,job:null};s.metrics.set(n,c)}if(c.job){await c.job;return prepareOne(a,n)}if(c.dirty==null&&c.values.length===a.length)return;
 if(c.dirty==null&&a.length-c.values.length<=2){for(let i=c.values.length;i<a.length;i++){const v=g.LZPerf.average(a,i,n);c.values.push(v);if(v!=null)c.best=c.best==null?v:Math.min(c.best,v)}return}
 const version=s.revision,lo=c.dirty??c.values.length,end=Math.min(a.length,Math.max(c.end||0,a.length>c.values.length?a.length:lo)),length=a.length;c.job=(async()=>{await pause();const values=await calculate(a,n,lo,end,s,version);if(!values||s.revision!==version)return;for(let i=0;i<values.length;i++)c.values[lo+i]=values[i];c.values.length=length;c.best=null;for(let i=0;i<c.values.length;i++){const v=c.values[i];if(v!=null)c.best=c.best==null?v:Math.min(c.best,v);if(i%4096===4095)await pause()}if(s.revision===version){c.dirty=null;c.end=0}})();try{await c.job}finally{c.job=null}if(s.revision!==version||c.values.length!==a.length||c.dirty!=null)return prepareOne(a,n)}
async function prepare(a,metrics){for(const n of metrics)await prepareOne(a,n)}
function summary(a,n){if(base.includes(n)){const c=g.LZPerf.ensure(a),k=base.indexOf(n);return {current:c.rows.at(-1)?.[k]??null,best:c.best[k],ready:true}}const c=state(a).metrics.get(n);return c&&c.dirty==null&&c.values.length===a.length?{current:c.values.at(-1)??null,best:c.best,ready:true}:{current:null,best:null,ready:false}}
g.LZOverview={prepare,summary,invalidate};
})(typeof window==='undefined'?globalThis:window);
