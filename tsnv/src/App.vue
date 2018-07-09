<template>
  <v-app>
    <v-navigation-drawer 
      class="secondary"
      temporary
      v-model="drawer"
      app
      >
    <v-list>
      <img src="/static/tsn-logo-b.svg" alt="logo" class="ml-2">
      <v-divider></v-divider>
      <span class="likebutton mx-2">
        <v-icon left class="secondary--text">email</v-icon>
        tsnv@bk.ru
      </span>
      <span class="likebutton mx-2">
        <v-icon left class="secondary--text">phone</v-icon>
        (812) 335-86-61
      </span>
      <CallbackForm></CallbackForm>
      <VimpelForm class="px-2"></VimpelForm>
      <v-divider></v-divider>
      <v-list-tile ripple v-for="item in menuItems" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon left>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-text-field 
          placeholder="Выбор по названию"
          append-icon="search"
          id="search"
          solo
          flat
          clearable
          single-line
          key="search"
          v-model="search"
          ref="search"
          >
        </v-text-field>
      </v-list-tile>
      <v-list-tile 
        ripple 
        v-for="item in popmenuItems" 
        :key="item.title" 
        @click="">
        <v-list-tile-action>
          <v-icon left>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary" light dense flat>
      <v-toolbar-title class="secondary--text">
      <img src="/static/tsn-logo.svg" alt="logo">
      </v-toolbar-title>
      <v-text-field 
        class="mx-2"
        color="amber darken-1"
        clearable
        append-icon="search"
        label="Поиск..."
        dark
        flat
        solo
      ></v-text-field>
      <v-toolbar-items class="hidden-sm-and-down">
        <span class="likebutton">
        <v-icon left class="secondary--text">email</v-icon>
        tsnv@bk.ru
        </span>
        <span class="likebutton">
        <v-icon left class="secondary--text">phone</v-icon>
        (812) 335-86-61
        </span>
        <CallbackForm class="likebutton"></CallbackForm>
      </v-toolbar-items>
      <v-toolbar-side-icon class="secondary /*hidden-md-and-up*/" light @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-tabs>
    </v-toolbar>
    <div class="topmenu secondary text-xs-center hidden-sm-and-down elevation-3">
        <v-menu offset-y open-on-hover>
          <v-btn slot="activator" flat class="noupper" @click="">О компании <v-icon right>arrow_drop_down</v-icon></v-btn>
          <v-list>
            <v-list-tile v-for="(item, index) in menuItems.slice(5, 7)" :key="index" @click="">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu><v-btn flat 
        class="noupper" 
        v-for="(item, index) in menuItems.slice(1, 5)" :key="index" @click=""
        >{{ item.title }}</v-btn>
    </div>
    <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex  xs12 sm2 md3 lg2 class='hidden-sm-and-down'>
            <nav>
            <h2 class="primary mb-2">Наша продукция</h2>
              <v-text-field 
                placeholder="Выбор по названию"
                append-icon="search"
                id="search"
                clearable
                solo
                flat
                single-line
                key="search"
                v-model="search"
                ref="search"
                >
              </v-text-field>
              <v-list class="transparent">
                <v-list-tile 
                  ripple dense 
                  class="secondary mb-1 elevation-1" 
                  v-for="item in popmenuItems" :key="item.title" @click="">
                  <v-list-tile-content >{{ item.title }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </nav>
          </v-flex>
          <v-flex xs12 sm8 md6 lg8>
            <main>
              <Vimpels/>
              <Reviews/>
              <News/>
              <Catalog/>
              <SearchResult/>
            </main>
          </v-flex>
          <v-flex xs12 sm4 md3 lg2 >
            <nav>
              <VimpelForm/>
              <h2 class="primary mb-1">Спец-предложения</h2>
                <v-card class="secondary mb-2">
                  <v-card-media src="./static/special_offer/9maya.png" height="140px">
                  </v-card-media>
                  <v-card-actions>
                    <v-btn flat round block>9 мая</v-btn>
                  </v-card-actions>
                </v-card>
                <v-card class="secondary mb-2">
                  <v-card-media src="/static/special_offer/9maya.png" height="140px">
                  </v-card-media>
                  <v-card-actions>
                    <v-btn flat round block>1 мая</v-btn>
                  </v-card-actions>
                </v-card>
              <h2 class="primary">Новости</h2>
              <v-card flat class="mb-2 news">
                <v-card-title>
                    <v-divider></v-divider>                
                    <span class="grey--text ">19 апреля 2018</span>
                    <span>Павел Пиляк !!!link, программист, написал нам новый сайт, оставляйтотзывы, самые интересные пожелания будут учтены.</span>
                    <v-divider></v-divider>                
                    <span class="grey--text ">12 апреля 2018</span>
                    <span>Jgznm Павел Пиляк !!!link, программист, написал нам новый сайт, оставляйтотзывы, самые интересные пожелания будут учтены.</span>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="orange">Все новости</v-btn>
                </v-card-actions>
              </v-card>
              <h2 class="primary">Отзывы</h2>
              <v-list three-line>
                <v-list-tile 
                avatar
                ripple
                @click=""
                >
                  <v-list-tile-avatar>
                    <img src="/static/user_avatar/avatar.jpg">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-action-text class="grey--text"> 20 апреля 2018</v-list-tile-action-text>
                    <v-list-tile-title>Петр Серафимбюльивович Иванов</v-list-tile-title>
                    <v-list-tile-sub-title>На этом сайте все по-взрослому! Нужно бесплатно  регистрироватьсязавести «счета»</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider inset></v-divider>
                <v-list-tile 
                ripple
                @click=""
                >
                  <v-list-tile-avatar>
                    <v-icon>person</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-action-text class="grey--text"> 22 апреля 2018</v-list-tile-action-text>
                    <v-list-tile-title>Пивонов</v-list-tile-title>
                    <v-list-tile-sub-title>Спасибо за падушка!</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider inset></v-divider>
                <v-btn flat color="orange">Все отзывы</v-btn>
              </v-list>
            </nav>
          </v-flex>
        </v-layout>
    </v-container>
    <back-to-top visibleoffset="600"><v-icon >arrow_upward</v-icon></back-to-top>
    <Footer/>
  </v-app>
</template>

<script>
import VimpelForm from '@/components/order_forms/VimpelForm.vue'
import CallbackForm from '@/components/order_forms/CallbackForm.vue'
import Catalog from '@/components/pages/Catalog.vue'
import News from '@/components/pages/News.vue'
import Reviews from '@/components/pages/Reviews.vue'
import Vimpels from '@/components/pages/Vimpels.vue'
import SearchResult from '@/components/pages/SearchResult.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: { VimpelForm, CallbackForm, Catalog, News, Reviews, Vimpels, SearchResult, Footer },
  data () {
    return {
      drawer: false,
      menuItems: [
        { icon: 'home', title: 'О компании' },
        { icon: 'sort_by_alpha', title: 'Продукция от А до Я' },
        { icon: 'help', title: 'Как заказать' },
        { icon: 'save_alt', title: 'Требования к макетам' },
        { icon: 'contacts', title: 'Контакты' },
        { icon: 'new_releases', title: 'Новости' },
        { icon: 'rate_review', title: 'Отзывы' }
      ],
      contactItems: [
        { icon: 'email', title: 'tsnv@bk.ru' },
        { icon: 'phone', title: '(812) 335-86-61' },
        { icon: 'phone_callback', title: 'Перезвоните мне' }
      ],
      popmenuItems: [
        { icon: 'flag', title: 'Банданы' },
        { icon: 'flag', title: 'Баннеры' },
        { icon: 'flag', title: 'Бейсболки' },
        { icon: 'flag', title: 'Вымпелы' },
        { icon: 'flag', title: 'Флаги' },
        { icon: '', title: 'Флажки на палочке' },
        { icon: 'flag', title: 'Флагштоки' },
        { icon: 'flag', title: 'Фотообои' },
        { icon: 'flag', title: 'Фото на подарки' },
        { icon: 'flag', title: 'Фотошторы' },
        { icon: 'flag', title: 'Футболки с логотипом' }
      ],
      partItems: [
        { icon: '', title: 'Флажная продукция', description: 'Печать фирменных, государственных, ведомственных, спортивных и других флагов и знамен любого размера.' },
        { icon: '', title: 'Транспаранты и растяжки', description: 'Для агитационных, праздничных и спортивных мероприятий.' },
        { icon: '', title: 'Корпоративная и промо одежда', description: 'Пошив галстуков, платков, шарфов, бандан, футболок и бейсболок, промо-накидок, жилетов, фартуков.' },
        { icon: '', title: 'Широкоформатная печать на ткани', description: 'Изготовление штор, занавесов, ролл штор с фото, покрывал, скатертей...' },
        { icon: '', title: 'Широкоформатная печать', description: 'Фотообои на стену, баннеры, плакаты, фотопечать на ткани.' },
        { icon: '', title: 'Изготовление флагштоков', description: 'Флагштоков мобильных, флагштоков-мачт, фасадных, настольных, автомобильных и офисных.' },
        { icon: '', title: 'Корпоративные подарки', description: 'Футболки, подушки, пазлы, тарелки, кружки, подарочные мешочки, календари на ткани, сумки.' },
        { icon: '', title: 'Печать наклеек', description: 'На шампанское, на упаковку, на продукцию.' },
        { icon: '', title: 'Наградная продукция', description: 'Ленты мисс, ленты выпускника, вымпелы.' },
        { icon: '', title: 'Для спорта и тимбилдинга', description: 'Стартовые майки, спортивные номера, волчатники, нанесение на спортивную форму.' },
        { icon: '', title: 'Изготовление мобильных стендов', description: 'Ролл-ап стенды, X-стенды, L-стенды' },
        { icon: '', title: 'Геральдика', description: 'Гербы, штандарты, знамена.' }
      ],
      lorem: `Мы занимаемся изготовлением всех видов продукции для рекламных целей, спорта, подарков и пр. которые делаются из ткани. Наша специализация – это изготовление флагов всех видов: флагов стран, флагов с логотипом, настольных флагов, флагов "парус", "виндер", "пляжный", автофлагов. Также выполним изготовление вымпелов, платков с логотипом, шарфов, бандан, галстуков и бейсболок, что востребовано сейчас очень широко. Для того, чтобы вы могли заказать все в одном месте, мы печатаем не только на ткани, но и на бумаге, и холсте, и баннере. Печать плакатов и постеров, печать баннеров — все это мы сделаем для вас.`
    }
  }
}
</script>

<style scoped>
.likebutton {
  display: inline-block; 
  color: #fff; 
  background-color: #060084; 
  margin: 4px 0; padding: 8px;
  border-radius: 28px;
}

.topmenu .btn{ margin: 0; height: 48px; }

</style>
