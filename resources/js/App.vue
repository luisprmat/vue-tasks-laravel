<template>
    <div class="container">
        <h2>Tareas</h2>

        <ul class="list-group tasks">
            <app-task v-for="task in tasks"
                :task="task"
                :key="task.id"
                @remove="deleteTask"
            ></app-task>
        </ul>

        <p><a @click.prevent="deleteCompleted" href="#" class="btn btn-light">Eliminar tareas completadas</a></p>

        <form @submit.prevent="createTask" class="new-task-form" action="#">
            <input v-model="new_task" type="text" class="form-control">
            <button type="submit" class="btn btn-primary">Crear tarea</button>
        </form>

        <!-- <pre class="code pre-scrollable">{{ $data }}</pre> -->

        <footer class="footer">
            <p>&copy; 2020. Luis Parrado. Derechos reservados</p>
        </footer>
    </div>
</template>

<script>
import Task from './components/Task'

export default {
    components: {
        'app-task': Task
    },
    data() {
        return {
            new_task: '',
            tasks: [
                {
                    id: 1,
                    description: 'Aprender Vue.js',
                    pending: true,
                },
                {
                    id: 2,
                    description: 'Suscribirse en Styde',
                    pending: true,
                },
                {
                    id: 4,
                    description: 'Grabar lección de Vue',
                    pending: false,
                }
            ]
        }
    },
    methods: {
        createTask() {
            this.tasks.push({
                description: this.new_task,
                pending: true,
                editing: false
            });

            this.new_task = '';
        },
        deleteTask(index) {
            const position = this.tasks.map(el => el.id).indexOf(index)
            this.tasks.splice(position, 1)
        },
        deleteCompleted() {
            this.tasks = this.tasks.filter(task => task.pending);
        }
    }
}
</script>
