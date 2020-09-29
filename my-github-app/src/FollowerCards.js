import React from 'react'

export default function FollowerCards(props) {
    if (!props) {
        console.log('Loading...')
        return <h1>Loading...</h1>
    }
    console.log('props at follower cards', props)
    return (
        <div>
            {props.myFollowers.map(follower => (

                <div className='container' key={follower.id}>
                    <img src={follower.avatar_url} alt='' />
                    <h1>Username: {follower.login}</h1>
                    <a href={follower.html_url}>Link to Github</a>
                </div>
            ))}
        </div>
    )

}