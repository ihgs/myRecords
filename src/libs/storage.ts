import { parse } from 'date-fns'
 
const appkey = "myrecord"

const recordData = (recordKey: string, data: any) => {
    let at_time = new Date().getTime()
    const at_date = data['at_date']
    if(at_date){
        at_time = parse(`${at_date} 12:00:00`, 'yyyy-MM-dd HH:mm:ss', new Date()).getTime()
    }
    localStorage.setItem(`${appkey}.${recordKey}.items`, JSON.stringify({at_time, data}))
}

const listData = (recordKey: string) => {
    return JSON.parse(localStorage.getItem(`${appkey}.${recordKey}.items`) || "[]");
}

export {
    recordData,
    listData,
} 