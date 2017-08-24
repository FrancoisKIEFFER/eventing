<template>
  <div class="home">
    <section class="hero is-large">
      <div class="hero-body">
        <div class="container title">
          <Heading lvl="1">Bienvenue sur [EVENT]-ing</Heading>
          <p style="padding-bottom: 70px">
            <em> "T" is silent</em>
          </p>
          <a class="button is-large is-dark" v-if="$root.user" @click="callModal2()" data-target="modal">
            Create an [EVENT]
          </a>
          <a class="button is-large is-success" v-else @click="callModal()" data-target="modal">
            Log in / Sign in
          </a>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-success is-bold">
      <div class="hero-body">
        <div class="whatIsIt container">
          <Heading lvl="2">Qu'est ce qu' [EVENT]-ing</Heading><br>
          <Heading lvl="3">[EVENT]-ing vous aide à l'organisation de soirée. Particulièrement si vous faites une soirée :</Heading><br>
          <div class="columns is-desktop">
            <div class="column">
              <i class="fa fa-hourglass fa-lg" aria-hidden="true"></i><br>
              <Heading lvl="3">Jeux de Société</Heading>
            </div>
            <div class="column">
              <i class="fa fa-magic fa-lg" aria-hidden="true"></i><br>
              <Heading lvl="3">Jeux de rôle</Heading>
            </div>
            <div class="column">
              <i class="fa fa-gamepad fa-lg" aria-hidden="true"></i><br>
              <Heading lvl="3">Jeux vidéo</Heading>
            </div>
          </div>
          <br>
          <Heading lvl="3">[EVENT]-ing vous permet en quelques instants de créer un événement, d’inviter vos amis<br>et d’avoir sur une seule page toutes informations nécessaires.</Heading>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-info is-bold">
      <div class="hero-body">
        <div class="where container">
          <Heading lvl="2">C’est où?</Heading><br>
          <Heading lvl="3">Lorsque vous créer l’événement, vous indiquez les informations importantes :</Heading><br>
          <div class="columns is-desktop">
            <div class="column">
              <i class="fa fa-calendar fa-lg" aria-hidden="true"></i><br>
              <Heading lvl="3">La date</Heading>
            </div>
            <div class="column">
              <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i><br>
              <Heading lvl="3">Le lieu</Heading>
            </div>
            <div class="column">
              <i class="fa fa-id-badge fa-lg" aria-hidden="true"></i><br>
              <Heading lvl="3">Les informations utiles</Heading>
              <ul>
                <li>Digicode</li>
                <li>Numéro de téléphone</li>
                <li>Adresse mail</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-success is-bold">
      <div class="hero-body">
        <div class="what container">
          <Heading lvl="2">C’est quoi?</Heading><br>
          <Heading lvl="3">Un rapide descriptif pour définir le thème de la soirée. <br><br>Vous pouvez même rajouter une image si vous êtes créatifs!<br><br> La partie « Have it » vous permet d’indiquer tout le matériel que vous avez à disposition<br> (jeux, consoles, manettes, déguisements)
          </Heading>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-info is-bold">
      <div class="hero-body">
        <div class="need container">
          <Heading lvl="2">Y a besoin de quelque chose?</Heading><br>
          <Heading lvl="3">C’est là que tout le monde participe!<br><br>Il vous manque un jeu, une manette ou une chaise?<br>Indiquez le dans le « Need it » pour que tout le monde le voit.<br><br>Si une personne en a, il a juste besoin de valider!<br>Ainsi, vous verrez en un clin d’oeil qui rapporte quoi!<br><br>Pas de pitié pour les têtes en l’air.</Heading>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-success is-bold">
      <div class="hero-body">
        <div class="needMore container">
          <Heading lvl="2">Et sinon, on rapporte quoi d’autres?</Heading><br>
          <Heading lvl="3">Trois catégories en bas de la page vous permettent de vous mettre d’accord sur :</Heading><br>
          <div class="columns is-desktop">
            <div class="column">
              <i class="fa fa-beer fa-2x" aria-hidden="true"></i><br>
              <Heading lvl="3">Les boissons</Heading>
            </div>
            <div class="column">
              <i class="fa fa-cutlery fa-2x" aria-hidden="true"></i><br>
              <Heading lvl="3">La nourriture</Heading>
            </div>
            <div class="column">
              <i class="fa fa-star fa-2x" aria-hidden="true"></i><br>
              <Heading lvl="3">Les extras</Heading>
            </div>
          </div>
          <br><br>
          <Heading lvl="3"> Vous pouvez voir qui rapporte quoi.<br><br><br> Fini les soirées où tout le monde rapporte des chips et personne ne rapporte de bières!
          </Heading>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>[EVENT]-ing</strong> by FranKIE</a>. The source code is licensed
          </p>
        </div>
      </div>
    </footer>

    <div class="modal" :class="{'is-active': displayModal}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Login / Sign In</p>
          <button class="delete" aria-label="close" @click="displayModal=false"></button>
        </header>
        <section class="modal-card-body">
          <article v-if="error" class="message is-danger">
            <div class="message-body">{{ error }}</div>
          </article>
          <div class="columns is-desktop">
            <div class="column">
              <Heading lvl="3">Already Registered</Heading>
              <input class="input is-large" v-model="usernameLogin" type="text" placeholder="Username"></input>
              <input @keyup.enter="login" class="input is-large" v-model="passwordLogin" type="password" placeholder="Password"></input>
              <button @click="login" class="button is-success is-large" style="margin-top: 1vh">Login</button>
            </div>
            <div class="column">
              <Heading lvl="3">Create an Account</Heading>
              <input class="input is-large" v-model="username" type="text" placeholder="Username"></input>
              <input class="input is-large" v-model="password" type="password" placeholder="Password"></input>
              <input class="input is-large" v-model="email" type="text" placeholder="Email"></input>
              <input class="input is-large" v-model="address" type="text" placeholder="Address"></input>
              <input class="input is-large" v-model="zipcode" type="text" placeholder="Zipcode City"></input>
              <input class="input is-large" v-model="phonenumber" type="text" placeholder="Phonenumber"></input>
              <input @keyup.enter="signup" class="input is-large" v-model="digicode" type="text" placeholder="Digicode"></input>
              <button @click="signup" class="button is-success is-large" style="margin-top: 1vh">Create</button>
            </div>
          </div>

        </section>
        <footer class="modal-card-foot">
          <button class="button is-danger is-large" @click="displayModal=false">Cancel</button>
        </footer>
      </div>
    </div>

    <div class="modal" :class="{'is-active': displayModal2}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Describe your [EVENT]</p>
          <button class="delete" aria-label="close" @click="displayModal2=false"></button>
        </header>
        <section class="modal-card-body">
          <Heading lvl="3">Your [EVENT]</Heading>
          <input class="input is-large" type="text" v-model="title" placeholder="Title"></input>
          <input class="input is-large" type="text" v-model="date" placeholder="Date"></input>
          <div class="field">
            <div class="control">
              <textarea class="textarea is-large" type="text" v-model="description" placeholder="Description"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea class="textarea is-large" type="text" v-model="haveIt" placeholder="What do you have"></textarea>
            </div>
          </div>

        </section>
        <footer class="modal-card-foot">
          <button class="button is-success is-large" @click="createEvent">Create</button>
          <button class="button is-danger is-large" @click="displayModal2=false">Cancel</button>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
