<template>
    <div class="container">
        <h2>Tareas</h2>

        <ul class="list-group tasks">
            <li is="app-task" v-for="(task, index) in tasks"
            :task="task" :index="index" :key="task.id" @remove="deleteTask"></li>
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
                    description: 'Aprender Vue.js',
                    pending: true,
                },
                {
                    description: 'Suscribirse en Styde',
                    pending: true,
                },
                {
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
            this.tasks.splice(index, 1);
        },
        deleteCompleted() {
            this.tasks = this.tasks.filter(function (task) {
                return task.pending;
            });
        }
    }
}
</script>
