<template>
    <div>
        <p>{{itemData.name}}
            <!-- <i>&nbsp;asked by {{itemData.creator}}</i> -->
            <!-- <b :class="{'is-active': backerButton}">&nbsp;brought by {{itemData.backer}}</b> -->
            <!-- <a @click="bringIt()" class="button is-small is-light">I bring it!</a> -->
        </p>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: {
        itemData: Object
    },
    data() {
        return {
            backerButton: false,
        }
    },
    methods: {
        bringIt() {
            this.backerButton = true;
        }
    }
}
</script>

<style scoped>
p {
    font-size: 1.5rem;
}

@media only screen and (max-width: 768px) {

    p {
        font-size: 0.7em;
    }
    .button {
        font-size: 7px;
    }
}
</style>