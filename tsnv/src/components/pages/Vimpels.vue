<template>
  <v-layout wrap>
    <v-flex xs12 text-xs-center>
      <h1 class="primary--text">Изготовление вымпелов на заказ</h1>
    </v-flex>
    <v-flex xs12>
    Мы имеем собственное производство в СПб по изготовлению вымпелов, где используются все современные технологии. Это дает возможность изготовить вымпелы на заказ четырех различных видов для всех случаев, когда нужно подарить на память симпатичный сувенир, наградить победителей спортивных и производственных соревнований или отметить участников важного события.
    </v-flex>
    <v-flex xs12>
      <VimpelAHG></VimpelAHG>
    </v-flex>
    <v-flex xs12 text-xs-center>
      <v-btn round dark class="noupper" color="primary">
      Скачать крой
      <v-icon dark right>archive</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs12 md4 offset-md4 >
      <VimpelForm></VimpelForm>
    </v-flex>
  </v-layout>
</template>

<script>
import VimpelForm from '@/components/order_forms/VimpelForm.vue'
import VimpelAHG from '@/components/price_table/VimpelAHG.vue'
export default {
  components: { VimpelForm, VimpelAHG },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>