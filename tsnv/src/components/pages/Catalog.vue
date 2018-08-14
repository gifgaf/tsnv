<template>
  <v-layout wrap>
    <v-flex xs12 text-xs-center mb-3>
      <h1 class="primary--text">Продукция от А до Я</h1>
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
      <v-card class="" height="360px">
        <v-card-media
          :src="item.picsrc"
          height="220px"
          style="cursor: pointer;"
          @click=""
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.title}}</h3>
            <div>{{item.description}}</div>
          </div>
        </v-card-title>
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
        {title: 'Спортивная форма', description: 'Печать фамилий и логотипов', picsrc: '/static/catalog/bandanas.jpg'
        },
        {title: 'Баннеры', description: 'Ну очень большие, но по пять', picsrc: '/static/catalog/banners.jpg'
        },
        {title: 'Бейсболки', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/baseballcap.jpg'
        },
        {title: 'Вымпелы', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/vimpels.jpg'
        },
        {title: 'Печать на ткани (для производителей)', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/flags.jpg'
        },
        {title: 'Флажки на палочке', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/stickflags.jpg'
        },
        {title: 'Флагштоки', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/flagpoles.jpg'
        },
        {title: 'Фотообои', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/wallpapers.jpg'
        },
        {title: 'Фотошторы', description: 'Разные-разные, голубые, красные', picsrc: '/static/catalog/curtains.jpg'
        },
        {title: 'Футболки с логотипом', description: 'Разные-разные, голубые, красные, жёлтые, голубые, красные, жёлтые...', picsrc: '/static/catalog/tshirts.jpg'
        }
      ]
    })
  }
</script>

<style scoped>
.card{
  padding: 5px;
  color: rgba(0,0,0,.8);
  border: 1px solid #e4dfec;
}
</style>