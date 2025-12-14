const initialstate = {
  count :0
}

// create reducer function
const Reducerfunction=(state=initialstate , action)=>
{
  switch(action.type)
  {
     case "increment":
      return {
         ...state ,count: state.count + 1
      };

      case "decrement":
        return{
          ...state , count: state.count -1
        }
        default :
        return state;


  }
}

export default  Reducerfunction
