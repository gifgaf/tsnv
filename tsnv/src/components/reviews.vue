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
          <v-layout v-if="!userreviews.upic" row class="centere">
            <v-flex sx4 md3
            v-for="(item,i) in item.upic"
            :key="i"
            >
              <v-card-media
                flat
                :src="item.src"
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
    <v-dialog v-model="picview" fullscreen>
      <div class="rel">
        <v-btn fab icon small @click.native="picview = false" class="close_icon secondary">
          <v-icon color="black">close</v-icon>
        </v-btn>
        <v-btn fab icon small class="forward-icon secondary">
          <v-icon color="black">arrow_forward_ios</v-icon>
        </v-btn>
        <v-btn fab icon small class="back-icon secondary">
          <v-icon color="white">arrow_back_ios</v-icon>
        </v-btn>
        <v-card-media
          src="/static/reviews/flag.jpg"
          height="100vh"
          @click.stop="picview = true"
          contain
        >
        </v-card-media>
      </div>
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
          { src: '/static/reviews/girl.jpg' },
          { src: '/static/reviews/flag.jpg' }
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
    ],
    tmpic: [
      { src: '/static/reviews/skelet.jpg' },
      { src: '/static/reviews/girl.jpg' },
      { src: '/static/reviews/flag.jpg' }
    ]
  })
}
</script>
<style scoped>
.icon{font-size: 32px!important;}
.centere{ justify-content: center;}
.close_icon{ position: absolute; right: 0; top:0; z-index: 1;}
.back-icon{ position: absolute; left: 0; top:50%; z-index: 1; text-align: center;}
.forward-icon{position: absolute; right: 0; top:50%; z-index: 1; }
.rel{position: relative; background: radial-gradient(ellipse at center, rgba(109,129,199,0.3) 0%,rgba(19,11,48,0.9) 100%); }
</style>