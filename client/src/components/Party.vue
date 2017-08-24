<template>
    <div class='board'>
        <div class='big event tile is-ancestor' v-if="event">
            <div class="tile photoAdress is-parent is-vertical is-3">
                <article class="date is-child is-2 box">
                    <h1>Date</h1>
                    <h2>{{event.eventInfo.date}}</h2>
                </article>
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
            <div class="tile informations is-parent is-vertical is-7">
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
                <article class="is-child box">
                    <div class="description">
                        <h2>Description : </h2>
                        <div>
                            <form method="post">
                                <label style='white-space:pre' for="inputMessage" type="button" @click="editDescription()" v-show="!editDscr">{{event.eventInfo.description}}</label>
                                <textarea id="inputMessage" rows="4" v-model="description" @blur="editDscr = false"></textarea>
                            </form>
                        </div>
                    </div>

                </article>
                <article class="tile stuff is-child box">
                    <h2>Have it</h2>
                    <hr> {{event.eventInfo.haveIt}}
                    <br>
                    <br>

                    <div class="level is-mobile">
                        <h2 class="level-left">Need it</h2>
                        <a class="button is-outlined level-right" @click="callModalNeed()" data-target="modal">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                            Add
                        </a>
                    </div>
                    <hr>
                    <div class="needList">
                        <ul>
                            <li v-for="item in necessaries">
                                <item-view :item-data="item"></item-view>
                            </li>
                        </ul>
                    </div>
                </article>

            </div>
            <div class="tile is-parent is-2">
                <div class="tile participants is-child is-vertical box">
                    <h1>Partycipants</h1>
                    <hr>
                    <ul>
                        <li></li>
                        <li v-for="participant in participants">{{ event.participant }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='big checklist tile is-ancestor'>
            <div class="tile is-parent is-vertical is-4">
                <article class="tile drink is-child box">
                    <div class="level is-mobile">
                        <h2 class="level-left">Drink</h2>
                        <a class="button is-outlined is-info is-inverted level-right" @click="callModalDrink()" data-target="modal">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                            Add
                        </a>
                    </div>
                    <hr>
                    <div class="drinkList">
                        <ul>
                            <li v-for="item in drinks">
                                <item-view :item-data="item"></item-view>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
            <div class="tile is-parent is-vertical is-4">
                <article class="tile food is-child box">
                    <div class="level is-mobile">
                        <h2 class="level-left">Food</h2>
                        <a class="button is-outlined is-danger is-inverted level-right" @click="callModalFood()" data-target="modal">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                            Add
                        </a>
                    </div>
                    <hr>
                    <div class="foodList">
                        <ul>
                            <li v-for="item in foods">
                                <item-view :item-data="item"></item-view>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
            <div class="tile is-parent is-vertical is-4">
                <article class="tile extras is-child box">
                    <div class="level is-mobile">
                        <h2 class="level-left">Extras</h2>
                        <a class="button is-outlined is-success is-inverted level-right" @click="callModalExtras()" data-target="modal">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                            Add
                        </a>
                    </div>
                    <hr>
                    <div class="extrasList">
                        <ul>
                            <li v-for="item in extras">
                                <item-view :item-data="item"></item-view>
                            </li>
                        </ul>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                    </div>
                </article>
            </div>
        </div>

        <div class="modal" :class="{'is-active': displayModal}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">What do you need ?</p>
                    <button class="delete" aria-label="close" @click="displayModal=false"></button>
                </header>
                <section class="modal-card-body level is-mobile">
                    <input class="input is-large" type="text" placeholder="Add your need" required></input>
                    <div class="control">
                        <div class="select is-large">
                            <select class="is-focused">
                                <option value="1" selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Add</button>
                    <button class="button is-danger" @click="displayModal=false">Cancel</button>
                </footer>
            </div>
        </div>

        <div class="modal" :class="{'is-active': displayModal2}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head drink">
                    <p class="modal-card-title">Drink</p>
                    <button class="delete" aria-label="close" @click="displayModal2=false"></button>
                </header>
                <section class="modal-card-body level">
                    <input class="input is-large is-info" type="text" placeholder="Add your drink" required></input>
                    <div class="control">
                        <div class="select is-large is-info">
                            <select class="is-focused">
                                <option value="1" selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot is-info">
                    <button class="button is-success">Add</button>
                    <button class="button is-danger" @click="displayModal2=false">Cancel</button>
                </footer>
            </div>
        </div>

        <div class="modal" :class="{'is-active': displayModal3}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head food">
                    <p class="modal-card-title">Food</p>
                    <button class="delete" aria-label="close" @click="displayModal3=false"></button>
                </header>
                <section class="modal-card-body level">
                    <input class="input is-large is-danger" type="text" placeholder="Add your food" required></input>
                    <div class="control">
                        <div class="select is-large is-danger">
                            <select class="is-focused">
                                <option value="1" selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Add</button>
                    <button class="button is-danger" @click="displayModal3=false">Cancel</button>
                </footer>
            </div>
        </div>

        <div class="modal" :class="{'is-active': displayModal4}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head extras">
                    <p class="modal-card-title">Extras</p>
                    <button class="delete" aria-label="close" @click="displayModal4=false"></button>
                </header>
                <section class="modal-card-body level">
                    <input class="input is-large is-success" type="text" placeholder="Add your extra" required></input>
                    <div class="control">
                        <div class="select is-large is-success">
                            <select class="is-focused">
                                <option value="1" selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success" @click="addItem">Add</button>
                    <button class="button is-danger" @click="displayModal4=false">Cancel</button>
                </footer>
            </div>

        </div>

    </div>
</template>





<script>
import api from "../api";
import Item from "./Item"

export default {
    components: {
        ItemView: Item
    },
    data() {
        return {
            title: null,
            description: null,
            editTtr: false,
            editDscr: false,
            displayModal: false,
            displayModal2: false,
            displayModal3: false,
            displayModal4: false,
            needs: [
                { needAdd: '' },
                { needAddQuantity: '' },
            ],
            participants: null,
            place: null,
            items: [],
            host: null,
            name: null,
            event: null
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
        addItem() {
            this.name = items.name;
            this.category = items.category;

        },
        // submitDescription() {
        //     this.edit = false;
        // }
    },
    created() {
        api.getEvent(this.$route.params.id).then((event) => {
            this.participants = event.participants
            this.place = event.place

            this.host = event.host

            this.event = event

        });
        api.getItemsOfEvent("599d82b824bcf80bf8cd5ee7").then((items) => {
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

