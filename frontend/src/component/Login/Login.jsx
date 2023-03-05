import Reac,{useState} from 'react'
import './Login.css'
import { Typography,Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const loginHandler=(e)=>{
        e.preventDefault();
    }
  return (
    <div className="login">
        <form className='loginForm' onSubmit={loginHandler}>
            <Typography variant='h3' style={{padding:'2vmax'}}>Login</Typography>
            <input type="email" placeholder='Enter your E-mail' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password"  placeholder=' Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <Link to="/forgot/password">
                <Typography variant='h6' style={{padding:"2vmax"}}>Forgot Password</Typography>
            </Link>
            <Button type='submit'>Login</Button>
            <Link to='/register'>
                <Typography id='new'>New User?</Typography>
            </Link>
        </form>
    </div>
  )
}

export default Login