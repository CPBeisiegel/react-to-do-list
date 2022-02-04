// A minha pagina HOME vai ser um componente normal
// Normalmente as paginas chamam outros componentes


import { useState } from "react";

import { Link } from "react-router-dom";

import { TaskList } from "../../components/TaskList";
import { AddTask } from "../../components/AddTask";


export function Home(){
      // Colocamos o state da lista de task no componente pai, para que ele possa ser utilizado por ambos os filhos desse componente.
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <AddTask data={taskList} setData={setTaskList} />
      {/* O App.js não tem acesso ao state interno do componente TaskList. Maaaaas, eu posso passar o state do app para o componente TaskList */}
      {/* Podemos passar o state do App para a TaskList usando props*/}
      <Link to="/mycompletedtasks">Lista de tasks completas</Link>
      <TaskList
        taskListForRender={taskList}
        setTaskListForRender={setTaskList}
      />
    </>
  );
}