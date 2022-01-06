
//beautify
import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
//json formatter
const Signup=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}

    const btnstyle={margin:'8px 0'}
        return (
      
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Sign Up</h2>

                    </Grid>
                    <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <br/>
                <br/>
              
               <TextField label='Email' placeholder='Enter Email' type='email' fullWidth required/>
               <br/>
               <br/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
               
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign up</Button>
            
                <Typography > I have already an acount ?
                     <Link href="/" >
                        Login
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}


export default Signup
