import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll',border: '5px solid pink', marginTop:'10px', height:'500px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;