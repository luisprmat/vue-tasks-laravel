import Vue from 'vue'
import tasks from './tasks'

let state = {
    tasks
}

new Vue({
    data: state
})

export default {
    state,
    findTask(id) {
        let task = this.state.tasks.find(task => task.id == id)

        not_found_unless(this)

        return task
    },
    createTask({ title, description }) {
        let newTask = {
            id: this.state.tasks.length + 1000, //FIX
            title, description,
            pending: true
        }

        this.state.tasks.push(newTask)

        return newTask
    },
    toggleTask(task) {
        task.pending = ! task.pending
    },
    updateTask(id, item) {
        let index = this.state.tasks.findIndex(task => task.id == id)

        this.state.tasks.splice(index, 1, item)
    },
    deleteTask(id) {
        let index = this.state.tasks.findIndex(task => task.id == id)

        this.state.tasks.splice(index, 1)
    },
    deleteCompletedTasks() {
        this.state.tasks = this.state.tasks.filter(task => task.pending);
    }
}
