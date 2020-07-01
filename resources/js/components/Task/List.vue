<template>
<div>
    <h2 :class="{'subtitle-mark': hasPendingTasks}">Tareas</h2>

    <ul class="list-group tasks-list">
        <list-item v-for="task in tasks"
            :task="task"
            :key="task.id"
            @remove="deleteTask"
        ></list-item>
    </ul>
</div>

</template>

<script>
import ListItem from './ListItem'

export default {
    components: {
        ListItem
    },
    props: ['tasks'],
    methods: {
        deleteTask(index) {
            const position = this.tasks.map(el => el.id).indexOf(index)
            this.tasks.splice(position, 1)
        },
    },
    computed: {
        hasPendingTasks() {
            return this.tasks.some(task => task.pending)
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


