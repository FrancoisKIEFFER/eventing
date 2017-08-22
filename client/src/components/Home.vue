<template>
  <div class="home">
    <section class="hero is-large">
      <div class="hero-body">
        <div class="container title">
          <h1>Bienvenue sur [EVENT]-ing</h1>
          <p>the "T" is silent</p>
          <a class="button is-large is-dark" v-if="$root.user" @click="callModal2()" data-target="modal" style="bottom: -70px">
            Create an [EVENT]
          </a>
          <a class="button is-large is-success" v-else @click="callModal()" data-target="modal" style="bottom: -70px">
            Log in / Sign in
          </a>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-success is-bold">
      <div class="hero-body">
        <div class="whatIsIt container">
          <h2>Qu'est ce qu' [EVENT]-ing</h2>
          <h3>[EVENT]-ing vous aide à l'organisation de soirée. Particulièrement si vous faites une soirée :</h3><br>
          <div class="columns is-desktop">
            <div class="column">
              <i class="fa fa-hourglass" aria-hidden="true"></i><br>
              <h3>Jeux de Société</h3>
            </div>
            <div class="column">
              <i class="fa fa-magic" aria-hidden="true"></i><br>
              <h3>Jeux de rôle</h3>
            </div>
            <div class="column">
              <i class="fa fa-gamepad" aria-hidden="true"></i><br>
              <h3>Jeux vidéo</h3>
            </div>
          </div>
          <br>
          <h3>[EVENT]-ing vous permet en quelques instants de créer un événement, d’inviter vos amis<br>et d’avoir sur une seule page toutes informations nécessaires.</h3>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-info is-bold">
      <div class="hero-body">
        <div class="where container">
          <h2>C’est où?</h2>
          <h3>Lorsque vous créer l’événement, vous indiquez les informations importantes :</h3>
          <div class="columns is-desktop">
            <div class="column">
              <i class="fa fa-calendar" aria-hidden="true"></i><br>
              <h3>La date</h3>
            </div>
            <div class="column">
              <i class="fa fa-map-marker" aria-hidden="true"></i><br>
              <h3>Le lieu</h3>
            </div>
            <div class="column">
              <i class="fa fa-id-badge" aria-hidden="true"></i><br>
              <h3>Les informations utiles</h3>
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
          <h2>C’est quoi?</h2>
          <h3>Un rapide descriptif pour définir le thème de la soirée. <br><br>Vous pouvez même rajouter une image si vous êtes créatifs!<br><br> La partie « Have it » vous permet d’indiquer tout le matériel que vous avez à disposition<br> (jeux, consoles, manettes, déguisements)
          </h3>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-info is-bold">
      <div class="hero-body">
        <div class="need container">
          <h2>Y a besoin de quelque chose?</h2>
          <h3>C’est là que tout le monde participe!<br><br>Il vous manque un jeu, une manette ou une chaise?<br>Indiquez le dans le « Need it » pour que tout le monde le voit.<br><br>Si une personne en a, il a juste besoin de valider!<br>Ainsi, vous verrez en un clin d’oeil qui rapporte quoi!<br><br>Pas de pitié pour les têtes en l’air.</h3>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-success is-bold">
      <div class="hero-body">
        <div class="needMore container">
          <h2>Et sinon, on rapporte quoi d’autres?</h2>
          <h3>Trois catégories en bas de la page vous permettent de vous mettre d’accord sur :</h3>
          <div class="columns is-desktop">
            <div class="column">
              <i class="fa fa-beer" aria-hidden="true"></i><br>
              <h3>Les boissons</h3>
            </div>
            <div class="column">
              <i class="fa fa-cutlery" aria-hidden="true"></i><br>
              <h3>La nourriture</h3>
            </div>
            <div class="column">
              <i class="fa fa-star" aria-hidden="true"></i><br>
              <h3>Les extras</h3>
            </div>
          </div>
          <br><br>
          <h3> Vous pouvez voir qui rapporte quoi.<br><br><br> Fini les soirées où tout le monde rapporte des chips et personne ne rapporte de bières!
          </h3>
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
              <h3>Already Registered</h3>
              <input class="input is-large" v-model="usernameLogin" type="text" placeholder="Username"></input>
              <input class="input is-large" v-model="passwordLogin" type="password" placeholder="Password"></input>
              <button @click="login" class="button is-success is-large" style="margin-top: 1vh">Login</button>
            </div>
            <div class="column">
              <h3>Create an Account</h3>
              <input class="input is-large" v-model="username" type="text" placeholder="Username"></input>
              <input class="input is-large" v-model="password" type="password" placeholder="Password"></input>
              <input class="input is-large" v-model="email" type="text" placeholder="Email"></input>
              <input class="input is-large" v-model="address" type="text" placeholder="Address"></input>
              <input class="input is-large" v-model="zipcode" type="text" placeholder="Zipcode City"></input>
              <input class="input is-large" v-model="phonenumber" type="text" placeholder="Phonenumber"></input>
              <input class="input is-large" v-model="digicode" type="text" placeholder="Digicode"></input>
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
          <h3>Your [EVENT]</h3>
          <input class="input is-large" type="text" placeholder="Title"></input>
          <input class="input is-large" type="text" placeholder="Date"></input>
          <div class="field">
            <div class="control">
              <textarea class="textarea is-large" type="text" placeholder="Description"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea class="textarea is-large" type="text" placeholder="What do you have"></textarea>
            </div>
          </div>

        </section>
        <footer class="modal-card-foot">
          <button class="button is-success is-large">Create</button>
          <button class="button is-danger is-large" @click="displayModal2=false">Cancel</button>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
import auth from "../api"

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
    }
  },
  methods: {
    signup() {
      this.error = ''
      auth.signup({
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
      auth.login(this.usernameLogin, this.passwordLogin, this)
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
  padding-top: 68px;
}

h1 {
  font-size: 80px;
}

h2 {
  font-size: 60px;
  margin-bottom: 2vh;
}

h3 {
  font-size: 30px;
}

li {
  font-size: 25px;
  /* text-align: left; */
}

.fa {
  font-size: 80px;
  margin-top: 4vh;
  margin-bottom: 2vh;
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
</style>
