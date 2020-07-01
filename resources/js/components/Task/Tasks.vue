<template>
    <div class="row">
        <div class="col-md-6">
            <task-list :tasks="tasks"></task-list>

            <p><a @click.prevent="deleteCompleted" href="#" class="btn btn-light">
                Eliminar tareas completadas
            </a></p>
        </div>
        <div class="col-md-6">
            <router-view></router-view>
        </div>

        <!-- <task-form @created="createTask"></task-form> -->
    </div>
</template>

<script>
import store from '../../store'
import TaskList from './List'
import CreateForm from './CreateForm'

export default {
    components: {
        'task-list': TaskList,
        'task-form': CreateForm
    },
    data() {
        return {
            new_task: '',
            tasks: store.state.tasks
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
