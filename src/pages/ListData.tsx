import { useLoaderData } from "react-router-dom";
import { listData } from "../libs/storage"
import Footer from "./Footer";
import { Typography } from "@mui/material";

export const listDataLoader = () => {
    return listData('step');
}

export default function ListData () {
    const data = useLoaderData() as any[];
    return (
        <>
            <Typography >Records</Typography>
            {data.map((datum,index)=> {
                return <div key={index}>{datum.data.at_date}: {datum.data.distance}</div>
            })}
            <Footer />
        </>
    )
}