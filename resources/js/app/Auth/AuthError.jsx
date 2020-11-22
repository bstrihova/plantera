import React from 'react'

function AuthError({errors}) {

    
    return (
        errors !== undefined ? (
            errors.map(error => (
                error
            ))
            ) : ''
        
    )
}

export default AuthError
