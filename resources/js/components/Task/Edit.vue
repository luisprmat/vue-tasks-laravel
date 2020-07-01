<template>
    <div v-if="task">
        <h2 class="subtitle">Editar tarea:</h2>

        <form @submit.prevent="update" action="#">
            <div class="form-group">
                <label for="title">Título</label>
                <input v-model="task.title" id="title" class="form-control">
            </div>

            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea v-model="task.description" id="description" rows="6" class="form-control"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Actualizar tarea</button>
            <button class="btn btn-outline-secondary" @click="$router.push({ name: 'tasks' })">Cancelar</button>
        </form>
    </div>
</template>

<script>
import store from '../../store'

export default {
    props: ['id'],
    data() {
        return {
            task: null
        }
    },
    created() {
        this.findTask()
    },
    watch: {
        'id': 'findTask'
    },
    methods: {
        findTask() {
            this.task = clone(store.findTask(this.id))

            not_found_unless(this.task)
        },
        update() {
            store.updateTask(this.id, this.task)

            this.$router.push({
                name: 'tasks.details',
                params: { id: this.id }
            })
        }
    }
}
</script>

<style>

</style>
