import React from 'react';

function InputSample() {

    const onChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <input onChange={onChange}/>
            <button>초기화</button>
            <div>
                <b>값: </b>
                블라블라...
            </div>
        </div>
    );
}

export default InputSample;
