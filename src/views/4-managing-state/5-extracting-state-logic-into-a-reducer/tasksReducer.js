export default function tasksReducer(draft, action) {
  switch (action.type) {
    case "add": {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }

    case "change": {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }

    case "delete": {
      return draft.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
