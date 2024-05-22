'use client'



import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react'


export default function LoginBtn() {
  return <Button variant="contained" color="error" onClick={() => { signIn() }}>로그인</Button>
} 


  

