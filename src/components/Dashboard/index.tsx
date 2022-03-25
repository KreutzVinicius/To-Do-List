import { useEffect, useState } from "react";
import { Container } from "./styles";


interface task {
    id: number;
    name: string;
    deadline: string;


}
export function Dashboard() {

    var numTasks = localStorage.getItem("numTasks");

    var num: number = 0;
    if (numTasks != null) {
        num = JSON.parse(numTasks);
    }

    var tasks: string[] = [''];
    for (let i = 0; i <= num; i++) {
        var task = localStorage.getItem(JSON.stringify(i))
        if (task) {
            tasks.push(task);
        }

    }



    function OnClickRemoveTask(task: number) {
        localStorage.removeItem(JSON.stringify(task))
    }

    // console.log(tasks);



    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Deadline</th>
                        <th>Done</th>
                    </tr>
                </thead>

                <tbody>

                    {/* {tasks.map(task => (
                             <tr key={task.id}>
                                <td>{task.name}</td>
                                <td>{task.deadline}</td>
                                <td> <input type="checkbox"
                                    onChange={OnClickRemoveTask(task.id)} /> </td>
                            </tr> 
                    ))} */}

                    <tr >
                        <td>task name</td>
                        <td>task deadline</td>
                        <td> <input type="checkbox" /> </td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}