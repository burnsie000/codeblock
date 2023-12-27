"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'


const LoginButton = () => {
  const notify = () => toast('You have been signed in.')
  return (
    <>
      <Toaster />
      <button  onClick={() => {
          notify()
      }} 
      className="border-none bg-red-700 rounded-md px-4 py-2 text-foreground mb-2">
          Log In
      </button>
    </>
  )
}

export default LoginButton