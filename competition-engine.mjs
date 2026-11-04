export const PREPARATION = { unlock: 120000, reminder: 240000, secondReminder: 270000, deadline: 300000 };
export const PREPARATION_UNLOCKS = [90000,120000,150000,180000];
export const hasPreparationDeadline = event => !['555','666','777','minx','555bf'].includes(event);
export function preparationAt(start, now, unlock = PREPARATION.unlock, event = '333') {
  unlock = PREPARATION_UNLOCKS.includes(unlock) ? unlock : PREPARATION.unlock;
  const elapsed = Math.max(0, now - start), deadline=hasPreparationDeadline(event)?PREPARATION.deadline:null;
  return { elapsed, unlock, deadline, locked: elapsed < unlock, remind: elapsed >= PREPARATION.reminder, remindAgain: elapsed >= PREPARATION.secondReminder, expired: deadline!==null&&elapsed>=deadline, remaining: deadline===null?null:Math.max(0,deadline-elapsed) };
}
export function inspectionAt(start, now, manual = false) {
  const elapsed = Math.max(0, now - start);
  return { elapsed, eight: elapsed >= 8000, twelve: elapsed >= 12000, penalty: manual ? '' : elapsed >= 17000 ? 'DNF' : elapsed >= 15000 ? '+2' : '' };
}
export const usesInspection = event => !['333bf','444bf','555bf','333mbf','333fm'].includes(event);
export function solveValue(s) { return s.inspectionPenalty === 'DNF' || s.judgePenalty === 'DNF' ? Infinity : s.time + (s.inspectionPenalty === '+2' ? 2 : 0) + (s.judgePenalty === '+2' ? 2 : 0); }
export function ao5(solves) {
  if (solves.length !== 5) return null;
  const sorted = solves.map(solveValue).sort((a,b) => a-b);
  return (sorted[1] + sorted[2] + sorted[3]) / 3;
}
export function formatTime(n) { return n == null ? '—' : !Number.isFinite(n) ? 'DNF' : n >= 60 ? `${Math.floor(n/60)}:${(n%60).toFixed(2).padStart(5,'0')}` : n.toFixed(2); }

export function possibleAverages(solves) {
  if (!solves.length) return { best:null, worst:null };
  const recorded=solves.slice(0,5),missing=5-recorded.length;
  return { best:ao5([...recorded,...Array.from({length:missing},()=>({time:0}))]),worst:ao5([...recorded,...Array.from({length:missing},()=>({time:0,inspectionPenalty:'DNF'}))]) };
}
