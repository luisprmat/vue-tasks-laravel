<template>
    <div>
        <h2 class="subtitle">{{ title }}</h2>

        <form @submit.prevent="save" action="#">
            <div class="form-group">
                <label for="title">Título</label>
                <input v-model="draft.title" id="title" class="form-control">
            </div>

            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea v-model="draft.description" id="description" rows="6" class="form-control"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">{{ action }}</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['title', 'action', 'task'],
    data() {
        return {
            draft: clone(this.task)
        }
    },
    methods: {
        save() {
            this.$emit('save', this.draft)
        }
    }
}
</script>
