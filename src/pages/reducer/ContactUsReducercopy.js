const detailsccc=[];
export default(state=detailsccc,action)=>{
  switch(action.type){
      case 'DATA_FETCH_START':
        return {
              ...state,fetching:true
              }
        default:
        return state;
  }
}