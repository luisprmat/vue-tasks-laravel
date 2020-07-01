let tasks = [
    {
        id: 1,
        title: 'Aprender Vue.js',
        description: `
            Es un framework progresivo que nos permite construir desde pequeños
            componentes hasta una SPA (Single Page Aplication) usando componentes
            especializados como Vue-router y Vuex`,
        pending: true,
    },
    {
        id: 2,
        title: 'Suscribirse en Styde',
        description: `
            Es una plataforma de aprendizaje en linea a través de tutoriales y
            videotutoriales en español para aprender tecnologías de desarrollo web tales
            como PHP, Laravel, Vue.js, Sass, Docker, entre otras.`,
        pending: true,
    },
    {
        id: 4,
        title: 'Aprender Sass',
        description: `
            Es un preprocesador de CSS que le añade superpoderes como lo dice la documentación
            maneja variables y la sintaxis de un lengueje de programación, además que permite
            modularizar y organizar el código de manera muy eficiente.`,
        pending: false,
    }
]

export default {
    state: {
        tasks
    },
    findTask(id) {
        return this.state.tasks.find(task => task.id == id)
    },
    createTask(task) {
        task.id = this.state.tasks.length + 1000 //FIX

        this.state.tasks.push(task)
    },
    toggleTask(task) {
        task.pending = ! task.pending
    },
    deleteTask(id) {
        let index = this.findTask(id)

        this.state.tasks.splice(index, 1)
    }
}
