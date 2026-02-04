import { createContext } from "react";
import type { TaskStateModel } from "../../models/taskStateModel";
import { initialTaskState } from "./inialTaskState";

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const intialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(intialContextValue);
