<template>
    <div class="container">
        <h2>Tareas</h2>

        <app-task-list :tasks="tasks"></app-task-list>

        <p><a @click.prevent="deleteCompleted" href="#" class="btn btn-light">Eliminar tareas completadas</a></p>

        <app-task-form @created="createTask"></app-task-form>

        <!-- <pre class="code pre-scrollable">{{ $data }}</pre> -->

        <footer class="footer">
            <p>&copy; 2020. Luis Parrado. Derechos reservados</p>
        </footer>
    </div>
</template>

<script>
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

export default {
    components: {
        'app-task-list': TaskList,
        'app-task-form': TaskForm
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
            ],
        }
    },
    methods: {
        createTask(task) {
            this.tasks.push(task)
        },
        deleteCompleted() {
            this.tasks = this.tasks.filter(task => task.pending);
        }
    }
}
</script>
