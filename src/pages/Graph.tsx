import Footer from "./Footer";
import { db } from "../libs/db";
import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import * as vega from "vega";
import { useEffect, useState } from "react";
import { TopLevelSpec, compile } from "vega-lite";
import { format } from 'date-fns'

export default function Graph() {
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [month, setMonth] = useState<number>(new Date().getMonth() + 1);

    useEffect(() => {
        const load = async () => {
            const from = new Date(year, month - 1, 1)
            const to = new Date(year, month, 0)
            const data = await db.type('steps')
                .orderBy("at_time")
                .filter(
                    (step) => {
                        return from.getTime() < step.at_time && to.getTime() > step.at_time
                    }
                ).toArray()
            if (data) {
                const spec: TopLevelSpec = {
                    "width": "container",
                    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                    "data": {
                        "values": data
                    },
                    "mark": "bar",
                    "encoding": {
                        "x": {
                            "timeUnit": "yearmonthdate",
                            "field": "at_date",
                            "type": "temporal",
                            "bandPosition": 0,
                            scale: {
                                "domain": [format(from, 'yyyy-MM-dd'), format(to, 'yyyy-MM-dd')]
                            }
                        },
                        "y": { "aggregate": "sum", "field": "distance" }
                    }
                }
                const vegaspec = compile(spec, {
                    config: {
                        axis: {
                            title: null,

                        }
                    }
                }).spec
                const view = new vega.View(vega.parse(vegaspec), {
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
            <Typography >Graph</Typography>
            <Select value={year} label={'年'} onChange={handleChangeYear} >
                <MenuItem value={2023}>2023年</MenuItem>
                <MenuItem value={2024}>2024年</MenuItem>
            </Select>
            <Select value={month} label={'月'} onChange={handleChangeMonth} >
                {
                    [...Array(12).keys()].map((index) => {
                        return <MenuItem value={index + 1}>{index + 1}月</MenuItem>

                    }
                    )
                }
            </Select>
            <div id="view" style={{ width: "100vw" }} />
            <Footer />
        </>
    )
}