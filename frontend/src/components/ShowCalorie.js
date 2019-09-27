import React from 'react'
import {Grid,TextField,Card,CardContent,Typography,Button} from '@material-ui/core'
export default class ShowCalorie extends React.Component{
    render(){
        return(
        <Card>
            <CardContent>
                <Typography variant="h5">
                    Body Requires
                    <p>{Math.abs(this.props.totCalLost)} Calories       /{Math.round(this.props.totCalLost/7000)}in Kgs</p>
                </Typography>
                <Typography variant="h5">
                    Required to burn
                    <p>{Math.abs(this.props.totCalGain)} Calories       /{Math.round(this.props.totCalGain/7000)}in Kgs</p>
                </Typography>
            </CardContent>
        </Card>
        )
    }
}