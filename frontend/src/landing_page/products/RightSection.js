import React from 'react'

function RightSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
        <div className='containner mt-4'>
            <div className='row p-3'>
                <div className='col-1'></div>
                <div className='col-4 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn More</a>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-6'>
                    <img src={imageURL} alt=''/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;