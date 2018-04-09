<template>
  <v-app>
    <v-navigation-drawer class="secondary"
      temporary
      v-model="drawer"
      absolute
      >
    <v-list>
      <img src="/static/tsn-logo-b.svg" alt="logo" class="ml-2">
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
      <v-list-tile ripple v-for="item in popmenuItems" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon left>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary" light dense>
      <v-toolbar-title class="secondary--text"><img src="/static/tsn-logo.svg" alt="logo"></v-toolbar-title>
      <v-text-field
        class="ml-4 white--text"
        clearable
        append-icon="search"
        label="Поиск..."
        solo
        dark
        flat
      ></v-text-field>
      <!--<v-spacer></v-spacer>
      <v-btn icon dark><v-icon class="secondary--text">search</v-icon></v-btn>  -->
      <v-chip v-for="item in contactItems" :key="item.title"
      color="primary" 
      text-color="white">
        <v-avatar>
          <v-icon class="secondary--text">{{ item.icon }}</v-icon>
        </v-avatar>
        {{ item.title }}
      </v-chip>    
      <v-toolbar-side-icon class="secondary hidden-md-and-up" light @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-tabs 
        class="hidden-sm-and-down" 
        centered
        color="secondary"
        slot="extension"
        slider-color="primary"
        show-arrows
      >
        <v-tab
          class="noupper"
          v-for="item in menuItems"
          :key="item.title"
          :href="`#tab-${item.title}`"
        >
        {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex  xs12 sm2 md3 lg2 class='hidden-sm-and-down'>
            <nav>
            <h2 class="primary mb-2">Популярная продукция</h2>
              <v-text-field 
                placeholder="Выбор по названию"
                append-icon="search"
                id="search"
                clearable
                solo
                single-line
                key="search"
                v-model="search"
                ref="search"
                >
              </v-text-field>
            <v-list class="transparent">
              <v-list-tile ripple dense class="secondary mb-1 elevation-1" v-for="item in popmenuItems" :key="item.title" @click="">
                <v-list-tile-content >{{ item.title }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
            </nav>
          </v-flex>
          <v-flex xs12 sm8 md6 lg8>
            <main>
              <v-card flat class="transparent">
                <v-card-title primary class="title"><h1 class="primary--text text-xs-center">Добро пожаловать на сайт предприятия «ТСН» !</h1>
                </v-card-title>
                <v-card-text 
                  v-text="lorem">
                </v-card-text>
              </v-card>
            </main>
          </v-flex>
          <v-flex xs12 sm2 md3 lg2>
            <nav>
              <v-btn round block large color="success" dark>Заказать</v-btn>
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
              </v-list>              
            </nav>
          </v-flex>
        </v-layout>
    </v-container>
    <v-footer height="100%" class='primary'>
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12 sm3 v-for="i in 4" :key="`i${i}`">
            <v-card dark flat class="transparent pl-5">
              <v-card-text class="px-0">{{i}}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>  
         <div class="bottom__footer">
           &copy;1992-2018 Компания ТСН. При копировании материалов сайта, активная ссылка на www.tsnv.ru   обязательна.
         </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems: [
        { icon: '', title: 'О компании' },
        { icon: '', title: 'Продукция от А до Я' },
        { icon: '', title: 'Как заказать' },
        { icon: '', title: 'Требования к макетам' },
        { icon: '', title: 'Контакты' },
        { icon: '', title: 'Новости' },
        { icon: '', title: 'Отзывы' }
      ],
      contactItems: [
        { icon: 'phone', title: '(812) 335-86-61' },
        { icon: 'email', title: 'tsnv@bk.ru' }
      ],
      popmenuItems: [
        { icon: 'flag', title: 'Банданы' },
        { icon: 'flag', title: 'Баннеры' },
        { icon: 'flag', title: 'Бейсболки' },
        { icon: 'flag', title: 'Флаги' },
        { icon: '', title: 'Флажки на палочке' },
        { icon: 'flag', title: 'Флагштоки' },
        { icon: 'flag', title: 'Фотообои' },
        { icon: 'flag', title: 'Фото на подарки' },
        { icon: 'flag', title: 'Фотошторы' },
        { icon: 'flag', title: 'Футболки с логотипом' }
      ],
      partItems: [
        { icon: '', title: 'Флажная продукция', description: 'Печать фирменных, государственных, ведомственных, спортивных и пр. флагов и знамен любого размера.' },
        { icon: '', title: 'Транспаранты и растяжки', description: 'Для агитационных, праздничных и спортивных мероприятий.' },
        { icon: '', title: 'Корпоративная и промо одежда', description: 'Пошив галстуков, платков, шарфов, бандан, футболок и бейсболок, промо-накидок, жилетов, фартуков.' },
        { icon: '', title: 'Широкоформатная печать на ткани', description: 'Изготовление штор, занавесов, ролл штор с фото, покрывал, скатертей...' },
        { icon: '', title: 'Широкоформатная печать', description: 'Фотообои на стену, баннеры, плакаты, фотопечать на ткани.' },
        { icon: '', title: 'Изготовление флагштоков', description: 'Флагштоков мобильных, флагштоков-мачт, фасадных, настольных, автомобильных и офисных.' },
        { icon: '', title: 'Корпоративные и праздничные подарки', description: 'Футболки, подушки, пазлы, тарелки, кружки, подарочные мешочки, календари на ткани, сумки.' },
        { icon: '', title: 'Печать наклеек', description: 'На шампанское, на упаковку, на продукцию.' },
        { icon: '', title: 'Наградная продукция', description: 'Ленты мисс, ленты выпускника, вымпелы.' },
        { icon: '', title: 'Для спорта и тимбилдинга', description: 'Стартовые майки, спортивные номера, волчатники, нанесение на спортивную форму.' },
        { icon: '', title: 'Наградная продукция', description: 'Ролл-ап стенды, X-стенды, L-стенды' },
        { icon: '', title: 'Для спорта и тимбилдинга', description: 'Гербы, штандарты, знамена.' }
      ],
      newsItems: [
      {date: '15 января 3001', title: 'Наградная продукция', description: 'Ролл-ап стенды, X-стенды, L-стенды'},
      {date: '15 января 1606', title: 'Наградная продукция', description: 'Ролл-ап стенды, X-стенды, L-стенды'}
      ],
      chitItems: [
      {date: '15 января 3001', userName: 'Пиванов Вольдемар', comment: 'Очень хорошо', src: '/static/doc-images/cards/house.jpg'},
      {date: '15 января 3001', userName: 'Пиванов Вольдемар', comment: 'Очень хорошо', src: '/static/doc-images/cards/house.jpg'}
      ],
      lorem: `Мы занимаемся изготовлением всех видов продукции для рекламных целей, спорта, подарков и пр. которые делаются из ткани. Наша специализация – это изготовление флагов всех видов: флагов стран, флагов с логотипом, настольных флагов, флагов "парус", "виндер", "пляжный", автофлагов. Также выполним изготовление вымпелов, платков с логотипом, шарфов, бандан, галстуков и бейсболок, что востребовано сейчас очень широко.
                      Для того, чтобы вы могли заказать все в одном месте, мы печатаем не только на ткани, но и на бумаге, и холсте, и баннере. Печать плакатов и постеров, печать баннеров — все это мы сделаем для вас.`
    }
  }
}
</script>
