//1- we have to declare and initialize the initial state 
const initialState={
    Todos:[]
}

//2- creating our reducer AKA our action store 

export const ToDoHandler =( state=initialState, action) =>{

   switch (action.type) {

       case "Add":
           return {
               ...state,
               Todos:[...state.Todos , action.payload]
           };

           case "Delete":
            return {
                ...state,
                Todos:[state.Todos.filter(command=>command.id!== action.payload)]
            };   
       default: return state;
          
   }

}