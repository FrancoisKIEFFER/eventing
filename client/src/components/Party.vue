<template>
    <div class='board'>
        <div class='big event tile is-ancestor box'>
            <div class="tile photoAdress is-parent is-vertical is-3">
                <article class="photo is-child box">
                    <figure class="image is-4by3">
                        <h1>Profile Picture</h1>
                        <img src="http://bulma.io/images/placeholders/640x480.png">
                    </figure>
                </article>
                <article class="adress is-child box">
                    <h1>Address</h1>
                    <hr>
                    <p>132 rue d'Assas
                        <br>75006 Paris
                        <br>Digicode: 754A
                    </p>
                    <br>
                    <h1>Host</h1>
                    <hr>
                    <p>François KIEFFER
                        <br>06 23 48 65 04
                        <br>frankie.prime@gmail.com
                    </p>
                </article>
            </div>
            <div class="tile informations is-parent is-vertical is-7">
                <article class="title is-child box">
                    <h1>Titre</h1>
                </article>
                <article class="description is-child box">
                    <h2>Description</h2>
                </article>
                <article class="tile stuff is-child box">
                    <h2>Have it</h2>
                    <hr>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <h2>Need it</h2>
                    <hr>
    
                </article>
    
            </div>
            <div class="tile is-parent is-2">
                <div class="tile participants is-child is-vertical box">
                    <h1>Participants</h1>
                    <hr>
                </div>
            </div>
        </div>
        <div class='big checklist tile is-ancestor box'>
            <div class="tile is-parent is-vertical is-4">
                <article class="tile drink is-child box">
                    <h2>Drink</h2>
                    <hr>
                </article>
            </div>
            <div class="tile is-parent is-vertical is-4">
                <article class="tile food is-child box">
                    <h2>Food</h2>
                    <hr>
                </article>
            </div>
            <div class="tile is-parent is-vertical is-4">
                <article class="tile extras is-child box">
                    <h2>Extras</h2>
                    <hr>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                </article>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'event',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style scoped>
.big {
    margin: 20px;
}

.big {
    background-color: #f1f1f1
}

h1 {
    text-align: left
}

hr {
    margin-top: -5px;
}

h2 {
    text-align: left
}

p {
    text-align: left
}

.drink {
    background-color: rgba(35, 209, 96, 0.78);
}

.food {
    background-color: rgba(255, 56, 96, 0.78)
}

.extras {
    background-color: rgba(50, 115, 220, 0.78)
}
</style>

