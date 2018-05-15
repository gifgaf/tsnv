<template>
  <v-layout wrap>
    <v-flex xs12 text-xs-center>
      <h1 class="primary--text">Отзывы наших клиентов</h1>
    </v-flex>
    <v-flex xs12>
      <v-card>
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex>
              <div>
                <div class="headline">Светлана</div>
                <div>г. Москва</div>
                <rating/>
                <div>Сыну (9 лет) очень нравится мультфильм "Остров сокровищ". Заказали ему на день рождения пиратский флаг с черепом и костями. По выходным заказы видимо не отправляют, т.к. заказ сделала в субботу утром, а отправили только в понедельник. В остальном все понравилось. Сын в восторге от флага, повесили над кроватью.</div>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex sx4>
              <v-card-media
                :src="/static/reviews/skeletons.jpg"
                height="200px"
                style="cursor: pointer;"
                @click.stop="picview = true"
              >
              </v-card-media>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs12 text-xs-center>
      <v-pagination :length="5" v-model="page" circle></v-pagination>
    </v-flex>
    <v-flex xs12 text-xs-center>
      <ReviewsForm/>
    </v-flex>
    <v-dialog v-model="picview" origin="top left" max-width="800px" color="white">
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
          <v-btn class="primary" large flat @click="picview = false">Отмена</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>

</template>
<script>
import ReviewsForm from '@/components/order_forms/ReviewsForm.vue'
import rating from '@/components/rating.vue'
import picview from '@/components/picview.vue'
export default {
  components: { ReviewsForm, rating, picview },
  data: () => ({
    page: 1,
    picview: false
  })
}
</script>
<style scoped>
.card__media{max-width:200pxp; justify-content: center;}
</style>