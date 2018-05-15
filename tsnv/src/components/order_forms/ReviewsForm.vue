<template>
  <v-dialog v-model="dialog" origin="top left" max-width="800px" color="white">
    <v-card>
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex>
              <div>
                <div class="headline">Светлана</div>
                <div>г. Москва</div>
                <v-icon color="secondary">star</v-icon>
                <v-icon color="secondary">star</v-icon>
                <v-icon color="secondary">star</v-icon>
                <v-icon color="gray">star_border</v-icon>
                <v-icon color="gray">star_border</v-icon>
                <div>Сыну (9 лет) очень нравится мультфильм "Остров сокровищ". Заказали ему на день рождения пиратский флаг с черепом и костями. По выходным заказы видимо не отправляют, т.к. заказ сделала в субботу утром, а отправили только в понедельник. В остальном все понравилось. Сын в восторге от флага, повесили над кроватью.</div>
              </div>
              <v-card-media
              src="/static/reviews/girl.jpg"
              height="125px"
              contain
              ></v-card-media>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions class="pb-5">
          <v-btn class="primary" large flat @click="dialog = false">Отмена</v-btn>
        </v-card-actions>
      </v-card>
    <v-btn round block large dark color="primary" slot="activator">Оставить отзыв</v-btn>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      rules: {
        required: (value) => !!value || 'Обязательное поле.',
        email: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'E-mail must be valid'
      }
    }
  }
}
</script>

<style scoped>
</style>