(function(root){
'use strict';
function csvCell(value){return '"'+String(value??'').replace(/"/g,'""')+'"'}
function serializeCSV(rows){return '\ufeff'+rows.map(row=>row.map(csvCell).join(',')).join('\r\n')+'\r\n'}
function parseDelimited(text,delimiter){text=String(text).replace(/^\ufeff/,'');if(!delimiter){const counts={',':0,';':0,'\t':0};let quoted=false;for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'){if(quoted&&text[i+1]==='"'){i++;continue}quoted=!quoted}else if(!quoted){if(c==='\r'||c==='\n')break;if(c in counts)counts[c]++}}delimiter=Object.keys(counts).sort((a,b)=>counts[b]-counts[a])[0]}
const rows=[];let row=[],field='',quoted=false;for(let i=0;i<text.length;i++){const c=text[i];if(quoted){if(c==='"'){if(text[i+1]==='"'){field+='"';i++}else quoted=false}else field+=c}else if(c==='"'&&!field.length){quoted=true}else if(c===delimiter){row.push(field);field=''}else if(c==='\r'||c==='\n'){row.push(field);if(row.some(v=>v.length))rows.push(row);row=[];field='';if(c==='\r'&&text[i+1]==='\n')i++}else field+=c}if(quoted)throw new Error('Unclosed CSV field');if(field.length||row.length){row.push(field);if(row.some(v=>v.length))rows.push(row)}return rows}
function seconds(value){return value==null?'':Number.isFinite(value)?value.toFixed(2):'DNF'}
function groupCSV(snapshot,averages={}){const rows=[['Index','Time','Penalty','Result','Date','Scramble','Event','Group','InputMode','Ao5','Ao12']];snapshot.solves.forEach((solve,i)=>{const result=solve.penalty==='DNF'?Infinity:solve.time+(solve.penalty==='+2'?2:0);rows.push([i+1,seconds(solve.time),solve.penalty||'',seconds(result),solve.date||'',solve.scramble||'',snapshot.event,snapshot.group.name,solve.inputMode||'timer',seconds(averages.ao5?.[i]),seconds(averages.ao12?.[i])])});return serializeCSV(rows)}
function groupJSON(snapshot){return JSON.stringify({schema:'lztimer-group',version:1,exportedAt:snapshot.exportedAt,event:snapshot.event,group:snapshot.group,solves:snapshot.solves},null,2)}
function filenamePart(name){return String(name).replace(/[<>:"/\\|?*\u0000-\u001f]/g,'_').trim().slice(0,70)||'group'}
const api={serializeCSV,parseDelimited,groupCSV,groupJSON,filenamePart};root.LZData=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(globalThis);
