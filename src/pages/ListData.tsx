import { useLoaderData } from "react-router-dom";
import { listData } from "../libs/indexedDb"
import Footer from "./Footer";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export const listDataLoader = async () => {
    return await listData('step');
}

export default function ListData() {
    const data = useLoaderData() as any[];
    return (
        <>
            <Typography >Records</Typography>
            <TableContainer component={Paper}>
            <Table stickyHeader  aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>日付</TableCell>
                        <TableCell>時間(分)</TableCell>
                        <TableCell>距離(km)</TableCell>
                        <TableCell>カロリー(kcal)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((datum, index) => {
                        return (
                            <TableRow hover key={index}>
                                <TableCell>{datum.at_date}</TableCell>
                                <TableCell>{datum.time}</TableCell>
                                <TableCell>{datum.distance}</TableCell>
                                <TableCell>{datum.calorie}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>

            </Table>
            </TableContainer>
            <Footer />
        </>
    )
}