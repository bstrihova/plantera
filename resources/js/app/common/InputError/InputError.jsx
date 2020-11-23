import React from 'react'

function InputError({errors}) {

    
    return (
        errors !== undefined ? (
            errors.map(error => (
                error
            ))
            ) : ''
        
    )
}

export default InputError
