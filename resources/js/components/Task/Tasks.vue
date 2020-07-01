<template>
    <div>
        <task-list :tasks="tasks"></task-list>

        <p><a @click.prevent="deleteCompleted" href="#" class="btn btn-light">Eliminar tareas completadas</a></p>

        <task-form @created="createTask"></task-form>

        <!-- <pre class="code pre-scrollable">{{ $data }}</pre> -->
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

<style>
    .code {
        background-color: lightgray;
    }
</style>
