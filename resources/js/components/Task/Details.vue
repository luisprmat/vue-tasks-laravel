<template>
    <div v-if="task">
        <h2>{{ task.title }}</h2>

        <p>{{ task.description }}</p>

        <div class="card bg-light">
            <div class="card-body">
                <button @click="toggleTask" class="btn" :class="task.pending ? 'btn-secondary' : 'btn-primary'">
                    <app-icon img="ok"></app-icon> Completar
                </button>

                <button @click="editTask" class="btn btn-secondary">
                    <app-icon img="edit"></app-icon> Editar
                </button>

                <button @click="deleteTask" class="btn btn-secondary">
                    <app-icon img="trash"></app-icon> Eliminar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../../store'

export default {
    props: ['id'],
    computed: {
        task() {
            return store.getters.findTask(this.id)
        }
    },
    methods: {
        toggleTask() {
            store.dispatch('toggleTask', this.task)
        },
        editTask() {
            this.$router.push({
                name: 'tasks.edit',
                params: { id: this.id }
            })
        },
        deleteTask() {
            store.dispatch('deleteTask', this.id)

            this.$router.replace({ name: 'tasks' })
        }
    }
}
</script>
