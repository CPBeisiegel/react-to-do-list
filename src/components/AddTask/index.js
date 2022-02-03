// Esse componente trabalha com formulários
// Vamos entender como lidar com inputs do usuário no React

// Sempre que formos trabalhar com formularios, precisamos de um state!
// Esse state é responsavel por guardar as informações do formulário
import { useState } from "react";

export function AddTask(props) {
  // State de formulários na grande maioria das vezes são OBJETOS
  const [newTask, setNewTask] = useState({
    // O state que guarda as informações dos formularios normalmente é um obj
    // Cada chave desse objeto equivale a um input diferente do formulario
    task: "",
    when: "",
    status: false,
  });

  // Essa função é responsavel por atualizar o state em tempo real, com base no value do input
  function handleChange(event) {
    setNewTask({
      // To espalhando o conteudo anterior (serve principalmente quando tempo mais de um input/chave)
      ...newTask,
      [event.target.name]: [event.target.value],
    });
  }
  // Essa função (handleChange), escrita dessa forma, é meio que universal. Vai servir pra qualquer input, porque ela pega o name deles dinamicamente

  function handleSubmit(event) {
    event.preventDefault();
    props.setData([...props.data, newTask]);
  }

  return (
    <>
      {/* A tag form possui esse atributo "onSubmit", que recebe uma função que será invocada quando o formulário for submetido */}
      {/* Para submeter o formulario normalmente temos um button com o type="submit" */}
      <form onSubmit={handleSubmit}>
        {/*O atributo "name" do meu input, precisa ser uma referencia de onde guardar esse valor. Ou seja, apenas o nome da chave do seu objeto/state  */}
        {/* O value do input faz referencia ao valor que será inputado ali quando o usuário digitar ou alterar o valor. Então, preciso dizer em que variavel eu irei guardar isso */}
        {/* No atributo "onChange", vou passar uma função que vai atualizar o meu state conforme o usuário altera o valor do input, sem ele, a gente não consegue digitar nada*/}
        <input
          placeholder="Task"
          name="task"
          value={newTask.task}
          onChange={handleChange}
        />
        <input
          placeholder="When"
          name="when"
          value={newTask.when}
          onChange={handleChange}
        />
        {/* Quando a gente trabalha com formularios, precisamos de um botão do tipo submit, para submeter esse formulário */}
        <button type="submit">Adicionar</button>
      </form>
    </>
  );
}
