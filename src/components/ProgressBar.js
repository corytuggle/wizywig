import React from 'react';

export default function progress() {
    // let progress = document.getElementById('progress-bar')
    // progress.style.var('--width') = 99
    return (
        <div className='progbar-container'>
            <div id="progress-bar"
                className="progbar"
                style={{ '--goal': 250 }}
                data-label=""
            ></div>
        </div>
    )
}
