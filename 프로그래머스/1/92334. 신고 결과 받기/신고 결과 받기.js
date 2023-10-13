function solution(id_list, report, k) {
    const reportIdSet = {}
    const reportCountSet = {}
    
    id_list.forEach((id) => {
        reportIdSet[id] = []
        reportCountSet[id] = 0
    })
    
    report.forEach((reportData) => {
        const [reporter, reported] = reportData.split(' ')
        
        if(!reportIdSet[reporter].includes(reported)){
            reportIdSet[reporter].push(reported)
            reportCountSet[reported]++
        }
    })
    
    const pauseId = Object.entries(reportCountSet)
    .filter(([id,reportCount]) => reportCount >=k).map(([id,reportCount])=>id)
    
    const answer = id_list.map((id) => {
        const reportIds = reportIdSet[id]
        let reportCount = 0
        
        reportIds.forEach((reportId) => {
            if(pauseId.includes(reportId)){
                reportCount++
            }
        })
        return reportCount
    })
    
    return answer
}