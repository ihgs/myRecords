import { Button, Stack, TextField, Typography } from '@mui/material'

import { SubmitHandler, useForm } from 'react-hook-form'
import { recordData } from '../libs/indexedDb'
import Footer from './Footer'
import { format, sub } from 'date-fns'

export default function NewRecord() {
    const {
        register,
        handleSubmit,
        reset,
        // watch,
        // formState: { errors },
    } = useForm<any>({
        defaultValues: {
            at_date: format(sub(new Date(), {hours: 9}), 'yyyy-MM-dd')
        }
    })

    const onSubmit: SubmitHandler<any> = async (data) => {
        await recordData('step', data)
        reset()
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