<template>
    <div class="container">
        <h1>Aprendiendo Vue</h1>

        <app-tasks></app-tasks>

        <footer class="footer">
            <p>&copy; 2020. Luis Parrado. Derechos reservados</p>
        </footer>
    </div>
</template>

<script>
import Tasks from './components/Task/Task'

export default {
    components: {
        'app-tasks': Tasks
    }
}
</script>

<style lang="scss">
    body {
        margin: 10px;
    }

    .container {
        max-width: 670px;

        h2 {
            margin-bottom: 20px;
        }

        footer {
            margin: 40px 0;
            padding-top: 20px;
            border-top: 1px solid #ccc;
            color: lightslategrey;
        }
    }
</style>
