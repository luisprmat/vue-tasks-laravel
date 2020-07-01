<template>
    <div class="container">
        <h1 mb-4>Aprendiendo Vue</h1>

        <ul class="nav nav-tabs mb-4">
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" exact to="/">Dashboard</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" to="/tasks">Tareas</router-link>
            </li>
        </ul>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <footer class="footer">
            <p>&copy; 2020. Luis Parrado. Derechos reservados</p>
        </footer>
    </div>
</template>

<script>
export default {
    //
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
