import React from 'react'

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='containner mt-4'>
            <div className='row p-3'>
                <div className='col-1'></div>
                <div className='col-6'>
                    <img src={imageURL} alt=''/>
                </div>
                <div className='col-4 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
                        <a href={learnMore} style={{textDecoration:"none",marginLeft:"85px"}}>Learn More</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='/media/images/googlePlayBadge.svg' alt='googlePlay'/></a>
                        <a href={appStore}><img src='/media/images/appStoreBadge.svg' alt='appStore'style={{marginLeft:"20px"}} /></a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default LeftSection;