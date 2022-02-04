import { useParams } from "react-router-dom";

export function TaskPage(props) {
  const params = useParams();

  return (
    <>
      <h1>{params.taskName}</h1>
    </>
  );
}
