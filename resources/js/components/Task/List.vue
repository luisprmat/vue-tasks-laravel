<template>
    <div class="row">
        <div class="col-md-6">
            <div class="d-flex justify-content-between align-items-baseline">
                <h2 :class="{'subtitle-mark': hasPendingTasks}">Tareas</h2>
                <router-link :to="{name: 'tasks.create'}">Nueva tarea</router-link>
            </div>

            <ul class="list-group tasks-list mb-3">
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
// mapState
import TaskItem from './ListItem'

export default {
    computed: {
        tasks() {
            return store.state.tasks
        },
        hasPendingTasks() {
            return this.tasks.some(task => task.pending)
        }
    },
    components: {
        'task-item': TaskItem
    },
    methods: {
        deleteCompleted() {
            store.dispatch('deleteCompletedTasks')
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
