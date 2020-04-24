const details=[];
export default(state=details,action)=>{
  switch(action.type){
      case 'DATA_FETCH_START':
        return {
              ...state,fetching:true
              }
        case 'DATA_FETCH':
          return {
                  ...state,studentdetails:action.payload,
                  fetching:false
              }

        default:
        return state;
  }
}