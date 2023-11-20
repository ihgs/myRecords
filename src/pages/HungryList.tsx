import { deleteData, listData } from "../libs/indexedDb"
import Footer from "../components/Footer";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { format } from 'date-fns'
import { useLoaderData, useRevalidator } from "react-router-dom";
import { HungryMap } from "../libs/db";
import { useState } from "react";
import { Delete } from "@mui/icons-material";

export const listDataLoader = async () => {
    return await listData('hugries');
}

const minSwipeDistance = 50 


function HungryRow({datum}:any) {
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    const [show, setShow] = useState(false)
    const revalidator = useRevalidator()

    const deleteRow = (id: number) => {
        console.log(id)
        deleteData("hugries", id)
        setShow(false)
        revalidator.revalidate()
        
    }

    const onTouchStart = (event: any) => {
        setTouchEnd(null)
        setTouchStart(event.targetTouches[0].clientX)
    }
    const onTouchMove = (event: any) => {
        setTouchEnd(event.targetTouches[0].clientX)
    }
    const onTouchEnd = (_: any) => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if(isLeftSwipe){
            setShow(true)
        }
        if(isRightSwipe){
            setShow(false)
        }

    }

    return(
        <TableRow hover 
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        >
        <TableCell>{format(new Date(datum.at_time), 'yyyy/MM/dd HH:mm')}</TableCell>
        <TableCell sx={{position: "relative"}}>{HungryMap[datum.type]} 
            {show ? 
                <div style={{display: "inline", position:"absolute", right:0, paddingRight:5}}>
                    <Delete onClick={()=>deleteRow(datum.id)}></Delete>
                </div>
                : <></>}
        </TableCell>
        
    </TableRow>  
    )
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
                                <HungryRow datum={datum} key={datum.id} />
                            )
                        })}
                    </TableBody>

                </Table>
            </TableContainer>
            <Footer mode="hungry" />
        </>
    )
}