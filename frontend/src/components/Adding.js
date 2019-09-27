import React from 'react'
import {Grid, TextField, Button, Typography} from '@material-ui/core'
import axios from 'axios';
export default class Add extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productName:'',
            measure:'',
            calories:''
        }
    }
    handleChangeCal=(e)=>{
        this.setState({
            calories:e.target.value
        })
    }
    handleChangeMeasure=(e)=>{
        this.setState({
            measure:e.target.value
        })
    }
    handleChangeName=(e)=>{
        this.setState({
            productName:e.target.value
        })
    }
    handleClick=()=>{
        axios({method:'post',url:"http://localhost:3001/update",data:{
            productName:this.state.productName,
            measure:this.state.measure,
            calories:this.state.calories
        }}).then(response=>{
            alert("Successfully Added, Thanks for Adding!!")
            console.log(response)})
        .catch(err=>alert(err))
    }
    componentDidUpdate(){
        console.log(this.state,)
    }
    render(){
        return(
            <Grid container justify="center">
                <Grid item>
                    <Typography></Typography>
                    <TextField onChange={this.handleChangeName} label="product Name"/> <br/>
                    <TextField onChange={this.handleChangeMeasure} label="Measure"/> <br/>
                    <TextField onChange={this.handleChangeCal} label="Calories"/> <br/><br/>
                    <Button variant="contained" onClick={this.handleClick} color="secondary">Add</Button>
                </Grid>
            </Grid>
        )
    }
}