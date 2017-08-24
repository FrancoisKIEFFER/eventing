<template>
    <div>
        <article :class="['tile', category, 'is-child', 'box']">
            <div class="level is-mobile">
                <h2 class="level-left">{{ heading }}</h2>
                <a :class="['button', 'is-outlined', buttonSkin, 'is-inverted', 'level-right']" @click="callModal()" data-target="modal">
                    <i class=" fa fa-plus-circle " aria-hidden="true "></i>
                    Add
                </a>
            </div>
            <hr>
            <div :class="`${category}List` ">
                <ul>
                    <li v-for="item in itemsData ">
                        <item-view :item-data="item "></item-view>
                    </li>
                </ul>
            </div>
        </article>

        <div class="modal " :class="{ 'is-active': displayModal} ">
            <div class="modal-background "></div>
            <div class="modal-card ">
                <header :class="[ 'modal-card-head', category] ">
                    <p class="modal-card-title ">{{heading}}</p>
                    <button class="delete " aria-label="close " @click="displayModal=false "></button>
                </header>
                <section class="modal-card-body level ">
                    <input :class="['input', 'is-large', buttonSkin]" type="text " :placeholder="instructions " v-model="item.name " required></input>
                    <div class="control ">
                        <div :class="['select', 'is-large', buttonSkin] ">
                            <select class="is-focused ">
                                <option value="1 " selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                </section>
                <footer :class="['modal-card-foot', buttonSkin ]">
                    <button class="button is-success " @click="addItem() ">Add</button>
                    <button class="button is-danger " @click="displayModal=false ">Cancel</button>
                </footer>
            </div>
        </div>

    </div>
</template>


<script>
import api from "../api";
import Item from "./Item";



export default {
    props: {
        itemsData: Array,
        category: String,
        heading: String,
        instructions: String,
        buttonSkin: String,

    },
    components: {
        ItemView: Item
    },
    data() {
        return {
            displayModal: false,
            event: null,
            item: {
                name: null,
                creator: "john",
            },

        }

    },
    methods: {
        callModal() {
            this.displayModal = true;
        },
        addItem() {
            api.postItem({
                name: this.item.name,
                creator: this.item.creator,
                category: this.category,
                event: this.$route.params.id
            }).then(item => this.$emit('item-added', item))
            this.displayModal = false;

        },
    },
}
</script>


<style>

</style>