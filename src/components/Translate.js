import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Thai',
        value: 'th'
    }
]
const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}></input>

                </div>

            </div>
            <Dropdown
                label="Select a language"
                selected={language}
                options={options}
                onSelectedChange={setLanguage} />

            <hr>
            </hr>

            <h3 className="ui header"> Output </h3>
            <Convert text={text} language={language}></Convert>
        </div>
    )
}

export default Translate;