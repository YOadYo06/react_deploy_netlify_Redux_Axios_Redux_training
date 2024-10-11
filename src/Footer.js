import React from 'react'
import {useStoreState} from 'easy-peasy'

const Footer = () => {
    const today = new Date();
    const postCount = useStoreState((state) => state.postCount)
    return (
        <footer className='footer'>
            <p>{postCount} Blog Posts</p>
        </footer>
    )
}

export default Footer