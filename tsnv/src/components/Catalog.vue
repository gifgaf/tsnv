<template>
  <v-layout wrap>
    <v-flex xs12 text-xs-center>
       <v-btn 
       v-for="item in abc" 
       :key="item" 
       @click="" fab small light color="secondary" class='mx-0 my-0 noupper'>
         {{ item }}
       </v-btn>
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
      show: false,
      abc: [
        'Все', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Ц', 'Ш', 'Э'],
      partItems: [
        { icon: '', title: 'Вымпелы', description: 'Печать фирменных, государственных, ведомственных, спортивных и других флагов и знамен любого размера.' }
      ]
    })
  }
</script>

<style scoped>
  .mx-145{margin: 0}
</style>