import { parse } from 'date-fns'
import { db } from './db'
 

const recordData = async (recordKey: string, data: any) => {

    let at_time = new Date().getTime()
    const at_date = data['at_date']
    if(at_date){
        at_time = parse(`${at_date} 12:00:00`, 'yyyy-MM-dd HH:mm:ss', new Date()).getTime()
    }
    console.log('aa')
    await db.type(recordKey).add(
        {
            at_time,
            ...data
        }
    )
    console.log('bb')

}

const listData = async (recordKey: string) => {
    return await db.type(recordKey).reverse().toArray()
}

export {
    recordData,
    listData,
} 