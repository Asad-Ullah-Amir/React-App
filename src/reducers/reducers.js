const inState = false;
const changeNum = (state = inState,action)=>{
    switch (action.type) {
        case 'Increment': return !state;
    
        default:
            return state;
    }
}


export default changeNum;