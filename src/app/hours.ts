export function minuts(seconds:number){
    let minuts = Math.floor(seconds/60)
    seconds -= (minuts*60)
    let ferify = `${seconds<10?'0'+seconds:seconds}`
    let ferifym = `${minuts<10?'0'+minuts:minuts}`
    return `${ferifym}:${ferify}`
}