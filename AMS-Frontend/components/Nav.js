import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        <div className="py-4 px-8 bg-gray-700 text-white flex justify-between">
            <div className="text-xl"><Link href="/">API MANAGEMENT SYSTEM</Link></div>
            <div className="flex items-center">
                <div className="ml-8"><Link href="/">Home</Link></div>
                <div className="ml-8"><Link href="/login">Login</Link></div>
                <div className="ml-8"><Link href="/signup">Sign Up</Link></div>
            </div>
        </div>
    )
}
