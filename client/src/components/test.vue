<template>
    <div>
    
        <div v-if="dish && allIngredients">
            <h1> {{ dish.name }} </h1>
            <p>
                <img :src="dish.image" alt="pic cannot display" :style="stylesImg">
            </p>
            <h4>Description :</h4>
    
            <div v-if="!edit">
                <p>{{ dish.description }}</p>
                <button type="button" v-on:click="editDish()">Edit {{ dish.name }} description</button>
            </div>
    
            <div v-else>
                <form method="post">
                    <textarea rows="8" cols="80" v-model="dish.description"> </textarea>
                </form>
                <button v-on:click="submitDish()"> Submit </button>
            </div>
        </div>
        <div v-else>
            <h1>loading</h1>
        </div>
    
    </div>
</template>

<script>
import axios from "axios";
import Ingredients from "@/components/Ingredients";

export default {
    data() {
        return {
            dish: {},
            stylesImg: { height: "300px" },
            message: "",
            edit: false,
            newDesc: null,
            allIngredients: null
        };
    },
    created() {
        const myAPI = axios.create({
            baseURL: "http://localhost:3000/api/"
        });

        function getDish(dishName) {
            return myAPI.get("/dishes/" + dishName).then(response => {
                return response.data;
            });
        }
        getDish(this.$route.params.dishName).then(dish => {
            this.dish = dish;
        });

        function getIngredients() {
            return myAPI.get("/ingredients/").then(response => {
                return response.data;
            });
        }
        getIngredients().then(ingredients => {
            this.ingredients = ingredients;
        });
    },
    methods: {
        editDish() {
            this.edit = true;
        },
        submitDish() {
            this.edit = false;

            const myAPI = axios.create({
                baseURL: "http://localhost:3000/api/"
            });

            myAPI
                .put("/dishes/" + this.dish._id, {
                    description: this.dish.description
                })
                .then(response => {
                    return response.data;
                });
        }
    },
    components: {
        tagIngredients: Ingredients
    }
};
</script>

<style lang="css">

</style>