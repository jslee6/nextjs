'use client'


import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react'


export default function LoginBtn() {
  return <Button className='button-red'variant="contained" color="error" onClick={() => { signIn() }}>JWT 로그인</Button>
} 


  

