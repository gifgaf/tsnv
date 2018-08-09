<template>
<nav>
  <v-footer height="100%" class='primary'>
    <v-container grid-list-lg class="footer_maxsize">
      <v-layout row wrap>
        <v-flex xs12 sm9 class="white--text">
        <img src="/static/tsn-logo.svg" alt="logo" class="mr-2"><br>
        <strong class='secondary--text'>(812) 335-86-61</strong> Россия, 191014,  Санкт-Петербург, ул. Литовская, 8<br class='hidden-xs-and-up'>
        <strong class='secondary--text'>Время работы:</strong> пн-пт, с 10:00 до 18:00 (без обеда)<br>
        <strong class='secondary--text'>Выдача заказов:</strong> с 09:00 до 19:00
        </v-flex>
        </v-layout>
        <v-layout row wrap>
        <v-flex xs12 sm3>
          <v-list dark class="transparent">
            <template v-for="(item, index) in menuItems">
              <v-list-tile
                :key="item.title"
                avatar
                ripple
                @click=""
              >
                <v-list-tile-action>
                  <v-icon left class="secondary--text">{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider v-if="index + 1 < menuItems.length" :key="index"></v-divider>
            </template>
          </v-list>
        </v-flex>
        <v-flex xs12 sm3 class="hidden-xs-only">
          <v-list dark class="transparent">
            <template v-for="(item, index) in partItems.slice(0, 4)">
              <v-list-tile
                :key="item.title"
                avatar
                ripple
                @click=""
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action></v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < partItems.slice(0, 4).length" :key="index"></v-divider>
            </template>
          </v-list>
        </v-flex>
        <v-flex xs12 sm3 class="hidden-xs-only">
          <v-list dark class="transparent">
            <template v-for="(item, index) in partItems.slice(4, 8)">
              <v-list-tile
                :key="item.title"
                avatar
                ripple
                @click=""
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action></v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < partItems.slice(4, 8).length" :key="index"></v-divider>
            </template>
          </v-list>
        </v-flex>
        <v-flex xs12 sm3 class="hidden-xs-only">
          <v-list dark class="transparent">
            <template v-for="(item, index) in partItems.slice(8, 12)">
              <v-list-tile
                :key="item.title"
                avatar
                ripple
                @click=""
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action></v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < partItems.slice(8, 12).length" :key="index"></v-divider>
            </template>
          </v-list>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 text-xs-right>
          <v-btn fab small class="white" v-for="i of logoArray" :key="i.id"
                 :id="i.id" :alt="i.title" :title="i.title" v-bind:href="i.link" target="_blank">
            <div v-html="i.content"></div>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
  <div class="bottom__footer">
    &copy;1992-2018 Компания ТСН. При копировании материалов сайта, активная  ссылка на www.tsnv.ru обязательна<br>
    Условия обработки персональных данных | Цены на сайте не являются публичной офертой
  </div>
</nav>
</template>

<script>
const logoArray = [
  { id: 'vk',
    title: 'Вконтакте',
    link: 'https://vk.com/tsn_print',
    content: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="-4 -7 32 32">
      <path fill="#060084" d="M26.313,4.224c0.21-0.704,0-1.22-0.993-1.22h-3.283c-0.833,0-1.22,0.448-1.426,0.938
        c0,0-1.672,4.107-4.034,6.778c-0.762,0.771-1.112,1.017-1.529,1.017c-0.207,0-0.52-0.246-0.52-0.946V4.224
        c0-0.846-0.231-1.22-0.926-1.22H8.442c-0.521,0-0.834,0.391-0.834,0.762c0,0.801,1.182,0.981,1.304,3.23v4.881
        c0,1.072-0.191,1.263-0.607,1.263c-1.113,0-3.818-4.125-5.423-8.851C2.568,3.373,2.251,3,1.412,3h-3.285C-2.81,3-3,3.447-3,3.938
        c0,0.877,1.115,5.232,5.182,10.992c2.712,3.934,6.533,6.066,10.009,6.066c2.086,0,2.344-0.477,2.344-1.292v-2.969
        c0-0.949,0.2-1.135,0.859-1.135c0.488,0,1.322,0.244,3.268,2.14C20.889,19.991,21.254,21,22.507,21h3.282
        c0.937,0,1.406-0.476,1.134-1.412c-0.291-0.928-1.356-2.278-2.766-3.881c-0.765-0.915-1.915-1.898-2.261-2.39
        c-0.488-0.63-0.347-0.916,0-1.475C21.896,11.843,25.895,6.154,26.313,4.224z"/>
      </svg>
    `
  },
  { id: 'youtube',
    title: 'YouTube',
    link: 'https://vk.com/tsn_print',
    content: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 -2 32 32">
      <path fill="#E52D27" d="M30.945,9.9c0,0-0.299-2.102-1.213-3.028c-1.158-1.215-2.46-1.221-3.054-1.292
        c-4.271-0.308-10.673-0.308-10.673-0.308h-0.012c0,0-6.401,0-10.672,0.308C4.728,5.651,3.426,5.657,2.268,6.873
        C1.354,7.798,1.056,9.9,1.056,9.9s-0.305,2.467-0.305,4.937v2.314c0,2.469,0.305,4.936,0.305,4.936s0.298,2.103,1.212,3.027
        c1.161,1.216,2.685,1.177,3.362,1.305c2.439,0.233,10.371,0.309,10.371,0.309s6.407-0.009,10.678-0.319
        c0.597-0.071,1.896-0.078,3.054-1.294c0.914-0.925,1.213-3.027,1.213-3.027s0.304-2.47,0.304-4.936v-2.314
        C31.249,12.367,30.945,9.9,30.945,9.9z"/>
      <path fill="#FFFFFF" d="M12.851,19.955l8.24-4.271l-8.24-4.3V19.955z"/>
      <polygon fill="#FFFFFF" points="12.851,19.955 12.851,11.385 21.091,15.685 "/>
      <path fill="#E3DCDC" d="M12.851,11.385l7.226,4.825l1.015-0.525L12.851,11.385z"/>
      </svg>
    `
  }
]
export default {
  data () {
    return {
      logoArray: logoArray,
      menuItems: [
        { icon: 'home', title: 'О компании'
        },
        { icon: 'new_releases', title: 'Новости'
        },
        { icon: 'rate_review', title: 'Отзывы'
        },
        { icon: 'sort_by_alpha', title: 'Продукция от А до Я'
        },
        { icon: 'help', title: 'Как заказать'
        },
        { icon: 'save_alt', title: 'Требования к макетам'
        },
        { icon: 'location_on', title: 'Контакты'
        }
      ],
      partItems: [
        { icon: '', title: 'Флажная продукция', description: 'Печать фирменных, государственных, ведомственных, спортивных и других флагов и знамен любого размера.' },
        { icon: '', title: 'Транспаранты и растяжки', description: 'Для агитационных, праздничных и спортивных мероприятий.' },
        { icon: '', title: 'Корпоративная и промо одежда', description: 'Пошив галстуков, платков, шарфов, бандан, футболок и бейсболок, промо-накидок, жилетов, фартуков.' },
        { icon: '', title: 'Широкоформатная печать на ткани', description: 'Изготовление штор, занавесов, ролл штор с фото, покрывал, скатертей...' },
        { icon: '', title: 'Широкоформатная печать', description: 'Фотообои на стену, баннеры, плакаты, фотопечать на ткани.' },
        { icon: '', title: 'Флагштоки', description: 'Флагштоков мобильных, флагштоков-мачт, фасадных, настольных, автомобильных и офисных.' },
        { icon: '', title: 'Подарки', description: 'Футболки, подушки, пазлы, тарелки, кружки, подарочные мешочки, календари на ткани, сумки.' },
        { icon: '', title: 'Печать наклеек', description: 'На шампанское, на упаковку, на продукцию.' },
        { icon: '', title: 'Наградная продукция', description: 'Ленты мисс, ленты выпускника, вымпелы.' },
        { icon: '', title: 'Для спорта и тимбилдинга', description: 'Стартовые майки, спортивные номера, волчатники, нанесение на спортивную форму.' },
        { icon: '', title: 'Мобильные стенды', description: 'Ролл-ап стенды, X-стенды, L-стенды' },
        { icon: '', title: 'Геральдика', description: 'Гербы, штандарты, знамена.' }
      ]
    }
  }
}
</script>

<style scoped>
</style>