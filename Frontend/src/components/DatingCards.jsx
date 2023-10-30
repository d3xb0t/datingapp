import { useState, useEffect } from 'react'
import DatingCard from 'react-tinder-card'
import './styles/DatingCards.css'

async function fetchUsers() {
    const query = await fetch('http://localhost:8080/api/v1/datingapp/getusers')
    const dataUsers = await query.json()
    return dataUsers
}

export const DatingCards = () => {
    const [user, setUser] = useState([])

    useEffect(function() {
        fetchUsers().then((fetchedUsers) => setUser(fetchedUsers))
    }, [])


    const swiped = (dir) => {
        console.log(`${dir}`)
    }

    const outOfFrame = (dir, name) => {
        console.log(`${name} leaves the screen on the ${dir}`)
    }

    return (
        <div className="datingCards">
            <div className="datingCards_container">
                {
                    user.map((_user) => (
                        <DatingCard className='swipe'
                                    key={_user.name}
                                    preventSwipe={['up', 'down']}
                                    onSwipe={(dir) => swiped(dir)}
                                    onCardLeftScreen={(dir) => outOfFrame(dir, _user.name)}>

                                    <div style={{backgroundImage: `url(${_user.imgUrl})`}} className="card">
                                        <h3>{_user.name}</h3>
                                    </div>
                        </DatingCard>
                    ))
                }
            </div>
        </div>
    )
}
