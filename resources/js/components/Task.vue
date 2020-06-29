<template>
    <li class="list-group-item"
        :class="{editing: editing, completed: !task.pending}">
        <a @click="toggleStatus" href="#">
            <app-icon :img="task.pending ? 'unchecked' : 'check'"></app-icon>
        </a>

        <template v-if="!editing">
            <span  class="description">{{ task.description }}</span>
            <div>
                <a @click="edit" href="#">
                    <app-icon img="edit"></app-icon>
                </a>
                <a @click="remove" href="#">
                    <app-icon img="trash"></app-icon>
                </a>
            </div>
        </template>

        <template v-else>
            <input type="text" v-model="draft">
            <div>
                <a @click="update" href="#">
                    <app-icon img="ok"></app-icon>
                </a>
                <a @click="discard" href="#">
                    <app-icon img="remove"></app-icon>
                </a>
            </div>
        </template>
    </li>
</template>

<script>
import Icon from './Icon'
import EventBus from '../event-bus'

export default {
    components: {
        'app-icon': Icon
    },
    data() {
        return {
            editing: false,
            draft: '',
        };
    },
    props: ['task', 'index'],
    created() {
        EventBus.$on('editing', function (index) {
            if (this.index != index) {
                this.discard();
            }
        }.bind(this));
    },
    methods: {
        toggleStatus() {
            this.task.pending = !this.task.pending;
        },
        edit() {
            EventBus.$emit('editing', this.index);

            this.draft = this.task.description;

            this.editing = true;
        },
        update() {
            this.task.description = this.draft;

            this.editing = false;
        },
        discard() {
            this.editing = false;
        },
        remove() {
            this.$emit('remove', this.index);
        },
    }
}
</script>
