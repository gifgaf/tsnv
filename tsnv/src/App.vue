<template>
  <v-app>
    <v-navigation-drawer class="secondary"
      temporary
      v-model="drawer"
      absolute>
    <v-list dense>
      <img src="/static/tsn-logo-b.svg" alt="logo">
      <v-divider></v-divider>
      <v-list-tile v-for="item in menuItems" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon left>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
        <v-list-tile>
          <v-text-field 
            placeholder="Выбор по названию"
            prepend-icon="search"
            id="search"
            clearable
            single-line
            key="search"
            v-model="search"
            ref="search"
            >
          </v-text-field>
        </v-list-tile>
      <v-list-tile v-for="item in popmenuItems" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon left>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary" dark>
      <v-toolbar-title class="secondary--text"><img src="/static/tsn-logo.svg" alt="logo"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title">
        <v-icon left class=" secondary--text">{{ item.icon }}</v-icon>{{ item.title }}</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="secondary hidden-sm-and-up" light @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <main>
              <v-card color="purple" dark>
                <v-card-title primary class="title">popmenu</v-card-title>
                <v-card-text
                v-text="lorem">
                </v-card-text>
              </v-card>
            </main>
          </v-flex>
          <v-flex xs12>
            <main>
              <v-card color="deep-purple" dark>
                <v-card-title primary class="title">main</v-card-title>
                <v-card-text
                v-text="lorem">
                </v-card-text>
              </v-card>
            </main>
          </v-flex>
          <v-flex xs12>
            <main>
              <v-card color="indigo" dark>
                <v-card-title primary class="title">leftmenu</v-card-title>
                <v-card-text
                v-text="lorem">
                </v-card-text>
              </v-card>
            </main>
          </v-flex>
        </v-layout>
    </v-container>
  <v-footer height="auto" class="primary">
    <v-card flat tile>
      <v-card-title class="primary white--text">
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
          dark
          class="mx-3"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="grey lighten-3">
        <v-layout>
          <v-flex
            v-for="(col, i) in rows"
            :key="i"
            xs3
          >
            <span class="body-2" v-text="col.title.toUpperCase()"/>
            <div
              v-for="(child, i) in col.children"
              :key="i"
              v-text="child"
            />
          </v-flex>
          <v-flex xs3 layout column>
            <span class="body-2">CONTACT</span>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
              New York, NY 10012, US
            </div>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
              info@example.com
            </div>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
              + 01 234 567 88
            </div>
            <div>
              <v-icon size="18px" class="mr-3">fas fa-print</v-icon>
              + 01 234 567 89
            </div>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions class="grey lighten-2 justify-center">
        &copy;1992-2018 Компания ТСН. При копировании материалов сайта, активная ссылка на www.tsnv.ru обязательна.
      </v-card-actions>
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
      rows: [
        {
          title: 'Company Name',
          children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
        },
        {
          title: 'Products',
          children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular']
        },
        {
          title: 'Useful Links',
          children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
        }
      ],
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    }
  }
}
</script>
