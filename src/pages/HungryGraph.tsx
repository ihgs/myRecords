import Footer from "../components/Footer";
import { db } from "../libs/db";
import { Container, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import * as vega from "vega";
import  spec from "../vegaspec/date_summerise.json"
import { useEffect, useState } from "react";

export default function HungryGraph() {
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [month, setMonth] = useState<number>(new Date().getMonth() + 1);

    useEffect(() => {
        const load = async () => {
            const from = new Date(year, month - 1, 1,12)
            const to = new Date(year, month, 0,12)
            const data = await db.type('hugries')
                .orderBy("at_time")
                .filter(
                    (step) => {
                        return from.getTime() <= step.at_time && to.getTime() >= step.at_time
                    }
                ).toArray()
            console.log(spec)
            if(data){
                spec.data[0].values = data
                // @ts-ignore
                const view = new vega.View(vega.parse(spec), {
                    renderer: 'svg',
                    container: '#view',
                    hover: true
                })
                view.runAsync()
            }            
        }
        load()
    }, [year, month])

    const handleChangeYear = (event: SelectChangeEvent<number>) => {
        if (typeof event.target.value == "number") {
            setYear(event.target.value)
        }
    }
    const handleChangeMonth = (event: SelectChangeEvent<number>) => {
        if (typeof event.target.value == "number") {
            setMonth(event.target.value)
        }
    }

    return (
        <>
            <Container sx={{paddingTop: 2}}>
            <Select value={year} label={'年'} onChange={handleChangeYear} >
                <MenuItem value={2023}>2023年</MenuItem>
                <MenuItem value={2024}>2024年</MenuItem>
            </Select>
            <Select value={month} label={'月'} onChange={handleChangeMonth} >
                {
                    [...Array(12).keys()].map((index) => {
                        return <MenuItem value={index + 1} key={index}>{index + 1}月</MenuItem>
                    }
                    )
                }
            </Select>
            </Container>
            <div id="view" style={{ width: "100vw" }} />
            <Footer mode="hungry"/>
        </>
    )
}