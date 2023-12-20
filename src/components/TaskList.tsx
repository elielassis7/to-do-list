import { EmptyTask } from "./EmptyTask";
import { Tasks } from "./Tasks";

export function TaskList(){
  return(
    <div>
      <EmptyTask/>
      <Tasks/>
    </div>
  )
}