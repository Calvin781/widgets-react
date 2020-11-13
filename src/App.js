import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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
const App = () => {
    return <Search></Search>
};

export default App;