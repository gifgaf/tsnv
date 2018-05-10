<template>
  <v-layout wrap>
    <v-flex xs12 mb-3 text-xs-center>
      <h1 class="primary--text  mb-2">Отзывы наших клиентов</h1>
    </v-flex>
    <v-flex xs12>
      <v-card>
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs9 sm10>
              <div>
                <div class="headline">Светлана</div>
                <div>г. Москва</div>
                <v-icon color="secondary">star</v-icon>
                <v-icon color="secondary">star</v-icon>
                <v-icon color="secondary">star</v-icon>
                <v-icon color="secondary">star_border</v-icon>
                <v-icon color="secondary">star_border</v-icon>
                <div>Сыну (9 лет) очень нравится мультфильм "Остров сокровищ". Заказали ему на день рождения пиратский флаг с черепом и костями. По выходным заказы видимо не отправляют, т.к. заказ сделала в субботу утром, а отправили только в понедельник. В остальном все понравилось. Сын в восторге от флага, повесили над кроватью.</div>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-card-media
              src="/static/rewievs/girl.jpg"
              height="125px"
              contain
              ></v-card-media>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs12 text-xs-center>
      <v-btn round large dark color="primary">Оставить отзыв</v-btn>
    </v-flex>
    <v-pagination :length="5" v-model="page" circle></v-pagination>
  </v-layout>
</template>
<script>
  export default {
    data: () => ({
      page: 1
    })
  }
</script>
<style scoped>
.layout{
  justify-content: center;
}
</style>