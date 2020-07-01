<script>
import store from '../../store'
import Form from './Form'

export default {
    render(h) {
        let task = {
            id: '',
            title: '',
            description: '',
            pending: true
        }

        return h(Form, {
            props: {
                title: 'Nueva tarea',
                action: 'Crear tarea',
                task
            },
            on: {
                save: (newTask) => {
                    store.createTask(newTask)

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

