'use client'

// import { signIn } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import Button from '@mui/material/Button';

export function LogOutBtn(){
    return (
      <Button variant="contained" color="error" onClick={()=>{ signOut() }}>로그아웃</Button>
    )
  } 






    