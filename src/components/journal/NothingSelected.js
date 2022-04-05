import React from 'react'

export const NothingSelected = () => {
    return (
        <div className="nothing__main-content animate__animated animate__fadeInRight">
            <p>
                Select something
                <br />
                to create an entry!
            </p>

            <i className="far fa-star fa-4x mt-5"></i>

        </div>
    )
}
