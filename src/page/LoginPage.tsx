import { Button, TextField } from '@material-ui/core'
import React from 'react'

export default function LoginPage() {
    return (
        <div className="w-screen h-screen bg-center bg-cover" 
        style={{
            backgroundImage:`url(https://images.unsplash.com/photo-1551300262-ad07a4b84c35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)`,
            backdropFilter:`blur(20px)`
        }}
        >
            <div className="bg-white bg-blur bg-opacity-50 w-screen h-screen flex flex-col items-center">
                <div className="m-20">
                    <img src="https://images.unsplash.com/photo-1615481188054-c56ecfc752e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Logo" 
                     className="w-40 h-40 rounded-xl"/>
                    <div className="text-2xl font-bold text-center mt-10">Login</div>
                </div>
                <form className="space-y-4 ">
                    <TextField label="E-Mail" placeholder="yourname@example.com" variant="outlined"></TextField>
                    <br/>
                    <TextField label="Password" placeholder="yourpassword" variant="outlined"></TextField>
                </form>
                <button className="bg-blue-200 w-80 h-12 mt-20 rounded-2xl focus:ring-4 focus:outline-none">Login</button>
            </div>
        </div>
    )
}
