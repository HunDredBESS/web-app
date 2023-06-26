"use client"
import React from 'react'


export default function ErrorPage({error, reset}: any) {

  return (
    <div className='w-full text-center'>
        <div className='text-2xl text-red-700'>ErrorPage</div>
        <div className='text-1xl text-brow'>
            Error due to: {error.message}{" "}
        </div>
        <p>Handled by error.tsx in AppRouter</p>
    </div>
  )
}

// "https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs"