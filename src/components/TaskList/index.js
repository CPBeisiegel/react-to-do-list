import "./styles.css";

export function TaskList(props) {
  function handleButton(taskToEdit) {
    const mappedArray = props.taskListForRender.map((currentTask) => {
      if (currentTask === taskToEdit) {
        taskToEdit.status
          ? (currentTask.status = false)
          : (currentTask.status = true);
      }
      return currentTask;
    });

    props.setTaskListForRender(mappedArray);

    console.log(props.taskListForRender);
  }

  return (
    <ul className="container">
      {props.taskListForRender.map((currentTask) => {
        return (
          <li className={currentTask.status ? "isTrue" : "isFalse"}>
            <p>{currentTask.task}</p>
            <span>{currentTask.when}</span>
            <button
              onClick={() => {
                handleButton(currentTask);
              }}
            >
              {currentTask.status ? "Desmarcar" : "Marcar com concluida"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
