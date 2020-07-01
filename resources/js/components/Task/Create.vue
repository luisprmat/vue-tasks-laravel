<template>
    <div>
        <h2 class="subtitle">Nueva tarea:</h2>

        <form @submit.prevent="create" action="#">
            <div class="form-group">
                <label for="title">Título</label>
                <input v-model="task.title" id="title" class="form-control">
            </div>

            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea v-model="task.description" id="description" rows="6" class="form-control"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Crear tarea</button>
        </form>
    </div>
</template>

<script>
import store from '../../store'

export default {
    data() {
        return {
            task: {
                id: '',
                title: '',
                description: '',
                pending: true
            }
        }
    },
    methods: {
        create() {
            store.createTask(this.task)

            this.$router.push({
                name: 'tasks.details',
                params: {id: this.task.id}
            })
        },
    }
}
</script>

<style lang="scss">
    form > button {
        white-space: nowrap;
    }
</style>
