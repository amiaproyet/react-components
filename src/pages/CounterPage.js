import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

// This component is a good candidate for useReducer because it uses two pieaces of state 
// and one of the pieces of state depends on the old value of the state (setCount + 1)

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const DECREMENT = 'decrement'
const HANDLE_SUBMIT = 'handle_submit'

const reducer = (state, action) => {
    switch (action.type){
        case INCREMENT_COUNT:
            return{
                ...state,
                count: state.count + 1
            };
        
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            };
        
        
        case SET_VALUE_TO_ADD:
            return{
                ...state,
                valueToAdd: action.payload
            };
        
        case HANDLE_SUBMIT:
            return{
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        
        default:
            return state;
    
    }
    
    
    

    
};


function CounterPage({initialCount}) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer, 
        {
            count: initialCount,
            valueToAdd: 0
        })
    
    const increment = () => {
        // setCount(count + 1)
        dispatch({
            type: INCREMENT_COUNT
        });
    };
    const decrement = ()=>{
        // setCount(count - 1)
        dispatch({
            type: DECREMENT
        })
    }
    const handleChange =(event)=> {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value)
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
            
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        // setCount(count + valueToAdd)
        // setValueToAdd(0)
        dispatch({
            type: HANDLE_SUBMIT,
            
        })

    } 
    
    return (
        <Panel className="m-3 bg-blue-300">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex">
                <Button onClick={increment} primary>Increment</Button>
                <Button onClick={decrement} secondary>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input value={state.valueToAdd || ''} onChange={handleChange} type='number' className="p-1 m-3 bg-gray-50 border border-gray-300"></input>
                <Button secondary>Add it!</Button>
            </form>
            
        </Panel>
    )
};

export default CounterPage;