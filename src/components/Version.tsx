import { Typography } from "@mui/material";
import { APP_VERSION } from "../App";


export function DisplayVersion(){

    return (
        <Typography color="text.secondary" sx={{position: 'fixed', right:0, paddingRight:1}}>{APP_VERSION}</Typography>
    )
}