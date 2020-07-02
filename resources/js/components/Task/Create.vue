<script>
import store from '../../store'
import Form from './Form'

export default {
    render(h) {
        return h(Form, {
            props: {
                title: 'Nueva tarea',
                action: 'Crear tarea',
                task: {
                    title: '',
                    decription: ''
                }
            },
            on: {
                save: (draft) => {
                    store.dispatch('createTask', draft)
                        .then(newTask => {
                            this.$router.push({
                                name: 'tasks.details',
                                params: {id: newTask.id}
                            })
                        })
                        .catch(error => {
                            alert(error)
                        })
                }
            }
        })
    },
}
</script>

