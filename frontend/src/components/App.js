import React from 'react'
import {Grid, Paper,Button} from '@material-ui/core'
import {Route,Link} from 'react-router-dom'
import Inputs from './Inputs.js'
import Adding from './Adding.js'
export default class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Route path="/"exact render={()=>{
                    return(
                    <Grid container justify="center" alignContent="center" style={{height:'100vh'}}>
                        <Grid item lg={4}>
                            <Paper style={{textAlign:"center"}}>
                                <Link to="/add">
                                    <Button variant="contained" color="primary" style={{width:'250px'}}>
                                        Log In as Nutritionist
                                    </Button>
                                </Link> <br/><br/>
                                <Link to="/check">
                                    <Button variant='contained' color="secondary" style={{width:'250px'}}>
                                        Log In as User
                                    </Button>
                                </Link>
                                <br/>
                            </Paper>
                        </Grid>                
                    </Grid>
                    )
                }} />              
                <Route path="/add"  render={()=>{
                    return <Adding/>
                }}/>
                <Route path="/check" render={()=>{
                    return <Inputs/>
                }}/>
            </React.Fragment>
        )
    }
}