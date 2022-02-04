



export function MyCompletedTask(props){
    return (
        <div>
            {props.task.filter((currentTask) => {
            return currentTask.status
            })
            .map((currentCompletedTask) => {
                return <p>{currentCompletedTask.name}</p>
            })
            }
        </div>
      
    )

}