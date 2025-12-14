import { configureStore} from "@reduxjs/toolkit"
import taskReducer from "../feature/taskslice";

 export const store = configureStore({
  reducer : {task : taskReducer}
})

