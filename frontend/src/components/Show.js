import React from 'react'
import {Paper,Grid,Table,TableBody,TableCell,TableFooter,TableHead,TableRow,TablePagination} from '@material-ui/core'
let i=0
export default class Show extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let rows=this.props.calories
        return(
        <React.Fragment>
            <Paper>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell align="right">Calories&nbsp;(Required/Left)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                    <TableRow key={i++}>
                    <TableCell component="th" scope="row">
                        {row}
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </Paper>            
        </React.Fragment>
        )
        
    }
}