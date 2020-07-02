import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks
    },
    getters: {
        findTask(state) {
            return function(id) {
                let task = state.tasks.find(task => task.id == id)

                not_found_unless(this)

                return task
            }
        },
    },
    mutations: {
        createTask(state, newTask) {
            state.tasks.push(newTask)
        },
        updateTask(state, { id, draft }) {
            let index = state.tasks.findIndex(task => task.id == id)

            state.tasks.splice(index, 1, draft)
        },
        toggleTask(state, task) {
            task.pending = ! task.pending
        },
        deleteTask(state, id) {
            let index = state.tasks.findIndex(task => task.id == id)

            state.tasks.splice(index, 1)
        },
        deleteCompletedTasks(state) {
            state.tasks = state.tasks.filter(task => task.pending);
        }
    },
    actions: {
        createTask(context, { title, description }) {
            // AJAX
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (title == '') reject('Debes escribir un título')

                    let newTask = {
                        id: context.state.tasks.length + 1000, //FIX
                        title, description,
                        pending: true
                    }

                    context.commit('createTask', newTask)

                    resolve(newTask)
                }, 1000)
            })
        },
        updateTask(context, payload) {
            // AJAX...
            context.commit('updateTask', payload)
        },
        toggleTask(context, task) {
            context.commit('toggleTask', task)
        },
        deleteTask(context, id) {
            // AJAX ...
            context.commit('deleteTask', id)
        },
        deleteCompletedTasks(context) {
            context.commit('deleteCompletedTasks')
        }
    }
})
