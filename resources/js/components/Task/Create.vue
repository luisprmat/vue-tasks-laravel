<script>
import store from '../../store'
import Form from './Form'

export default {
    render(h) {
        return h(Form, {
            props: {
                title: 'Nueva tarea',
                action: 'Crear tarea',
                task: {}
            },
            on: {
                save: (draft) => {
                    // let newTask = store.dispatch('createTask', draft)
                    store.dispatch('createTask', draft)

                    this.$router.push({
                        // name: 'tasks.details',
                        name: 'tasks',
                        // params: {id: newTask.id}
                    })
                }
            }
        })
    },
}
</script>

