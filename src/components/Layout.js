import React from 'react'
import '../components/Layout.css'
const Layout = () => {
    return (
        <>
            <div className='head'>
                <h1>Skills</h1>
            </div>
            <div className="wrap-circles">
                <div className="circle per-95">
                    <div className="inner">95%</div>
                </div>
                <div className='title'><h1 className='t1'>HTML</h1></div>

                <div className="circle per-90">
                    <div className="inner">90%</div>
                </div>
                <div className="title"><h1 className='t2' >CSS</h1></div>

                <div className="circle per-75">
                    <div className="inner">75%</div>

                </div>
                <div className="title"><h1 className='t3'>JavaScript</h1></div>

                <div className="circle per-50">
                    <div className="inner">50%</div>

                </div>
                <div className="title"><h1 className='t4'>Node.js</h1></div>
                
                <div className="circle per-70">
                    <div className="inner">70%</div>

                </div>
                <div className="title"><h1 className='t5'>React.js</h1></div>
                

            </div>

        </>
    )
}

export default Layout