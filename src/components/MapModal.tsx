import React from 'react'

export default function MapModal() {
    return (
        <div className="h-80 w-screen absolute bottom-0 bg-white flex justify-center items-center rounded-t-3xl border-gray-200 border-opacity-20" style={{borderTopWidth:20}}>
            <div className="parent w-10/12 gap-4">
            <div className="div1 text-2xl text-center bg-red-200 p-2 rounded-2xl center-y">
                <div className="inline-block align-middle">
                        00:16:53 
                    <div className="font-light text-lg">RIDE TIME</div>
                </div>
            </div>
            <div className="div2 text-2xl text-center bg-gray-100 p-2 rounded-2xl center-y">
                <div className="align-middle inline-block">
                    <div>16.4</div>
                    <div className="text-lg">AVG SPEED</div>
                </div>
            </div>
            <div className="div3 text-2xl text-center  bg-gray-100 p-2 rounded-2xl center-y">
                <div className="align-middle inline-block">
                    <div className="">4.1</div>
                    <div className="text-lg ">DISTANCE</div>
                </div>
            </div>
            <div className="div4 text-xl text-center font-semibold bg-black text-white p-2 rounded-2xl">PAUSE </div>
            <div className="div5 text-xl text-center font-semibold bg-red-600 p-2 rounded-2xl">STOP </div>
            </div>
        </div>
    )
}
