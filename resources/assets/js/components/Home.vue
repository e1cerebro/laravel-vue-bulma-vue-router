<template>
  <div>
        <nav class="panel">
            <p class="panel-heading">
              Phonebook
            </p>
              <div class="panel-block">
              <button @click="openModal" class="button is-link is-outlined is-fullwidth">
                Save
              </button>
            </div>
            <div class="panel-block">
              <p class="control has-icons-left">
                <input class="input is-small" type="text" placeholder="search">
                <span class="icon is-small is-left">
                  <i class="fa fa-search"></i>
                </span>
              </p>
            </div>


            <a class="panel-block" v-for="(user,index) in users" :key="index">
              <span class="column is-9">
                {{user.name}}
              </span>
              <span class="panel-icon column is-1">
                <i class="has-text-danger fa fa-trash" aria-hidden="true"></i>
              </span>
              <span class="panel-icon column is-1">
                <i class="has-text-primary fa fa-edit" aria-hidden="true"></i>
              </span>
              <span class="panel-icon column is-1">
                <i class="has-text-success fa fa-eye" aria-hidden="true"></i>
              </span>
            </a>
          </nav>
          <app-add-modal @closeModal="addModal = !addModal" :openModal="addModal"></app-add-modal>

  </div>


</template>
<script>
import Add from "./Add.vue";
export default {
  components: {
    "app-add-modal": Add
  },
  data() {
    return {
      addModal: false,
      users: {}
    };
  },
  methods: {
    openModal() {
      this.addModal = "is-active";
    },
    getUsers() {
      let vm = this;
      axios
        .get("/api/book")
        .then(function(response) {
          vm.users = response.data.data;
          //console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  mounted() {
    this.getUsers();
  }
};
</script>
