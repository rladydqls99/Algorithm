function solution(participant, completion) {
    const participantMap = new Map();

  participant.forEach((name) => {
    participantMap.set(name, (participantMap.get(name) || 0) + 1);
  });

  completion.forEach((name) => {
    participantMap.set(name, (participantMap.get(name) || 0) - 1);
  });

  const nonCompleted = Array.from(participantMap.entries())
    .filter(([name, count]) => count > 0) 
    .map(([name]) => name);

  return nonCompleted[0];
}