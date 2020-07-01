<script>
import store from '../../store'
import Form from './Form'

export default {
    props: ['id'],
    render(h) {
        if (! this.task) {
            return h('app-spinner', {
                props: {
                    msg: 'Cargando tarea ...'
                }
            })
        }

        return h(Form, {
            props: {
                title: 'Editar tarea',
                action: 'Actualizar tarea',
                task: this.task
            },
            on: {
                save: (draft) => {
                    store.updateTask(this.id, draft)

                    this.$router.push({
                        name: 'tasks.details',
                        params: { id: this.id }
                    })
                }
            }
        })
    },
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
            setTimeout(() => {
                this.task = clone(store.findTask(this.id))

                not_found_unless(this.task)
            }, 1000)
        },
    }
}
</script>
