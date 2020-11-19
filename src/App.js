import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS libray among engineers'
    },
    {
        title: 'How do u use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
]



const App = () => {

    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header></Header>
            <Route path="/">
                <Accordion items={items}></Accordion>
            </Route>

            <Route path="/list">
                <Search></Search>
            </Route>

            <Route path="/dropdown">
                <Dropdown
                label= "select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}>

                </Dropdown>

            </Route>

            <Route path="/translate">

                <Translate>

                </Translate>
            </Route>
        </div>
    )

};



export default App;