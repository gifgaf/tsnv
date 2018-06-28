<template>
  <!-- if img.width > 1200 => fullscreen???-->
  <v-dialog v-model="pic_dialog" transition="dialog-bottom-transition" content-class="noshadow text-xs-center" class="text-xs-center">
    <v-btn fab icon small @click.native="pic_dialog = false" class="close_icon secondary">
      <v-icon color="black">close</v-icon>
    </v-btn>
    <v-btn fab icon small class="forward_icon secondary">
      <v-icon color="black">arrow_forward</v-icon>
    </v-btn>
    <v-btn fab icon small class="back_icon secondary">
      <v-icon color="black">arrow_back</v-icon>
    </v-btn>
    <img
      src="/static/reviews/flag.jpg"
      style="background-size:cover"
    >
    <v-spacer></v-spacer>
    <v-btn icon color="primary--text" >
      <v-icon>share</v-icon>
    </v-btn>
    <v-btn icon round large dark color="primary" slot="activator"><v-icon>Ѡ</v-icon></v-btn>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      pic_dialog: false
    }
  }
}
</script>

<style scoped>
.close_icon{ position: absolute; right: 0%; top:0%;}
.forward_icon{position: absolute; right: 0%; top:40%;}
.back_icon{position: absolute; left: 0%; top:40%;}
.icon{font-size: 24px!important;}
</style>