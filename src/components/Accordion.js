import React, { useState} from 'react';



const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClicked = (index) => {
        console.log("title clicked", index)
        setActiveIndex(index);
    }
    const renderedItems = items.map((item, index) => {
        const active = activeIndex === index ? 'active' : '';
        return <React.Fragment key={items.title}>
            <div className={`title ${active}`}onClick={() => onTitleClicked(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>

            <div className={`content ${active}`}>
                <p> {item.content}</p>

            </div>
        </React.Fragment>
    })
    return <div className="ui styled accordion ">{renderedItems}
   </div>
};

export default Accordion;

