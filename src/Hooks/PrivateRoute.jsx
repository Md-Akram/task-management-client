import React, { useContext } from 'react'
import { AuthContext } from '../Hooks/AuthProvider'
import { Navigate } from 'react-router-dom'
import Loading from '../components/Loading'

const PrivateRoute = ({ children }) => {

    const { currentUser, loading } = useContext(AuthContext)

    if (loading) {
        return <><Loading /></>
    }

    if (currentUser) {
        return children
    }

    return (
        <Navigate to='/login' />
    )
}

export default PrivateRoute