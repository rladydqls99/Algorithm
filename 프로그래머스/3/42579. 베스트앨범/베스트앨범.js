function solution(genres, plays) {
    var answer = [];
    const genreMap = {}
    const totalMap = {}
    
    for (let i=0; i<genres.length; i++){
        let genre = genres[i]
        let play = plays[i]
        
        if(!genreMap[genre]){
            genreMap[genre] = []
            totalMap[genre] = 0
        }
        
        genreMap[genre].push({id:i, play:play})
        totalMap[genre] += play
    }
    
    const sortedGenres = Object.entries(totalMap).sort((a, b) => b[1] - a[1]).map(genre => genre[0])
    
    sortedGenres.forEach(genre => {
        genreMap[genre].sort((a, b) => b.play - a.play || a.id - b.id);
        
        answer.push(...genreMap[genre].slice(0, 2).map(song => song.id));
    });
   
    return answer;
}