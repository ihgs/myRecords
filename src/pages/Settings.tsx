import {  List, ListItem, ListSubheader } from '@mui/material'
import { APP_VERSION } from '../App'
import Footer from './Footer'

export default function Settings() {
    return (
        <>
            <List>
                <ListSubheader >
                    version
                </ListSubheader>
                <ListItem>
                    {APP_VERSION}
                </ListItem>
            </List>
            <Footer />
        </>

    )
}