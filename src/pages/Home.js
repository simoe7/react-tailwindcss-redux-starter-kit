import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sayHello } from 'redux/actions/helloActions'

function Home() {
    const dispatch = useDispatch()
    const {message,loading} = useSelector(state => state.hello)
    useEffect(() => {
        dispatch(sayHello("hello test"))
    }, [dispatch])
    return (
        <div>
            <h1>
                Home Page
            </h1>
            <div>
                {loading? 'loading': message }
            </div>
        </div>
    )
}

export default Home
