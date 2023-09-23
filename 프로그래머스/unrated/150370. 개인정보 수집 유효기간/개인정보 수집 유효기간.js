function solution(today, terms, privacies) {
    var answer = [];
    const calculateDayPast = (year,month,day)=> year * 12 * 28 + month * 28 + day 
    let termsObj = {}
    let [todayYear, todayMonth, todayDay] = today.split(".")
    let newToday = calculateDayPast(+todayYear, +todayMonth, +todayDay)
    
    for(let i=0; i< terms.length; i++){
        let [kind, expiration] =  terms[i].split(" ")
        termsObj[kind] = +expiration
    }
    
    for(let j=0; j<privacies.length; j++){
        let [date, rank] = privacies[j].split(" ")
        let [year, month, day] = date.split(".")
        let before = calculateDayPast(+year, +month+termsObj[rank], +day)
        
        if(before <= newToday){
            answer.push(j+1)
        }
        
    }
    return answer;
}