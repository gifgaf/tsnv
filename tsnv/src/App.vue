<template>
  <v-app>
    <v-navigation-drawer class="secondary"
      temporary
      v-model="drawer"
      absolute
      >
    <v-list>
      <img src="/static/tsn-logo-b.svg" alt="logo">
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
        class="ml-5 secondary--text"
        dark
        clearable
        append-icon="search"
        label="Поиск..."
        solo-inverted
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
            <v-toolbar dense dark class="primary elevation-0">
              <v-toolbar-title >Популярная продукция</v-toolbar-title>
              </v-toolbar>
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
              <v-card color="indigo" dark>
                <v-card-title primary class="title text-sm-center">leftmenu</v-card-title>
                <v-card-text
                v-text="lorem">
                </v-card-text>
              </v-card>
            </nav>
          </v-flex>
        </v-layout>
    </v-container>
    <v-footer height="auto" class=''>
    <v-card
      flat
      tile
      class="primary white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
          class="mx-3 white--text"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>
      <v-card-text class="black80 white--text">
        &copy;1992-2018 Компания ТСН. При копировании материалов сайта, активная ссылка на www.tsnv.ru обязательна.
      </v-card-text>
    </v-card>
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
        { icon: '', title: 'Контакты' }
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
      lorem: `Мы занимаемся изготовлением всех видов продукции для рекламных целей, спорта, подарков и пр. которые делаются из ткани. Наша специализация – это изготовление флагов всех видов: флагов стран, флагов с логотипом, настольных флагов, флагов "парус", "виндер", "пляжный", автофлагов. Также выполним изготовление вымпелов, платков с логотипом, шарфов, бандан, галстуков и бейсболок, что востребовано сейчас очень широко.
                      Для того, чтобы вы могли заказать все в одном месте, мы печатаем не только на ткани, но и на бумаге, и холсте, и баннере. Печать плакатов и постеров, печать баннеров — все это мы сделаем для вас.`
    }
  }
}
</script>
