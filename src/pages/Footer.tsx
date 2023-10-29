import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { Add, List, Settings} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export default function Footer() {
    const navigate = useNavigate()
    const [value, setValue] = useState<string>("")

    const handleNavigationChange = (_:any, newValue:any) => {
        console.log(newValue)
        setValue(newValue)
        navigate(newValue)
    }
    return (
        <>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleNavigationChange}
                >
                    <BottomNavigationAction label="New" icon={<Add />} value="/" />
                    <BottomNavigationAction label="List" icon={<List />} value="/list" />
                    <BottomNavigationAction label="Settings" icon={<Settings />} />
                </BottomNavigation>
            </Paper>
        </>

    )
}