<template>
    <v-dialog v-model="dialog" wrap hide-overlay transition="slide-x-transition">
      <v-btn icon slot="activator" class="white--text">
        <v-icon>search</v-icon>
      </v-btn>
      <v-card class="search_bg">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon class="secondary" @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-container grid-list-lg>
          <v-text-field
            placeholder="Поиск"
            clearable
            class="mt-5 sm2"
            solo
            single-line
            key="search"
            ref="search"
            >
          </v-text-field>
        </v-container>
      </v-card>
      <v-flex xs12 sm6 lg3
         v-for="item in bandanasearch" 
        :key="item.title"
      >
        <v-card>
          <v-card-media
            :src="item.picsrc"
            height="220px"
          ></v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{item.title}}</h3>
              <div>{{item.description}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn fab flat color="secondary"><v-icon>share</v-icon></v-btn>
            <v-btn flat color="secondary">Подробнее</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      bandanasearch: [
        {title: 'Бандана «Команда»', description: 'Разные-разные, голубые, красные', picsrc: 'static /bandanas_img/bandana_model1_xl.jpg'
        },
        {title: 'Баннеры', description: 'Ну очень большие, но по пять', picsrc: '/static/catalogbanners.jpg'
        },
        {title: 'Бандана «Бафф»', description: 'Разные-разные, голубые, красные', picsrc: 'static/ bandanas_img/bandana_model1_xl.jpg'
        },
        {title: 'Бандана «Хатимаки»', description: 'Разные-разные, голубые, красные', picsrc: '/static/bandanas_img/bandana_model1_xl.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.search_bg{
  background-color: #eff0f4;}
</style>