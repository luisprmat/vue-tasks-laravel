<template>
    <div class="d-flex justify-content-around align-items-center">
        <div class="spinner-border text-primary" role="status">
            <span class="sr-only">{{ msg }}</span>
        </div>
        <h3>{{ msg }}</h3>
    </div>
</template>

<script>
export default {
    props: ['msg']
}
</script>
