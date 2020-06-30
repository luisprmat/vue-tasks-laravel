<template>
    <div class="container">
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

<style>
    body {
        margin: 10px;
    }

    .container {
        max-width: 670px;
    }

    .container h2 {
        margin-bottom: 20px;
    }

    .code {
        background-color: lightgray;
    }

    .container footer {
        margin: 40px 0;
        padding-top: 20px;
        border-top: 1px solid #ccc;
        color: lightslategrey;
    }
</style>
