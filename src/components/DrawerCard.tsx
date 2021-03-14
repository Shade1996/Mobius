import React from 'react'

const DrawerCard: React.FC = ({ children }) => {
    return (
        <div className="w-screen bg-white bg-opacity-30 bg-blur rounded-t-3xl p-10">
            {children}
        </div>
    )
}
export default DrawerCard