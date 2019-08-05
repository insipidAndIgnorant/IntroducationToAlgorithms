const Applicants = [{candidate:1},{candidate:2},{candidate:3},{candidate:4}]
function hireAssistant(n) {
    let best = 0, index;
    for (let i = 0; i< n; i++) {
        if (Applicants[i].candidate > best) {
            best = Applicants[i].candidate
            index = i;
        }
    }
    return {index, best}
}