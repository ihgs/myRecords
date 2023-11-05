import { parse } from 'date-fns'
import { db } from './db'
 

const recordData = async (recordKey: string, data: any) => {
    let at_time = new Date().getTime()
    const at_date = data['at_date']
    if(at_date){
        at_time = parse(`${at_date} 12:00:00`, 'yyyy-MM-dd HH:mm:ss', new Date()).getTime()
    }
    await db.type(recordKey).add(
        {
            at_time,
            ...data
        }
    )
}

const updateData = async (recordKey: string, data: any) => {
    return await db.type(recordKey).update(data.id, data)
}

const listData = async (recordKey: string) => {
    return await db.type(recordKey).reverse().toArray()
}

const getData = async (recordKey: string, id: number) => {
    return await db.type(recordKey).get(id)
}

export {
    recordData,
    updateData,
    listData,
    getData,
} 