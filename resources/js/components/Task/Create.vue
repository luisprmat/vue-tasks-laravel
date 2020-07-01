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
                    let newTask = store.createTask(draft)

                    this.$router.push({
                        name: 'tasks.details',
                        params: {id: newTask.id}
                    })
                }
            }
        })
    },
}
</script>

