import { Button, Stack, TextField, Typography } from '@mui/material'

import { SubmitHandler, useForm } from 'react-hook-form'
import { recordData } from '../libs/storage'
import Footer from './Footer'
export default function NewRecord() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<any>({
        defaultValues: {
            at_date: '2023-10-11'
        }
    })

    const onSubmit: SubmitHandler<any> = (data) => {
        recordData('step', data)
    }
    return (
        <>
            <Stack component="form" spacing={2} onSubmit={handleSubmit(onSubmit)}>
                <Typography variant='h5' >
                    ステップ
                </Typography>
                <TextField type="date" label="登録日" {...register('at_date')} />
                <TextField type="number" label="時間" {...register('time')} required />
                <TextField type="number" label="距離" {...register('distance')} required/>
                <TextField type="number" label="カロリー" {...register('calorie')} required/>
                <Button type="submit" >Record</Button>
            </Stack>
            <Footer />
        </>
    )


}