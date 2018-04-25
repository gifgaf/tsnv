<template>
  <v-layout wrap>
    <v-flex xs12 text-xs-center mb-2>
       <v-btn
       fab small light color="secondary" class='mx-0 my-0 noupper'
       v-for="item in abc"
       :key="item"
       @click="">
         {{ item }}
       </v-btn>
    </v-flex>

    <v-flex xs12 sm6 lg3
      v-for="item in cards" 
      :key="item.title"
    >
      <v-card class="">
        <v-card-media
          :src="item.picsrc"
          height="240px"
        >
        </v-card-media>
        <v-card-title primary-title text-xs-centerclass="">
            <div class="headline"> {{ item.title }} </div>
        </v-card-title>
        <p class="grey--text"> {{ item.description }} </p>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon class="noupper primary--text">
            <v-icon>arrow_forward</v-icon>
          </v-btn>
        </v-card-actions>
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
      cards: [
        {title: 'Банданы', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/bandanas.jpg'
        },
        {title: 'Баннеры', description: 'Ну очень большие, но по пять', picsrc: '/static/catalog/banners.jpg'
        },
        {title: 'Бейсболки', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/baseballcap.jpg'
        },
        {title: 'Вымпелы', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/vimpels.jpg'
        },
        {title: 'Флаги', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/flags.jpg'
        },
        {title: 'Флажки на палочке', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/stickflags.jpg'
        },
        {title: 'Флагштоки', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/flagpoles.jpg'
        },
        {title: 'Фотообои', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/wallpapers.jpg'
        },
        {title: 'Фотошторы', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/curtains.jpg'
        },
        {title: 'Футболки с логотипом', description: 'Разные-разные, голубые, красные, жёлтые, зелёные', picsrc: '/static/catalog/tshirts.jpg'
        }
      ]
    })
  }
</script>

<style scoped>
.container.grid-list-lg .layout .flex{
  padding: 5px;
}
.card{
  padding: 5px;
}
.headline {
    font-size: 18px!important;
    font-weight: 600;
    line-height: 18px!important;
}    
</style>