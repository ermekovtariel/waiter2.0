const initialStae={
     category: 0, 
     sortBy : 'popular'
}

const filters=(state = initialStae, action)=>{
     if (action.type==='SET_SORT_BY'){
         return{
             ...state,
             sortBy:    action.paylod,
         }
     } 
     if (action.type==='SET_CATEGORY'){
         return{
             ...state,
             category:    action.paylod,
         }
     }
     return state
}
export default filters 
