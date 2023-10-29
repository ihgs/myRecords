import { useState } from 'react'
import './App.css'
import { BottomNavigation, BottomNavigationAction, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { Add, List, Settings} from '@mui/icons-material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { listData, recordData } from './libs/storage'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<any>({
    defaultValues: {
      at_date: '2023-10-11'
    }
  })

  const mylist:any = listData('step');
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    recordData('step', data)
  } 
  return (
    <>
      <Stack component="form" spacing={2} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='h5' >
          ステップ
        </Typography>
        <TextField type="date" label="登録日" {...register('at_date')} />
        <TextField type="number" label="時間" {...register('time')} />
        <TextField type="number" label="距離" {...register('distance')} />
        <TextField type="number" label="カロリー" {...register('calorie')} />
        <Button type="submit" >Record</Button>
      </Stack>
      <Paper sx={{position: 'fixed', bottom:0, left:0, right:0}} elevation={3} >
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction label="New" icon={<Add />} />
          <BottomNavigationAction label="List" icon={<List />} />
          <BottomNavigationAction label="Settings" icon={<Settings />} />
        </BottomNavigation>
      </Paper>
    </>
  )
}

export default App