import api from "../api";

import Heading from '@/Landing/Heading'

export default {
  name: 'home',
  data() {
    return {
      usernameLogin: '',
      passwordLogin: '',
      error: '',
      email: '',
      password: '',
      username: '',
      address: '',
      zipcode: '',
      phonenumber: '',
      digicode: '',
      displayModal: false,
      displayModal2: false,
      title: '',
      date: '',
      description: '',
      haveIt: '',
    }
  },
  methods: {
    signup() {
      this.error = ''
      api.signup({
        email: this.email,
        password: this.password,
        username: this.username,
        address: this.address,
        zipcode: this.zipcode,
        phonenumber: this.phonenumber,
        digicode: this.digicode
      }).then(response => {
        this.displayModal = false
      }).catch(err => {
        this.error = err.response.data.message
      })
    },
    login() {
      api.login(this.usernameLogin, this.passwordLogin, this)
        .then(response => {
          this.displayModal = false
        })
        .catch(err => {
          console.error(err);
          this.error = err.response.data
        })
    },
    callModal() {
      this.username = '',
        this.usernameLogin = '',
        this.passwordLogin = '',
        this.password = '',
        this.email = '',
        this.address = '',
        this.zipcode = '',
        this.phonenumber = '',
        this.digicode = '',
        this.error = '',
        this.displayModal = true;
    },
    callModal2() {
      this.displayModal2 = true;
    },
    createEvent() {
      // console.log('DEBUG this.$root.user', this.$root.user);
      api.postEvent({
        title: this.title,
        date: this.date,
        description: this.description,
        haveIt: this.haveIt,
        token: this.$root.user.token
      })
        .then(event => {
          this.$router.push(`/events/${event._id}`)
        })
    }
  },

  components: {
    Heading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
  padding-top: 68px;
}

.input {
  margin-top: 1vh;
}

.textarea {
  margin-top: 1vh;
}

.digicode {
  margin-bottom: 2vh;
}

p {
  font-size: 18px;
}
</style>
