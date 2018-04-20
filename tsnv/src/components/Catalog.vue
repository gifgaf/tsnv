<template>
  <v-flex>
    <v-card width="325px" class="mb-2 mr-2">
      <v-card-media
        src="/static/catalog/vimpels.jpg"
        height="200px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">Вымпелы</div>
          <span class="grey--text">Атласный твердый с прокладкой ламинированный мягкий</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn icon flat color="primary">
          <v-icon>share</v-icon>
        </v-btn>
        <v-btn icon flat color="primary">
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn flat color="primary">Подробнее</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" icon @click.native="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="show">
          Мы имеем собственное производство в СПб по изготовлению вымпелов, где используются все современные технологии. дает   возможность изготовить вымпелы на заказ четырех различных видов для всех случаев, когда нужно подарить на памсимпатичный  сувенир, наградить победителей спортивных и производственных соревнований или отметить участников важнсобытия.
        </v-card-text>
      </v-slide-y-transition>
    </v-card>

    <v-card width="325px" class="mb-2 mr-2">
      <v-card-media
        src="/static/catalog/vimpels.jpg"
        height="200px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">Вымпелы</div>
          <span class="grey--text">Атласный твердый с прокладкой ламинированный мягкий</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn icon flat color="primary">
          <v-icon>share</v-icon>
        </v-btn>
        <v-btn icon flat color="primary">
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn flat color="primary">Подробнее</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" icon @click.native="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="show">
          Мы имеем собственное производство в СПб по изготовлению вымпелов, где используются все современные технологии. дает   возможность изготовить вымпелы на заказ четырех различных видов для всех случаев, когда нужно подарить на памсимпатичный  сувенир, наградить победителей спортивных и производственных соревнований или отметить участников важнсобытия.
        </v-card-text>
      </v-slide-y-transition>
    </v-card>

    <v-card width="325px" class="mb-2 mr-2">
      <v-card-media
        src="/static/catalog/vimpels.jpg"
        height="200px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">Вымпелы</div>
          <span class="grey--text">Атласный твердый с прокладкой ламинированный мягкий</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn icon flat color="primary">
          <v-icon>share</v-icon>
        </v-btn>
        <v-btn icon flat color="primary">
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn flat color="primary">Подробнее</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" icon @click.native="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="show">
          Мы имеем собственное производство в СПб по изготовлению вымпелов, где используются все современные технологии. дает   возможность изготовить вымпелы на заказ четырех различных видов для всех случаев, когда нужно подарить на памсимпатичный  сувенир, наградить победителей спортивных и производственных соревнований или отметить участников важнсобытия.
        </v-card-text>
      </v-slide-y-transition>
    </v-card>    
  </v-flex>  
</template>

<script>
  export default {
    data: () => ({
      show: false
    })
  }
</script>

<style scoped>
  .card{display: inline-block;}
</style>