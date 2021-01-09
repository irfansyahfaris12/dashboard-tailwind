import React from 'react'

const Card = ({ className, title, detail, result  }) => {
    return (
        <div className={className}>
            <h1 className="text-lg py-2">{title}</h1>
            <h1 className="text-3xl">{result}</h1>
            <p className="text-sm py-2 text-gray-200">{detail}</p>
        </div>
    )
}

export default Card

