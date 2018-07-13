<template>
    <v-dialog v-model="dialog"  fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-btn icon slot="activator" class="white--text">
        <v-icon>search</v-icon>
      </v-btn>
      <v-card class="search_bg">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon class="secondary" @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-container grid-list-lg>
          <v-text-field
            width=90%
            placeholder="Поиск"
            clearable
            class="mt-5"
            solo
            single-line
            key="search"
            ref="search"
            >
          </v-text-field>
        </v-container>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>

<style scoped>
.search_bg{
  background-color: #eff0f4;}
</style>