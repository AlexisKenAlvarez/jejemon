import React, { useState } from 'react'

const App = () => {

    const [toggle, setToggle] = useState(false)
    const [page, setPage] = useState(1)

    const [toggle2, setToggle2] = useState(false)


    const handleToggle = () => {
        setToggle(curr => !curr)
    }

    const handleToggle2 = () => {
        setToggle2(curr => !curr)
    }

    const handleYes = () => {
        setPage(2)
        setTimeout(() => {
            setPage(3)
        }, 1500);
    }

    const handleOo = () => {
        setPage(4)
    }

    return (
        <section className='w-full h-screen font-pangolin flex overflow-hidden'>
            <div className='w-full h-full flex  transition-all ease-in-out duration-700' style={page === 2 ? { transform: "translateX(-100%)" } : page === 3 ? { transform: "translateX(-200%)" } : page === 4 ? {transform: "translateX(-300%)"} : {}}>
                <div className="min-w-full h-full mx-auto px-8 bg-[#f7bac5] flex items-center justify-center">
                    <div className="w-fit h-auto mx-auto">
                        <h1 className='text-5xl text-center'>Helu Mary, lab mu ba aku?</h1>
                        <div className='mt-20 flex w-full justify-between'>
                            <div className='bg-[#feebe7] text-xl w-fit px-12 py-3 rounded-xl cursor-pointer hover:bg-[#e6ade3] transition-all ease-in-out duration-300 hover:scale-[1.2]' onClick={handleYes}>
                                Yes
                            </div>

                            <div className='bg-[#feebe7] text-xl w-fit px-12 py-3 rounded-xl transition-all ease-in-out duration-300' onMouseOver={handleToggle} style={toggle ? { transform: "translateY(200%)" } : {}}>
                                No
                            </div>
                        </div>
                    </div>
                </div>

                <div className='min-w-full h-full bg-[#f7c2e0] flex items-center justify-center oveflow-hidden px-8'>
                    <div className="w-fit h-auto mx-auto">
                        <h1 className='text-5xl text-center'>Yieeeeeeeeeeeee</h1>
                    </div>
                </div>

                <div className='min-w-full h-full bg-[#7ac4c4] flex items-center justify-center oveflow-hidden px-8'>
                    <div className="w-fit h-auto mx-auto">
                        <h1 className='text-5xl text-center'>Aawayin mo pa ako?</h1>
                        <div className='mt-20 flex w-full justify-between'>
                            <div className='w-[8rem] h-13 group'>
                                <div className='bg-[#feebe7] text-xl w-full px-12 py-3 rounded-xl transition-all ease-in-out duration-300 group-hover:scale-0'>
                                    <p className='pointer-events-none'>
                                        Oo
                                    </p>
                                </div>
                            </div>


                            <div className='bg-[#feebe7] text-xl w-fit px-12 py-3 rounded-xl transition-all ease-in-out duration-300 hover:bg-[#e6ade3] cursor-pointer hover:scale-[1.2]' onClick={handleOo}>
                                ende
                            </div>
                        </div>
                    </div>
                </div>

                <div className='min-w-full h-full bg-[#fae4cd] flex items-center justify-center oveflow-hidden px-8'>
                    <div className="w-fit h-auto mx-auto">
                        <h1 className='text-5xl text-center'>Yieeeeeeeeeeeee. K</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App