import Dexie, { Table } from "dexie";

const version = 1;

export interface Step {
    id?: number
    at_time: number
    at_date: string
    time: number
    distance: number
    calorie: number

}

export class MyRecordDexie extends Dexie {
    steps!: Table<Step>;
    
    constructor() {
        super('myRecord')
        this.version(version).stores({
            steps: '++id, at_time'
        })
    }

    type (recordKey:string) : Table<any> {
        if(recordKey == 'steps') {
            return this.steps;
        }
        return this.steps
        
    }
}

export const db = new MyRecordDexie