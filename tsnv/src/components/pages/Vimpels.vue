<template>
  <v-layout wrap>
    <v-flex xs12 text-xs-center>
      <h1 class="primary--text">Страница товара слайдер btn загрузить макет</h1>
    </v-flex>
    <v-flex xs12>
      <VimpelAHG></VimpelAHG>
    </v-flex>
  </v-layout>
</template>

<script>
import VimpelAHG from '@/components/price_table/VimpelAHG.vue'
export default {
  components: { VimpelAHG },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>