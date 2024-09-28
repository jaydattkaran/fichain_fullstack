import React from 'react'
import "./Featured.scss"

const Featured = () => {
    return (
        <div className='featured'>
            <div className='container'>
                <div class="blob"></div>
                <div className='left'>
                    <h1>Pay in <i>Crypto,</i>Native Token Staking</h1>
                    {/* <h1>Native Token Staking</h1> */}
                    <p>NFT Resumes No single point of failure</p>
                    {/* <div className='search'>
                        <div className='searchInput'>
                            <img src='./img/search.png' alt='' />
                            <input type='text' placeholder='Try "building mobile app"' />
                        </div>
                        <button>Search</button>
                    </div> */}
                    <div className='popular'>
                        <button>Sign up CTA</button>
                    </div>
                </div>
                <div className='right'>
                    {/* <img src='./img/man.png' /> */}
                </div>
            </div>
        </div>
    )
}

export default Featured