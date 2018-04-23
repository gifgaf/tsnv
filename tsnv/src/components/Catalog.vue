<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-btn-toggle show-arrows v-model="text">
        <v-btn value="left" class="px-2" >
          А
        </v-btn>
        <v-btn value="center" class="px-2">
          Б
        </v-btn>
        <v-btn value="right" class="px-2">
          В
        </v-btn>
        <v-btn value="justify" class="px-2">
          Г
        </v-btn>
        <v-btn value="left" class="px-2">
          Д
        </v-btn>
        <v-btn value="center" class="px-2">
          Е
        </v-btn>
        <v-btn value="right" class="px-2">
          Ж
        </v-btn>
        <v-btn value="justify">
          З
        </v-btn>
        <v-btn value="left">
          К
        </v-btn>
        <v-btn value="center">
          Л
        </v-btn>
        <v-btn value="right">
          М
        </v-btn>
        <v-btn value="justify">
          Н
        </v-btn>
        <v-btn value="left">
          О
        </v-btn>
        <v-btn value="center">
          П
        </v-btn>
        <v-btn value="right">
          Р
        </v-btn>
        <v-btn value="justify">
          С
        </v-btn>
        <v-btn value="left">
          Т
        </v-btn>
        <v-btn value="center">
          У
        </v-btn>
        <v-btn value="right">
          Ф
        </v-btn>
        <v-btn value="justify">
          Ц
        </v-btn>
        <v-btn value="right">
          Ш
        </v-btn>
        <v-btn value="justify">
          Э
        </v-btn>                       
      </v-btn-toggle>
    </v-flex>
    <v-flex xs12 sm6 lg3>
    <v-card class="mb-2 mr-1">
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
        <v-spacer></v-spacer>
        <v-btn flat color="primary">Подробнее</v-btn>
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
    <v-flex xs12 sm6 lg3>
    <v-card class="mb-2 mr-1">
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
        <v-spacer></v-spacer>
        <v-btn flat color="primary">Подробнее</v-btn>
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
    <v-flex xs12 sm6 lg3>
    <v-card class="mb-2 mr-1">
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
        <v-spacer></v-spacer>
        <v-btn flat color="primary">Подробнее</v-btn>
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
    <v-flex xs12 sm6 lg3>
    <v-card class="mb-2 mr-1">
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
        <v-spacer></v-spacer>
        <v-btn flat color="primary">Подробнее</v-btn>
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
    <v-flex xs12 sm6 lg3>
    <v-card class="mb-2 mr-1">
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
        <v-spacer></v-spacer>
        <v-btn flat color="primary">Подробнее</v-btn>
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
  </v-layout>  
</template>

<script>
  export default {
    data: () => ({
      show: false
    })
  }
</script>

<style scoped>
  .card{display:block;}
</style>