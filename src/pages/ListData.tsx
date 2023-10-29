import { useLoaderData } from "react-router-dom";
import { listData } from "../libs/storage"
import Footer from "./Footer";

export const listDataLoader = () => {
    return listData('step');
}

export default function ListData () {
    const data = useLoaderData() as any[];
    return (
        <>
            {data.map(datum=> {
                return <div key={datum.at}>{datum.data.at_date}: {datum.data.distance}</div>
            })}
            <Footer />
        </>
    )
}