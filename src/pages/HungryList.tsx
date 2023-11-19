import { listData } from "../libs/indexedDb"
import Footer from "../components/Footer";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { format } from 'date-fns'
import { useLoaderData } from "react-router-dom";

export const listDataLoader = async () => {
    return await listData('hugries');
}

export default function HungryList() {

    const data = useLoaderData() as any[];

    return (
        <>
            <TableContainer component={Paper} sx={{ width: "100vw", maxHeight: "90vh" }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>日付</TableCell>
                            <TableCell>Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((datum) => {
                            return (
                                <TableRow hover key={datum.id}>
                                    <TableCell>{format(new Date(datum.at_time), 'yyyy/MM/dd HH:mm')}</TableCell>
                                    <TableCell>{datum.type}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>

                </Table>
            </TableContainer>
            <Footer mode="hungry" />
        </>
    )
}