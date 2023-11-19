import { Button, Stack } from '@mui/material'
import Footer from '../components/Footer'
import { MouseEvent } from 'react'
import { HungryType } from '../libs/db'
import { recordData } from '../libs/indexedDb'
import { DisplayVersion } from '../components/Version'

export default function Hungry() {

    const save = (event: MouseEvent<HTMLButtonElement>) => {
        const type = event.currentTarget.dataset.type;
        recordData("hugries", { type })
    }

    return (
        <>
            <DisplayVersion />
            <Stack spacing={10} sx={{ paddingTop: "200px", width: '80vw' }}>
                <Button variant="contained" size="large" data-type={HungryType.Hungry} onClick={save}>お腹すいた</Button>
                <Button variant="contained" size="large" data-type={HungryType.Meal} onClick={save}>ご飯食べた</Button>
                <Button variant="contained" size="large" data-type={HungryType.Snack} onClick={save}>間食食べた</Button>
                
            </Stack>

            <Footer mode="hungry" />
        </>
    )


}