import Dexie, { Table } from "dexie";

const version = 2;

export interface Step {
    id?: number
    at_time: number
    at_date: string
    time: number
    distance: number
    calorie: number

}

export enum HungryType{
    Hungry = 0,
    Meal = 1,
    Snack = 2,
}
export const HungryMap = ["お腹すいた","ご飯食べた", "間食食べた"]

export interface Hungry {
    id?: number
    at_time: number
    type: HungryType
}

export class MyRecordDexie extends Dexie {
    steps!: Table<Step>;
    hugries!: Table<Hungry>;

    constructor() {
        super('myRecord')
        this.version(version).stores({
            steps: '++id, at_time',
            hugries: '++id, at_time, type',
        })
    }

    type (recordKey:string) : Table<any> {
        if(recordKey == 'steps') {
            return this.steps;
        } else if (recordKey == 'hugries') {
            return this.hugries;
        }
        return this.steps
        
    }
}

export const db = new MyRecordDexie