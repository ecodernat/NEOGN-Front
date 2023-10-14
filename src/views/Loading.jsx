import React from "react";
import loadingGif from '../utils/images/AppbarIcons/Loading.gif'

const Loading = () => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-75'>
            <img src={loadingGif} alt='Loading'/>

        </div>
    )
}
export default Loading;