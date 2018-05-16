<template>
  <v-layout wrap>
    <v-flex xs12 text-xs-center>
      <h1 class="primary--text">Отзывы наших клиентов</h1>
    </v-flex>
    <v-flex xs12
    v-for="(item,i) in userreviews"
    :key="i"
    >
      <v-card>
        <v-container fluid grid-list-lg>
          <v-layout row>
              <div>
                <div class="headline"> {{ item.name }} </div>
                <div>г. {{ item.сity }} </div>
                <rating/>
                <div> {{ item.review }} </div>
              </div>
          </v-layout>
          <v-layout v-if="!userreviews.upic" row class="centre">
            <v-flex sx4 md3
            v-for="(item,i) in item.upic"
            :key="i"
            >
              <v-card-media
                :src="item.src"
                height="150px"
                style="cursor: pointer;"
                @click.stop="picview = true"
                contain
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
    <v-dialog v-model="picview" origin="center top" width="auto">
    <div class="closebtn"></div>
     <v-icon>cancel</v-icon>
     <v-icon>arrow_back_ios</v-icon>
     <v-icon>arrow_forward_ios</v-icon>
      <v-card-media
        src="/static/reviews/skelet.jpg"
        height="70vh"
        style="cursor: pointer;"
        @click.stop="picview = true"
        contain
      >
      </v-card-media>
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
    picview: false,
    userreviews: [
      { name: 'Ольга',
        сity: 'Москва',
        review: 'Сыну (9 лет) очень нравится мультфильм "Остров сокровищ". Заказали ему на день рождения пиратский флаг с черепом и костями. По выходным заказы видимо не отправляют, т.к. заказ сделала в субботу утром, а отправили только в понедельник. В остальном все понравилось. Сын в восторге от флага, повесили над кроватью.',
        upic: [
          { src: '/static/reviews/skelet.jpg' },
          { src: '/static/reviews/skelet.jpg' },
          { src: '/static/reviews/skelet.jpg' }
        ]
      },
      { name: 'Волдеморт',
        сity: 'Лондон',
        review: 'Сыну (9 лет) очень нравится мультфильм "Остров сокровищ". Заказали ему на день рождения пиратский флаг с черепом и костями. По выходным заказы видимо не отправляют, т.к. заказ сделала в субботу утром, а отправили только в понедельник. В остальном все понравилось. Сын в восторге от флага, повесили над кроватью.',
        upic: [
          { src: '/static/reviews/girl.jpg' },
          { src: '/static/reviews/girl.jpg' }
        ]
      },
      { name: 'Без картинки',
        сity: 'Париж',
        review: 'Для того, чтобы вы могли заказать все в одном месте, мы печатаем не только на ткани, но и на бумаге, и холсте, и баннере. Печать плакатов и постеров, печать баннеров — все это мы сделаем для вас.',
        upic: [ ]
      }
    ]
  })
}
</script>
<style scoped>
.centre{ justify-content: center;}
.icon{
  font-size: 48px
}
.closebtn{
  width: 50px;
  height: 50px;
  background: red;
}
</style>