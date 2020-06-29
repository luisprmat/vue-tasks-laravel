<template>
    <ul class="list-group tasks">
        <app-task v-for="task in tasks"
            :task="task"
            :key="task.id"
            @remove="deleteTask"
        ></app-task>
    </ul>
</template>

<script>
import Task from './Task'

export default {
    components: {
        'app-task': Task
    },
    props: ['tasks'],
    methods: {
        deleteTask(index) {
            const position = this.tasks.map(el => el.id).indexOf(index)
            this.tasks.splice(position, 1)
        },
    }
}
</script>

<style>

</style>
