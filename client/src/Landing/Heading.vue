<template>
    <h1 v-if="lvl == 1">
        <slot></slot>
    </h1>
    <h2 v-else-if="lvl == 2" class="is-size-2-desktop is-size-4-touch">
        <slot>HEEEE</slot>

    </h2>
    <h3 v-else-if="lvl ==3" class="is-size-4-desktop is-size-5-touch">
        <slot></slot>
    </h3>
    <h5 v-else>
        <slot></slot>
    </h5>

    <!-- H1"is-size-3 is-size-1-desktop"        -->
</template>

<script>
export default {
    name: 'home',
    data() {
        return {}
    },
    props: ['lvl']
}
</script>