import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    // Estado del componente
    const [tasks, setTasks] = useState(defaultTask);

    // Control de ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has ben modificate');
        return () => {
            console.log('Tasklist component is going to unmount...');
        };
    }, [tasks]);


    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de tarea ')
    }

    return (
        <div>
            <div>
                <h1>your Tasks:</h1>
            </div>
            {/* TODO: Aplicar un for/map para renderizar un a lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};





export default TaskListComponent;
