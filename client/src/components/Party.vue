<template>
    <div class='board'>
        <div class='big event tile is-ancestor' v-if="event">
            <div class="tile photoAdress is-parent is-vertical is-3">

                <article class="is-child box">
                    <div class="title">
                        <div>
                            <form method="post">
                                <label for="inputTitle" type="button" v-on:click="editTitle()" v-show="!editTtr">{{event.eventInfo.title}}</label>
                                <input id="inputTitle" v-model="title" @blur="editTtr = false"></input>
                            </form>
                        </div>
                    </div>
                </article>

                <article class="date is-child box">
                    <h1>Date</h1>
                    <h2>{{event.eventInfo.date}}</h2>
                </article>

                <article class="is-child box">
                    <div class=" textarea description">
                        <h2>Description : </h2>
                        <div>
                            <form method="post">
                                <label for="inputMessage" type="button" @click="editDescription()" v-show="!editDscr">{{event.eventInfo.description}}</label>
                                <textarea id="inputMessage" rows="4" v-model="description" @blur="editDscr = false"></textarea>
                            </form>
                        </div>
                    </div>

                </article>

            </div>

            <div class="tile informations is-parent is-vertical is-7">

                <article class="tile textarea stuff is-child box">
                    <h2>Have it</h2>
                    <hr> {{event.eventInfo.haveIt}}
                    <br>
                </article>

                <div class="tile is-child">
                    <item-list-view :items-data="necessaries" heading="Need it" category="necessary" instructions="What do you need ?" @item-added="itemAddition($event)"></item-list-view>
                </div>

            </div>

            <div class="tile is-parent is-vertical is-2">

                <div class="participants is-child box">
                    <h1>Partycipants</h1>
                    <hr>
                    <ul>
                        <li>{{event.host.username}}</li>
                        <li>Ed</li>
                        <li>Maxence</li>
                        <li>Yacine</li>

                        <!-- <li v-for="participant in participants">{{ event.participant }}</li> -->
                    </ul>
                </div>

                <article class="adress is-child box">
                    <h1>Address</h1>
                    <hr>
                    <div v-if="place">
                        <p>{{event.place.address}}</p>
                        <p>{{event.place.zipcode}}</p>
                        <p>{{event.place.digicode}}</p><br>
                    </div>

                    <h1>Host</h1>
                    <hr>
                    <p>{{event.host.username}}
                        <br>{{event.host.phonenumber}}
                        <br>{{event.host.email}}
                    </p>
                </article>

            </div>
        </div>
        <div class='big checklist tile is-ancestor box'>
            <div class="tile is-parent is-vertical is-4">
                <item-list-view :items-data="drinks" buttonSkin="is-info" heading="Drink" category="drink" instructions="Add your drink" @item-added="itemAddition($event)"></item-list-view>
            </div>

            <div class="tile is-parent is-vertical is-4">
                <item-list-view :items-data="foods" buttonSkin="is-danger" heading="Food" category="food" instructions="Add your food" @item-added="itemAddition($event)"></item-list-view>
            </div>

            <div class="tile is-parent is-vertical is-4">
                <item-list-view :items-data="extras" buttonSkin="is-success" heading="Extra" category="extras" instructions="Add your extra" @item-added="itemAddition($event)"></item-list-view>
            </div>

        </div>

    </div>
</template>





<script>
import api from "../api";
import Item from "./Item";
import ItemList from "./ItemList"

export default {
    components: {
        ItemView: Item,
        ItemListView: ItemList
    },
    data() {
        return {
            title: null,
            description: null,
            editTtr: false,
            editDscr: false,
            displayModal: false,
            needs: [
                { needAdd: '' },
                { needAddQuantity: '' },
            ],
            // participants: null,
            place: null,
            items: [],
            host: null,
            name: null,
            event: null,
            item: {
                name: null,
                creator: "john",
            },
            drink: null
        };
    },
    methods: {
        editDescription() {
            this.editDscr = true;
        },
        editTitle() {
            this.editTtr = true;
        },
        callModalNeed() {
            this.displayModal = true;
        },
        callModalDrink() {
            this.displayModal2 = true;
        },
        callModalFood() {
            this.displayModal3 = true;
        },
        callModalExtras() {
            this.displayModal4 = true;
        },
        addItem(category) {
            api.postItem({
                name: this.item.name,
                creator: this.item.creator,
                category,
                event: this.$route.params.id
            }).then(item => this.items.push(item))
            this.displayModal2 = false;

        },
        itemAddition(item) {
            this.items.push(item)
        }

        // submitDescription() {
        //     this.edit = false;
        // }
    },
    created() {
        api.getEvent(this.$route.params.id).then((event) => {
            console.log("event", event)
            this.participants = event.participants
            this.place = event.place

            this.host = event.host

            this.event = event

        });
        api.getItemsOfEvent(this.$route.params.id).then((items) => {
            this.items = items
        });

        // api.getUser(this.$route.params.id).then((host) => {
        //     this.username = host.username
        //     this.email = user.email
        // })
    },


    computed: {
        // "drink", "food", "extras", "necessary"
        drinks() {
            return this.items.filter(item => item.category === "drink")
        },
        foods() {
            return this.items.filter(item => item.category === "food")
        },
        extras() {
            return this.items.filter(item => item.category === "extras")
        },
        necessaries() {
            return this.items.filter(item => item.category === "necessary")
        },

    }
}



</script>

<style>
.drink {
    background-color: rgba(50, 115, 220, 0.78)
}

.food {
    background-color: rgba(255, 56, 96, 0.78)
}

.extras {

    background-color: rgba(35, 209, 96, 0.78)
}
</style>

<style scoped>
.board {
    background-color: #cecece;
    padding-top: 68px;
}

.tile.is-ancestor {
    margin-top: 0;
    padding-top: 15px;
    margin-bottom: 0;
    padding-bottom: 15px;
}

.textarea {
    white-space: pre-wrap;
}

input {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}


i {
    margin-right: 5px;
}

#inputMessage {
    opacity: 0;
    border: none;
    height: 0;
}

#inputMessage:focus {
    opacity: 1;
    border: inherit;
    height: auto;
    font-size: 1rem;
    outline: none;
    border-bottom: 0.5px solid black;
}

#inputTitle {
    opacity: 0;
    border: none;
    height: 0;
    font-weight: bold;
}

#inputTitle:focus {
    opacity: 1;
    border: inherit;
    height: inherit;
    font-size: 2rem;
    outline: none;
    border-bottom: 0.5px solid black;
}

.big {
    margin: 20px;
    background-color: #cecece
}


textarea {
    width: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}



h1 {
    text-align: left
}

hr {
    margin-top: -4px;
}

h2 {
    text-align: left
}

.select {
    margin-left: 5px
}

.level {
    margin-bottom: 0;
}

p[data-v-6aebfdab] {
    font-size: 0.5rem;
}
</style>

