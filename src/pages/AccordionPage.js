
import Accordion from '../components/Accordion';



function AccordionPage () {
    
    const items = [
        {
            id: '2345',
            label:'How to use React',
            content: 'I Have no fucking clue.'
        },
        {
            id: 'lkio',
            label:'How to use Javascript',
            content: 'Press some buttons.'
        },
        {
            id: 'jk78',
            label:'How to use CSS',
            content: 'Download some shit off the internet.'
        },
    ];
    
    return(
        <div>
            <Accordion items={items}/>
        </div>

    )
};

export default AccordionPage