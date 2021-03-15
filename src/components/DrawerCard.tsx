import React from 'react'

const DrawerCard: React.FC = ({ children }) => {
    return (
        <div className="w-screen bg-white bg-opacity-30 bg-blur rounded-t-3xl px-10 pb-10">
            <div className="h-10 overflow-hidden flex justify-center items-center">
                <div className="w-20"> 
                    <svg className="fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="curreColor">
                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            {children}
        </div>
    )
}
export default DrawerCard