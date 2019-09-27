import React from 'react'
import {Grid,TextField,Button} from '@material-ui/core'
import axios from'axios'
import Show from './Show.js'
import ShowCalorie from './ShowCalorie'
let arr=[]
export default class Inputs extends React.Component{
    constructor(props){
        super(props)
        this.state={
            caloriesIntake:"",
            caloriesBurnt:"",
            data:"",
            intakeCalorie:'',
            showList:false,
            totalCalgain:"",
            totalCalLost:"",
            Qty:""
        }
    }
    componentDidMount(){
        axios({method:'get',url:"http://localhost:3001/"})
        .then((response)=>this.setState({data:response.data.users}))
        .catch(err=>alert(err))
    }
    handleChangeFoodAte=(e)=>{
        this.setState({
            caloriesIntake:e.target.value,
            showList:false
        })
    }
    handleChangeCalBurnt=(e)=>{
        this.setState({
            caloriesBurnt:e.target.value,
            showList:false
        })
    }
    handleQty=(e)=>{
        this.setState({
            Qty:e.target.value
        })
    }
    handleCalibrate=()=>{
        let sum=0
        arr.map((ele)=>{
            let input=ele.slice(0,ele.length-16)
            sum+=Number(input)
        })
        if(sum>=0){
        this.setState({
            totalCalgain:sum,
            totalCalLost:""
        })
        }else{
            this.setState({
                totalCalgain:"",
                totalCalLost:sum
            })
        }
    }
    handleClick=()=>{
        let input
        let count=0
        this.state.data.map((ele)=>{
            if(ele.productName==this.state.caloriesIntake){
                count++
                this.setState({
                    intakeCalorie:ele.calories,
                })
                input=ele.calories
            }
        })
        if(count===0){
            alert("Invalid input")
        }else{
            if(this.state.intakeCalorie!==""){
                let left=((Number(input.slice(0,input.length-4)))*Number(this.state.Qty))-Number(this.state.caloriesBurnt)
                console.log(left)
                let print
                if(left>=0){
                    arr.push(left+"Calorie left    ")
                }else{
                        arr.push(left+"Calorie Required")
                }
            }
        }
        
       
    }
    componentDidUpdate(prevProps){
        console.log(this.state,)
    }    
    render(){
        console.log(arr)
        return(
                <Grid container>
                    <Grid item justify="center" lg={5} style={{width:'400px'}}>
                        <TextField onChange={this.handleChangeFoodAte} label="Food Ate" />
                        {this.state.data!==""?this.state.data.map((ele)=>{
                                if(ele.productName==this.state.caloriesIntake){
                                    return(
                                    <TextField onChange={this.handleQty} type='number' label={ele.measure}/>
                                    )
                                    
                                    }
                                }):null
                        }<br/><br/>
                        <TextField onChange={this.handleChangeCalBurnt} label="Calories burnt"/><br/><br/>
                        <Button onClick={this.handleClick} variant="contained" color="secondary">Record</Button>
                        <Button onClick={this.handleCalibrate} variant="contained" color="primary">Calibrate</Button>
                        <Show calories={arr} />
                    </Grid>
                    <Grid item lg={2} style={{width:'100px'}}></Grid>
                    <Grid item lg={5} style={{width:'450px'}}>
                        <ShowCalorie totCalLost={this.state.totalCalLost} totCalGain={this.state.totalCalgain}/>
                    </Grid>
                </Grid>        
        )
    }
}