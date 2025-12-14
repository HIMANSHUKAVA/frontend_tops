import { createSlice, nanoid } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",

  initialState: {
    item: [],
  },

  reducers: {

    Add_Task: {
      reducer: (state, action) => {
        state.item.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text: text,
            completed: false
          }
        };
      }
    },

   Delete_task  : (state , action)=>{
    state.item = state.item.filter((item)=> item.id !== action.payload)
   },

   find_all : (state , action)=>{
    state.item = action.payload
   },

   Update_task :(state , action)=>{
      const index =state.item.findIndex((i)=>i.id === action.payload.id)

      if(index !== -1)
      state.item[index] = action.payload
   }



  }
});

export const { Add_Task, Delete_task  , find_all , Update_task} = taskSlice.actions;
export default taskSlice.reducer;
