import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState } from "react";



function Accordion ({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1)    
    
// use this event handler when you need to define it outside of a mapping function
// and need to call it inside of the function
    const handleClick = (index) => {
        if (expandedIndex === index){
            setExpandedIndex(-1)
        }else{
            setExpandedIndex(index)
        }
    }
    
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>

        return(
            <div key={item.id}>
                <div  className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() =>handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })
    
    
    return(
        <div className="border-x border-t rounded max-w-sm">{renderedItems}</div>
    )
};

export default Accordion;