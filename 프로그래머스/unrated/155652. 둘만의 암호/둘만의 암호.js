function solution(s, skip, index) {
    let result = ''
    let texts ='abcdefghijklmnopqrstuvwxyz'
    
    for(i=0; i<skip.length; i++){
        texts = texts.includes(skip[i]) ? texts.replace(skip[i],'') : texts
    }
    for(j=0; j<s.length; j++){
        let idx = texts.indexOf(s[j]) + index
        while(idx >= texts.length){
            idx -= texts.length
        }
        result += texts[idx]
    }
    
   return result;
}
