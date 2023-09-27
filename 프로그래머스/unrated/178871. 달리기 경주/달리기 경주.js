function solution(players, callings) {
    const rank = {};
    players.forEach((v,i) => rank[v] = i);
    for(const winner of callings){
        let winnerI = rank[winner];
        let loserI = winnerI - 1;

        rank[winner] -= 1;
        rank[players[loserI]] +=1;

        players[winnerI] = players[loserI];
        players[loserI] = winner;
    }
    return players;
}