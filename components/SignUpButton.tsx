"use client"
import React from 'react'

interface SignUpButtonProps {
    formAction: Function
}

const SignUpButton: React.FC<SignUpButtonProps> = ({formAction}) => {

  return (
    <button formAction={formAction()}  
    className="border border-red-700 rounded-md px-4 py-2 text-foreground mb-2">
        Sign Up
    </button>
  )
}

export default SignUpButton