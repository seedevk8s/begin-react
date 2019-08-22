import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState('');       // 상태값 선언하면서 초기값으로 공백줌

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <input onChange={onChange} value={text}/>      
            <button>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    );
}

export default InputSample;
