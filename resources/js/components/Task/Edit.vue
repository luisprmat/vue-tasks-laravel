<script>
import store from '../../store'
import Form from './Form'

export default {
    props: ['id'],
    computed: {
        task() {
            return store.getters.findTask(this.id)
        }
    },
    render(h) {
        // if (! this.task) {
        //     return h('app-spinner', {
        //         props: {
        //             msg: 'Cargando tarea ...'
        //         }
        //     })
        // }

        return h(Form, {
            props: {
                title: 'Editar tarea',
                action: 'Actualizar tarea',
                task: this.task
            },
            on: {
                save: (draft) => {
                    store.dispatch('updateTask', { id: this.id, draft })

                    this.$router.push({
                        name: 'tasks.details',
                        params: { id: this.id }
                    })
                }
            }
        })
    },
    // methods: {
    //     findTask() {
    //         setTimeout(() => {
    //             this.task = clone(store.findTask(this.id))

    //             not_found_unless(this.task)
    //         }, 1000)
    //     },
    // }
}
</script>
