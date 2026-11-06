(function(){
'use strict';
const KEY='lztimer-settings-v1',core=window.LZSettingsCore;
let saved;try{saved=JSON.parse(localStorage.getItem(KEY))}catch{}let config=core.normalizeSettings(saved);
const page=document.querySelector('#competitionStage')||document.querySelector('script[src^="competition.mjs"]')?'competition':'practice';
const translations=`Import saved. Reload the page to refresh results.|导入已保存，请刷新页面更新显示。|匯入已儲存，請重新整理頁面更新顯示。
Current group|当前分组|目前分組
Imported solves are added to this group. Existing results are kept.|导入成绩将追加到此分组，原有成绩会保留。|匯入成績將加入此分組，原有成績會保留。
The destination group is no longer available. Reopen Import.|目标分组已不可用，请重新打开导入。|目標分組已無法使用，請重新開啟匯入。
Import failed. Your existing results are unchanged. Try again.|导入失败，原有成绩未改变，请重试。|匯入失敗，原有成績未變更，請重試。
Discard this round? All solves from this round will be deleted and excluded from statistics.|放弃本轮？本轮所有成绩将被删除，且不计入统计。|放棄本輪？本輪所有成績將被刪除，且不計入統計。
Missing file: overview-custom.js. Upload it beside index.html.|缺少 overview-custom.js，请将它上传到 index.html 所在目录。|缺少 overview-custom.js，請將它上傳到 index.html 所在目錄。
Saved results could not be loaded.|无法读取已保存的成绩。|無法讀取已儲存的成績。
Unable to start LZtimer.|LZtimer 启动失败。|LZtimer 啟動失敗。
Edit time|修改时间|修改時間
Time before penalty|罚时前的原始时间|罰時前的原始時間
Enter a valid time.|请输入有效时间。|請輸入有效時間。
Time updated.|成绩已更新。|成績已更新。
Customize overview|自定义概览|自訂概覽
Average of|平均次数|平均次數
Add|添加|新增
Done|完成|完成
Enter a whole number from 3 to 100000.|请输入 3 至 100000 的整数。|請輸入 3 至 100000 的整數。
Unable to calculate averages.|无法计算平均值。|無法計算平均值。
Saving…|正在保存…|正在儲存…
Save failed|保存失败|儲存失敗
Penalty|罚时|罰時
Touch gestures|触控手势|觸控手勢
Swipe right|单指右滑|單指右滑
Swipe left|单指左滑|單指左滑
Two fingers down|双指下滑|雙指下滑
Two fingers up|双指上滑|雙指上滑
Delete last solve (confirmation required)|删除上次成绩（需确认）|刪除上次成績（需確認）
Choose +2 or DNF|选择 +2 或 DNF|選擇 +2 或 DNF
Keyboard shortcuts|快捷键|快捷鍵
Hold Space, then release|长按空格后松开|長按空白鍵後放開
Start timer|开始计时|開始計時
Any key|任意按键|任意按鍵
Stop timer|停止计时|停止計時
Space|空格|空白鍵
Open manual entry|打开手动输入|開啟手動輸入
Return|回车|Return
Confirm manual result|确认手动成绩|確認手動成績
Delete last solve|删除上一次成绩|刪除上一次成績
Next scramble|下一个打乱|下一個打亂
Previous scramble|上一个打乱|上一個打亂
Toggle +2 on last solve|切换上一次成绩的 +2 罚时|切換上一次成績的 +2 罰時
Toggle DNF on last solve|切换上一次成绩的 DNF|切換上一次成績的 DNF
Clear current group (confirmation required)|清空当前分组成绩（需确认）|清空目前分組成績（需確認）
Option shortcuts are disabled in Competition.|比赛模式禁用 Option 快捷键。|比賽模式停用 Option 快捷鍵。
Ready to start|可以开始|可以開始
Export|导出|匯出
Export data|导出数据|匯出資料
Export current group|导出当前分组|匯出目前分組
File format|文件格式|檔案格式
Download|下载|下載
Best possible average|最好可能平均|最佳可能平均
Worst possible average|最差可能平均|最差可能平均
Competition start delay|比赛模式开始时间限制|比賽模式開始時間限制
1 min 30 s|1 分 30 秒|1 分 30 秒
2 min|2 分钟|2 分鐘
2 min 30 s|2 分 30 秒|2 分 30 秒
3 min|3 分钟|3 分鐘
Statistics|统计|統計
Chart data|图表数据|圖表資料
Clear all results?|清空全部成绩？|清空全部成績？
Clear all results|清空全部成绩|清空全部成績
All results will be permanently deleted. This group will be kept.|全部成绩将被永久删除，分组本身会保留。|全部成績將被永久刪除，分組本身會保留。
Manage groups|管理分组|管理分組
Group to manage|选择分组|選擇分組
Rename|重命名|重新命名
Delete group|删除分组|刪除分組
Delete group?|删除分组？|刪除分組？
Group not found.|找不到此分组。|找不到此分組。
All results in this group will be permanently deleted.|该分组的全部成绩将被永久删除。|此分組的全部成績將被永久刪除。
Group|分组|分組
New group|新建分组|新增分組
Group name|分组名称|分組名稱
Create|创建|建立
Close group dialog|关闭分组窗口|關閉分組視窗
Enter a group name.|请输入分组名称。|請輸入分組名稱。
Group names can contain up to 80 characters.|分组名称最多为 80 个字符。|分組名稱最多為 80 個字元。
A group with this name already exists.|已有同名分组。|已有同名分組。
s|秒|秒
Settings|设置|設定
Language|语言|語言
Input mode|成绩输入方式|成績輸入方式
Timer|计时|計時
Manual|手动输入|手動輸入
Background|背景颜色|背景顏色
Reset|重置|重設
Close settings|关闭设置|關閉設定
Enter result|输入成绩|輸入成績
Digits|数字|數字
Save|保存|儲存
Cancel|取消|取消
Enter 1–9 digits.|请输入 1–9 位数字。|請輸入 1–9 位數字。
Practice|日常训练|日常訓練
Competition|比赛模拟|比賽模擬
Overview|训练概览|訓練概覽
Analytics|分析|分析
Analytics →|分析 →|分析 →
History|历史成绩|歷史成績
Current|当前|目前
Best|最佳|最佳
Single|单次|單次
Session mean|整组平均|整組平均
Session|训练组|訓練組
Session name|训练组名称|訓練組名稱
New session|新建训练组|新增訓練組
Toggle theme|切换明暗主题|切換明暗主題
Timer mode|计时模式|計時模式
WCA event|WCA 项目|WCA 項目
Event|项目|項目
Preview|预览|預覽
Ready|就绪|就緒
Hold|保持按住|保持按住
Saved|已保存|已儲存
Import|导入|匯入
Import solves|导入成绩|匯入成績
Demo data|演示数据|示範資料
Demo data ↗|演示数据 ↗|示範資料 ↗
Demo session opened.|已打开演示训练组。|已開啟示範訓練組。
Imported session|导入训练组|匯入訓練組
No solves|暂无成绩|暫無成績
Copy scramble|复制打乱|複製打亂
Previous scramble|上一条打乱|上一條打亂
Next scramble|下一条打乱|下一條打亂
No previous scramble.|没有上一条打乱。|沒有上一條打亂。
Copied.|已复制。|已複製。
Clipboard is unavailable.|剪贴板不可用。|剪貼簿無法使用。
Delete last solve|删除上一次成绩|刪除上一次成績
Delete the last solve?|删除上一次成绩？|刪除上一次成績？
Delete this solve?|删除这次成绩？|刪除這次成績？
Solve deleted.|成绩已删除。|成績已刪除。
Toggle +2|切换 +2|切換 +2
Toggle DNF|切换 DNF|切換 DNF
+2 Penalty|+2 罚时|+2 罰時
Copy result|复制成绩|複製成績
Delete|删除|刪除
Close solve|关闭成绩|關閉成績
Close analytics|关闭分析|關閉分析
Close import|关闭导入|關閉匯入
Range|范围|範圍
All solves|全部成绩|全部成績
Last 12|最近 12 次|最近 12 次
Last 50|最近 50 次|最近 50 次
Last 100|最近 100 次|最近 100 次
Last 500|最近 500 次|最近 500 次
Custom count|自定义次数|自訂次數
All dates|所有日期|所有日期
Date range|日期范围|日期範圍
Today|今天|今天
Last 7 days|最近 7 天|最近 7 天
Last 30 days|最近 30 天|最近 30 天
Start date|开始日期|開始日期
End date|结束日期|結束日期
to|至|至
Valid / Total|有效 / 全部|有效 / 全部
Best single|最快单次|最快單次
Standard deviation|标准差|標準差
Progression|成绩趋势|成績趨勢
Distribution|成绩分布|成績分布
Best results|最佳成绩|最佳成績
Top 10|前 10 名|前 10 名
No valid results in this range.|此范围内暂无有效成绩。|此範圍內暫無有效成績。
Averages trim the fastest and slowest ceil(5%) results. DNF counts as the slowest. Windows are recalculated within the selected range.|平均会剔除最快与最慢各向上取整的 5% 成绩；DNF 按最慢计。筛选后重新计算连续窗口。|平均會剔除最快與最慢各向上取整的 5% 成績；DNF 按最慢計。篩選後重新計算連續視窗。
Charts are unavailable. Check your connection.|图表暂不可用，请检查网络。|圖表暫時無法使用，請檢查網路。
Loading scramble…|正在生成打乱…|正在產生打亂…
Loading scramble|正在生成打乱|正在產生打亂
Loading…|加载中…|載入中…
Loading preview…|正在加载预览…|正在載入預覽…
Offline · preview unavailable|离线，预览不可用|離線，預覽無法使用
Connect to load preview|联网后加载预览|連線後載入預覽
Preview unavailable for this event|此项目预览不可用|此項目預覽無法使用
Preview unavailable|预览不可用|預覽無法使用
Offline practice scramble|离线练习打乱|離線練習打亂
WCA random state|WCA 随机状态|WCA 隨機狀態
3×3 Blindfolded|三阶盲拧|三階盲解
4×4 Blindfolded|四阶盲拧|四階盲解
5×5 Blindfolded|五阶盲拧|五階盲解
3×3 Multi-Blind|三阶多盲|三階多盲
3×3 Fewest Moves|三阶最少步|三階最少步
3×3 One-Handed|三阶单手|三階單手
Clock|魔表|魔錶
Megaminx|五魔方|五魔方
Pyraminx|金字塔|金字塔
Skewb|斜转魔方|斜轉魔方
csTimer · DCTimer · CSV · Text|csTimer · DCTimer · CSV · 文本|csTimer · DCTimer · CSV · 文字
csTimer JSON, DCTimer text / CSV, or a pasted solve list. Export native database files as text first.|支持 csTimer JSON、DCTimer 文本 / CSV，或粘贴单次成绩列表。原生数据库请先导出为文本。|支援 csTimer JSON、DCTimer 文字 / CSV，或貼上單次成績清單。原生資料庫請先匯出為文字。
Imports create a new session. Review times and penalties before confirming. Missing dates use the current time.|导入将新建训练组。确认前可修改时间和罚时，缺失日期使用当前时间。|匯入將新增訓練組。確認前可修改時間和罰時，缺少日期時使用目前時間。
Choose file|选择文件|選擇檔案
Numeric units|数字单位|數字單位
Numeric values: seconds|数字单位：秒|數字單位：秒
Numeric values: milliseconds|数字单位：毫秒|數字單位：毫秒
Paste solves|粘贴成绩|貼上成績
Parse solves|识别成绩|辨識成績
Local AI|本地 AI|本機 AI
Processed locally|在浏览器本地处理|在瀏覽器本機處理
Raw seconds|原始秒数|原始秒數
Penalty|罚时|罰時
Date / Scramble|日期 / 打乱|日期 / 打亂
None|无|無
Format parser|格式解析|格式解析
Analyzing locally…|正在本地分析…|正在本機分析…
Local AI · review results|本地 AI · 请核对|本機 AI · 請核對
Local AI is unavailable in this browser|此浏览器未提供本地 AI|此瀏覽器未提供本機 AI
AI unavailable; using format parser|AI 不可用，已使用格式解析|AI 無法使用，已使用格式解析
Unable to read this format. Try a text export.|无法读取此格式，请尝试文本导出。|無法讀取此格式，請嘗試文字匯出。
No solves found. Paste a solve list or select a text export.|未找到成绩，请粘贴成绩列表或选择文本导出文件。|找不到成績，請貼上成績清單或選擇文字匯出檔。
Browser storage is full.|浏览器存储空间已满。|瀏覽器儲存空間已滿。
Browser storage failed.|浏览器存储失败。|瀏覽器儲存失敗。
Round|本轮|本輪
Round ao5|轮次 ao5|輪次 ao5
ao5 trend|ao5 趋势|ao5 趨勢
Round ao5 trend|轮次 ao5 趋势|輪次 ao5 趨勢
No completed rounds|暂无已完成轮次|暫無已完成輪次
Completed rounds|已完成轮次|已完成輪次
Not started|尚未开始|尚未開始
Start round ↗|开始比赛 ↗|開始比賽 ↗
New round ↗|开始下一轮 ↗|開始下一輪 ↗
End round|结束本轮|結束本輪
Select an event to begin|选择项目以开始|選擇項目以開始
Shortcuts disabled|快捷键已禁用|快捷鍵已停用
No scramble|暂无打乱|暫無打亂
Preparation|准备阶段|準備階段
Inspection|观察|觀察
Judge|裁判|裁判
Manual entry|手动录入|手動輸入
In progress|进行中|進行中
Past round|历史轮次|歷史輪次
Round complete|本轮完成|本輪完成
Complete|已完成|已完成
Result saved|成绩已保存|成績已儲存
Inspection +2|观察 +2|觀察 +2
Inspection exceeded|观察超时|觀察超時
Inspection exceeded 17 seconds|观察超过 17 秒|觀察超過 17 秒
Preparation is locked for 60 seconds.|准备阶段前 60 秒无法开始。|準備階段前 60 秒無法開始。
Retry scramble|重新加载打乱|重新載入打亂
Scramble unavailable|打乱加载失败|打亂載入失敗
Connect to load a WCA scramble, then retry.|请联网后重新加载 WCA 打乱。|請連線後重新載入 WCA 打亂。
Next attempt →|下一次 →|下一次 →
Toggle additional +2|切换额外 +2|切換額外 +2
Competition timer|比赛计时器|比賽計時器
End this round? Recorded solves will be kept. This incomplete round will not appear in the ao5 trend.|结束本轮？已记录的单次会保留，本轮不会计入 ao5 趋势。|結束本輪？已記錄的單次會保留，本輪不會計入 ao5 趨勢。
Competition data changed in another tab. Reload to continue.|比赛数据已在其他标签页更改，请刷新后继续。|比賽資料已在其他分頁更改，請重新載入後繼續。
Add scramble|追加打乱|追加打亂
Scramble|打乱|打亂
Scramble added.|已追加打乱。|已追加打亂。
Unable to add scramble.|无法追加打乱。|無法追加打亂。
Average details|平均详情|平均詳情
Close average details|关闭平均详情|關閉平均詳情
Included|计入平均|計入平均
Trimmed fastest|剔除最快|剔除最快
Trimmed slowest|剔除最慢|剔除最慢
Date|日期|日期
Status|状态|狀態
No complete average.|成绩不足，无法计算平均。|成績不足，無法計算平均。
No result to penalize.|暂无可加罚的成绩。|暫無可加罰的成績。`;
const dictionary=new Map(translations.split('\n').map(line=>{const [en,hans,hant]=line.split('|');return[en,{en,'zh-Hans':hans,'zh-Hant':hant}]}));
const translationOrigins=new Map();
function t(source){if(typeof source!=='string')return source;const canonical=translationOrigins.get(source)||source,result=translate(canonical);if(result!==canonical)translationOrigins.set(result,canonical);return result}
function translate(source){if(typeof source!=='string')return source;if(config.language==='en')return source;const prefix=source.match(/^\s*/)[0],suffix=source.match(/\s*$/)[0],value=source.trim(),lang=config.language;const direct=dictionary.get(value);if(direct)return prefix+direct[lang]+suffix;const hans=lang==='zh-Hans';let m;
if((m=value.match(/^(\d+) solves$/)))return m[1]+(hans?' 次成绩':' 次成績');
if((m=value.match(/^(\d+) rounds$/)))return m[1]+(hans?' 轮':' 輪');
if((m=value.match(/^Solve #?(\d+)$/)))return(hans?'第 ':'第 ')+m[1]+(hans?' 次成绩':' 次成績');
if((m=value.match(/^Imported (\d+) solves$/)))return(hans?'已导入 ':'已匯入 ')+m[1]+(hans?' 条成绩':' 筆成績');
if((m=value.match(/^Preparation is locked for (\d+) seconds\.$/)))return(hans?'准备阶段前 ':'準備階段前 ')+m[1]+(hans?' 秒无法开始。':' 秒無法開始。');
if((m=value.match(/^Available in (\d+)s$/)))return(hans?'还需 ':'還需 ')+m[1]+(hans?' 秒':' 秒');
if((m=value.match(/^Auto (inspection|start) in (\d+)s$/)))return m[2]+(hans?' 秒后自动':' 秒後自動')+(m[1]==='inspection'?(hans?'观察':'觀察'):(hans?'开始':'開始'));
if((m=value.match(/^Round ao5: (.+)$/)))return t('Round ao5')+'：'+m[1];
if((m=value.match(/^#(\d+) raw seconds$/)))return'#'+m[1]+' '+t('Raw seconds');
if((m=value.match(/^(Inspection|Judge) (\+2|DNF)$/)))return t(m[1])+' '+m[2];
if((m=value.match(/^Automatic DNF · (.+)$/)))return(hans?'自动 DNF · ':'自動 DNF · ')+t(m[1]);
if((m=value.match(/^Session (\d+)$/)))return t('Session')+' '+m[1];
if(value.startsWith('Demo · '))return(hans?'演示 · ':'示範 · ')+t(value.slice(7));
if(value.startsWith('Paste exported data or a solve list:'))return(hans?'粘贴导出数据或成绩列表：':'貼上匯出資料或成績清單：')+value.slice(36);
if(value.includes(' · '))return prefix+value.split(' · ').map(t).join(' · ')+suffix;
return source;
}
const textSources=new WeakMap(),attributeSources=new WeakMap();let observer=null,initialized=false;
const ignored='[data-user-content],#session option,#manageGroupSelect option,script,style,textarea,#timer,#competitionTimer,#manualPreview,#manualValue,#scramble,#competitionScramble,#solveAlg,.solve-alg,.alg,twisty-player';
function translateText(node){if(node.parentElement?.id==='timer'||node.parentElement?.id==='competitionTimer')return;if(node.parentElement?.closest(ignored))return;const current=node.nodeValue;let item=textSources.get(node);if(!item||current!==item.last)item={source:current,last:current};const translated=t(item.source);if(current!==translated)node.nodeValue=translated;item.last=translated;textSources.set(node,item)}
function translateAttributes(element){let all=attributeSources.get(element)||{};for(const key of ['title','aria-label','placeholder']){if(!element.hasAttribute(key))continue;let current=element.getAttribute(key),item=all[key];if(!item||current!==item.last)item={source:current,last:current};let value=t(item.source);if(current!==value)element.setAttribute(key,value);item.last=value;all[key]=item}attributeSources.set(element,all)}
function localize(root=document.body){if(!root)return;if(root.id==='timer'||root.id==='competitionTimer')return;if(root.nodeType===3){translateText(root);return}if(root.nodeType!==1)return;translateAttributes(root);for(const el of root.querySelectorAll('[title],[aria-label],[placeholder]'))translateAttributes(el);let walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);while(walker.nextNode())translateText(walker.currentNode)}
function observe(){observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['title','aria-label','placeholder']})}
function save(){try{localStorage.setItem(KEY,JSON.stringify(config))}catch{}}
const colorProperties=['--bg','--panel','--line','--ink','--text','--muted','--green','--soft','--accent'];
function applyColor(){const body=document.body;if(!body)return;const color=config.colors[page];body.classList.toggle('settings-custom',!!color);for(const key of colorProperties)body.style.removeProperty(key);if(color){const palette=core.paletteFor(color);const vars={'--bg':color,'--panel':palette.panel,'--line':palette.line,'--ink':palette.ink,'--text':palette.ink,'--muted':palette.muted,'--green':palette.green,'--soft':palette.soft,'--accent':palette.accent};for(const[key,v]of Object.entries(vars))body.style.setProperty(key,v);body.style.colorScheme=palette.light?'light':'dark'}else body.style.removeProperty('color-scheme');if(initialized)syncColors()}
function notify(){document.documentElement.lang=config.language;document.title=page==='competition'?'LZtimer · '+t('Competition'):'LZtimer';localize();window.dispatchEvent(new CustomEvent('lzsettingschange',{detail:{...config,colors:{...config.colors}}}))}
function setSetting(key,value){if(key==='language'&&['en','zh-Hans','zh-Hant'].includes(value))config.language=value;if(key==='inputMode'&&['timer','manual'].includes(value))config.inputMode=value;if(key==='competitionPreparation'&&[90,120,150,180].includes(Number(value)))config.competitionPreparation=Number(value);save();notify()}
function setColor(color){if(color!==null&&!/^#[\da-f]{6}$/i.test(color))return;config.colors[page]=color;save();applyColor()}
function syncColors(){const color=config.colors[page]||(page==='competition'?'#102c60':document.body.classList.contains('dark')?'#16191c':'#f4f5f7');document.getElementById('backgroundColor').value=color;document.getElementById('backgroundHex').textContent=color.toUpperCase();document.querySelectorAll('.settings-swatch').forEach(b=>b.classList.toggle('selected',b.dataset.color===color.toLowerCase()))}
let manualCallbacks=null,manualSubmitted=false;
function openManual(callbacks){const dialog=document.getElementById('manualDialog');if(!dialog||dialog.open)return;manualCallbacks=callbacks;manualSubmitted=false;document.getElementById('manualValue').value='';document.getElementById('manualPreview').textContent='0.00';document.getElementById('manualError').textContent='';document.getElementById('manualSave').disabled=true;dialog.showModal();document.getElementById('manualValue').focus()}
function setup(){initialized=true;const container=document.createElement('div');container.innerHTML=`<dialog id="settingsDialog" class="settings-modal"><div class="settings-head"><h2>Settings</h2><button class="settings-close" id="closeSettings" aria-label="Close settings">×</button></div><div class="settings-row"><label for="settingsLanguage">Language</label><select id="settingsLanguage"><option value="en">English</option><option value="zh-Hans">简体中文</option><option value="zh-Hant">繁體中文</option></select></div><div class="settings-row"><label for="settingsInputMode">Input mode</label><select id="settingsInputMode"><option value="timer">Timer</option><option value="manual">Manual</option></select></div><div class="settings-row"><label for="settingsPreparation">Competition start delay</label><select id="settingsPreparation"><option value="90">1 min 30 s</option><option value="120">2 min</option><option value="150">2 min 30 s</option><option value="180">3 min</option></select></div><div class="settings-section"><label for="backgroundColor">Background</label><div class="settings-color-row"><div class="settings-color-picker"><input id="backgroundColor" type="color" aria-label="Background"><span id="backgroundHex" class="settings-hex"></span></div><button class="settings-reset" id="resetBackground">Reset</button></div><div id="backgroundSwatches" class="settings-swatches"></div></div></dialog><dialog id="manualDialog" class="settings-modal"><div class="settings-head"><h2>Enter result</h2><button class="settings-close" id="closeManual" aria-label="Cancel">×</button></div><form id="manualForm" class="manual-form"><input id="manualValue" class="manual-input" type="text" inputmode="numeric" pattern="[0-9]{1,9}" maxlength="9" autocomplete="off" aria-label="Digits"><div class="manual-preview" id="manualPreview" aria-live="polite">0.00</div><div id="manualError" class="manual-error" role="status"></div><div class="manual-actions"><button type="button" id="cancelManual">Cancel</button><button type="submit" id="manualSave" disabled>Save</button></div></form></dialog>`;document.body.append(container);
const info=document.getElementById('shortcutInfo');if(info){const help=document.createElement('dialog');help.id='shortcutsDialog';help.className='settings-modal shortcuts-modal';help.setAttribute('aria-labelledby','shortcutsTitle');const rows=[['Hold Space, then release','Start timer'],['Any key','Stop timer'],['Space','Open manual entry'],['Return','Confirm manual result'],['Option + Z','Delete last solve'],['Option + N','Next scramble'],['Option + P','Previous scramble'],['Option + 2','Toggle +2 on last solve'],['Option + D','Toggle DNF on last solve'],['Option + V','Clear current group (confirmation required)']];help.innerHTML='<div class="settings-head"><h2 id="shortcutsTitle">Keyboard shortcuts</h2><button type="button" class="settings-close" aria-label="Close">×</button></div><dl class="shortcut-list">'+rows.map(([key,action])=>'<div><dt><kbd>'+key+'</kbd></dt><dd>'+action+'</dd></div>').join('')+'</dl><h3 class="touch-help-title">Touch gestures</h3><dl class="shortcut-list">'+[['Swipe right','Next scramble'],['Swipe left','Delete last solve (confirmation required)'],['Two fingers down','Clear current group (confirmation required)'],['Two fingers up','Choose +2 or DNF']].map(([key,action])=>'<div><dt>'+key+'</dt><dd>'+action+'</dd></div>').join('')+'</dl><p class="shortcut-note">Option shortcuts are disabled in Competition.</p>';document.body.append(help);info.onclick=()=>help.showModal();help.querySelector('button').onclick=()=>help.close();help.addEventListener('click',e=>{if(e.target!==help)return;const r=help.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)help.close()});help.addEventListener('close',()=>info.focus());}
const settings=document.getElementById('settingsDialog');settings.addEventListener('close',()=>document.activeElement?.blur());for(const button of document.querySelectorAll('[data-open-settings]'))button.addEventListener('click',()=>{document.getElementById('settingsLanguage').value=config.language;document.getElementById('settingsInputMode').value=config.inputMode;document.getElementById('settingsPreparation').value=String(config.competitionPreparation);syncColors();settings.showModal()});document.getElementById('closeSettings').onclick=()=>settings.close();settings.addEventListener('click',e=>{if(e.target!==settings)return;const r=settings.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)settings.close()});document.getElementById('settingsLanguage').onchange=e=>setSetting('language',e.target.value);document.getElementById('settingsInputMode').onchange=e=>setSetting('inputMode',e.target.value);document.getElementById('settingsPreparation').onchange=e=>setSetting('competitionPreparation',e.target.value);document.getElementById('backgroundColor').addEventListener('input',e=>setColor(e.target.value));document.getElementById('resetBackground').onclick=()=>setColor(null);
for(const color of ['#f4f5f7','#16191c','#102c60','#194d44','#433c68','#784b54','#e7d9c3','#dce8f2']){const b=document.createElement('button');b.type='button';b.className='settings-swatch';b.style.background=color;b.dataset.color=color;b.setAttribute('aria-label',color);b.onclick=()=>setColor(color);document.getElementById('backgroundSwatches').append(b)}
const manual=document.getElementById('manualDialog'),input=document.getElementById('manualValue');input.oninput=()=>{const v=core.parseManualTime(input.value);document.getElementById('manualPreview').textContent=v==null?'—':v.toFixed(2);document.getElementById('manualSave').disabled=v==null;document.getElementById('manualError').textContent=input.value&&v==null?t('Enter 1–9 digits.'):''};document.getElementById('manualForm').addEventListener('keydown',e=>{if(e.isComposing)return;if(e.code==='Enter'||e.code==='NumpadEnter'){e.preventDefault();e.stopPropagation();document.getElementById('manualForm').requestSubmit()}});document.getElementById('manualForm').onsubmit=e=>{e.preventDefault();const seconds=core.parseManualTime(input.value);if(seconds==null){document.getElementById('manualError').textContent=t('Enter 1–9 digits.');return}manualSubmitted=true;const callbacks=manualCallbacks;manualCallbacks=null;manual.close();callbacks?.onConfirm(seconds)};const cancel=()=>manual.close();document.getElementById('closeManual').onclick=cancel;document.getElementById('cancelManual').onclick=cancel;manual.addEventListener('close',()=>{if(!manualSubmitted){const callbacks=manualCallbacks;manualCallbacks=null;callbacks?.onCancel?.()}document.activeElement?.blur()});
observer=new MutationObserver(records=>{for(const r of records){if(r.type==='characterData')translateText(r.target);else if(r.type==='attributes')translateAttributes(r.target);else for(const node of r.addedNodes)localize(node)}});applyColor();document.documentElement.lang=config.language;document.title=page==='competition'?'LZtimer · '+t('Competition'):'LZtimer';localize();observe();syncColors();
}
window.LZSettings={get:()=>({...config,colors:{...config.colors}}),isManual:()=>config.inputMode==='manual',t,locale:()=>config.language==='en'?'en-GB':config.language==='zh-Hans'?'zh-CN':'zh-TW',setSetting,setColor,applyColor,localize,openManual};
window.addEventListener('storage',e=>{if(e.key!==KEY)return;try{config=core.normalizeSettings(JSON.parse(e.newValue))}catch{return}applyColor();notify()});if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
})();
