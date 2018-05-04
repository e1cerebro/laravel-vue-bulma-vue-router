<template>
  <div class="modal" :class="openModal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close" @click="close"> </button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
      
             <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left has-icons-right">
                <input v-model="user.name" class="input is-success" type="text" placeholder="Name" value="">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fa fa-check"></i>
                </span>
              </div>
              <p v-if="errors.name" class="help is-danger">{{errors.name[0]}}</p>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input v-model="user.email" class="input is-success" type="text" placeholder="Email" value="">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fa fa-check"></i>
                </span>
              </div>
              <p v-if="errors.email" class="help is-danger">{{errors.email[0]}}</p>
            </div>

            <div class="field">
              <label class="label">Phone</label>
              <div class="control has-icons-left has-icons-right">
                <input v-model="user.phone" class="input is-danger" type="phone" placeholder="Phone" value="">
                <span class="icon is-small is-left">
                  <i class="fa fa-phone"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p v-if="errors.phone" class="help is-danger">{{errors.phone[0]}}</p>
            </div>

      <!--  -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="save">Save changes</button>
      <button class="button" @click="close">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
export default {
  props: ["openModal"],
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: ""
      },
      users: {},
      errors: {}
    };
  },
  methods: {
    close() {
      this.$emit("closeModal");
    },
    save() {
      let vm = this;
      console.log(this.user);
      axios
        .post("/api/book", this.user)
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
          vm.errors = error.response.data.errors;
        });
    },
    getUsers() {
      axios
        .get("/api/book")
        .then(function(response) {
          this.users = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    created() {
      this.getUsers();
    }
  }
};
</script>

<style>

</style>
