import { Button, Stack, TextField, Typography } from '@mui/material'

import { SubmitHandler, useForm } from 'react-hook-form'
import { getData, updateData } from '../libs/indexedDb'
import Footer from './Footer'
import { useLoaderData } from 'react-router-dom'
import { Step } from '../libs/db'


export const dataLoader = async ({params}: {params: any}) => {
    return await getData('steps',parseInt(params.id))
}

export default function EditRecord() {
    const data = useLoaderData() as Step;
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
    } = useForm<any>({
        defaultValues: {
            at_date: data.at_date,
            time: data.time,
            distance: data.distance,
            calorie: data.calorie,
            id: data.id,
        }
    })

    const onSubmit: SubmitHandler<any> = async (data) => {
        await updateData('step', data)
    }
    return (
        <>
            <Stack component="form" spacing={2} onSubmit={handleSubmit(onSubmit)} sx={{paddingTop: "100px"}}>
                <Typography>
                    ステップ
                </Typography>
                <TextField type="date" label="日付" {...register('at_date')} />
                <TextField type="number" label="時間(分)" {...register('time')} required />
                <TextField type="number" inputProps={{step: 0.001}} label="距離(km)" {...register('distance')} required/>
                <TextField type="number" inputProps={{step: 0.1}} label="カロリー(kcal)" {...register('calorie')} required/>
                <Button type="submit" >Record</Button>
            </Stack>
            <Footer />
        </>
    )


}