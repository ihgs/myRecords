import { BottomNavigation, BottomNavigationAction, Divider, Paper } from '@mui/material'
import { Add, List, LocalDining, Timeline} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Footer({mode="hungry"}:{mode: "step" | "hungry"}) {
    const navigate = useNavigate()
    const [value, setValue] = useState<string>("")

    const handleNavigationChange = (_:any, newValue:any) => {
        setValue(newValue)
        navigate(newValue)
    }

    const renderAction = ()=>{
       if(mode==="hungry"){
            return [
                <BottomNavigationAction label="Hungry" icon={<LocalDining />} value="/" />,
                <BottomNavigationAction label="List" icon={<List />} value="/hungry/list" />,
                <BottomNavigationAction label="Graph" icon={<Timeline />} value="/hungry/graph" />,
                <Divider orientation="vertical"  />,
                <BottomNavigationAction label="Steps" icon={<Add />} value="/new" />,
                
            ]
        }else {
            return [
                <BottomNavigationAction label="Steps" icon={<Add />} value="/new" />,
                <BottomNavigationAction label="List" icon={<List />} value="/list" />,
                <BottomNavigationAction label="Graph" icon={<Timeline />} value="/graph" />,
                <Divider orientation="vertical"  />,
                <BottomNavigationAction label="Hungry" icon={<LocalDining />} value="/" />,
            ]
        }
    }
    return (
        <>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleNavigationChange}
                    sx={{marginBottom:2}}
                >
                    {renderAction()}
                    
                </BottomNavigation>
            </Paper>
        </>

    )
}