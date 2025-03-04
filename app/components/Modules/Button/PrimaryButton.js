import React from 'react'

const PrimaryButton = ({ 
    text, 
    onClick, 
    className, 
    type = 'button', // default type
    disabled = false,
    children,
    ...props // spread all other props
}) => {
    return (
        <div>   
            <button 
                className={`bg-primary text-white hover:bg-primary-600 
                    disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
                onClick={onClick} 
                type={type}
                disabled={disabled}
                {...props}
            >
                {children || text}
            </button>
        </div>
    )
}

export default PrimaryButton