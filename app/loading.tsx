import { Skeleton } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-screen relative flex items-center justify-center flex-col'>
        <Skeleton animation='wave' variant="rectangular" width={1920} height={1080} />
        <Skeleton animation='wave' variant="rectangular" width={1920} height={1080} />
        <Skeleton animation='wave' variant="rectangular" width={1920} height={1080} />
        <Skeleton animation='wave' variant="rectangular" width={1920} height={1080} />
        <Skeleton animation='wave' variant="rectangular" width={1920} height={1080} />
    </div>
  )
}

export default Loading