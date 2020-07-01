<template>
    <div class="row">
        <div class="col-md-6">
            <div class="d-flex justify-content-between align-items-baseline">
                <h2 :class="{'subtitle-mark': hasPendingTasks}">Tareas</h2>
                <router-link :to="{name: 'tasks.create'}">Nueva tarea</router-link>
            </div>

            <ul class="list-group tasks-list">
                <task-item v-for="task in tasks" :task="task" :key="task.id"></task-item>
            </ul>

            <p><a @click.prevent="deleteCompleted" href="#" class="btn btn-light">
                Eliminar tareas completadas
            </a></p>
        </div>
        <div class="col-md-6">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import store from '../../store'
import TaskItem from './ListItem'

export default {
    components: {
        'task-item': TaskItem
    },
    data() {
        return {
            new_task: '',
            tasks: store.state.tasks
        }
    },
    computed: {
        hasPendingTasks() {
            return this.tasks.some(task => task.pending)
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

<style lang="scss">
    .tasks-list {
        margin-bottom: 40px;
    }

    .subtitle-mark {
        color: #41b883;
    }
</style>
