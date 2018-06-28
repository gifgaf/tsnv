<template>
  <!-- if img.width > 1200 => fullscreen???-->
  <v-dialog v-model="dialog">
    <v-btn fab icon small @click.native="dialog = false" class="close_icon secondary">
      <v-icon color="black">close</v-icon>
    </v-btn>
    <div class="rel">
      <v-btn fab icon small class="forward-icon secondary">
        <v-icon color="black">arrow_forward</v-icon>
      </v-btn>
      <v-btn fab icon small class="back-icon secondary">
        <v-icon color="black">arrow_back</v-icon>
      </v-btn>
      <v-card-media
        src="/static/reviews/sskelett.jpg"
        height="100vh"
        @click.stop="dialog = true"
        auto
      >
      <v-btn class="social-icon primary--text">
        VK
      </v-btn>
      <v-btn class="social-icon primary--text">
        F
      </v-btn>
      </v-card-media>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: true
    }
  }
}
</script>

<style scoped>

</style>