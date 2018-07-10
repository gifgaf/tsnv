<template>
<div>
  <v-footer height="100%" class='primary'>
    <v-container grid-list-md class="footer_maxsize">
      <v-layout row wrap>
        <v-flex xs12 sm9 class="white--text">
        <img src="/static/tsn-logo.svg" alt="logo" class="mr-2"><br>
        <strong>(812) 335-86-61</strong>, Россия, 191014,  Санкт-Петербург, ул. Литовская, 8<br class='hidden-xs-and-up'>
        <strong>Время работы:</strong> пн-пт, с 10:00 до 18:00 (без обеда)<br>
        <strong>Выдача заказов:</strong> с 09:00 до 19:00
        </v-flex>
        <v-flex xs12 sm3>
          <v-text-field 
          placeholder="Поиск"
          append-icon="search"
          id="search"
          flat
          solo
          clearable
          light
          key="search"
          v-model="search"
          ref="search"
          >
          </v-text-field>
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
        <v-flex xs12 text-xs-center>
        <img src="/static/tsn-logo-b.svg" alt="ищите нас в космосе">
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
  <div class="bottom__footer">
    &copy;1992-2018 Компания ТСН. При копировании материалов сайта, активная  ссылка на www.tsnv.ru обязательна<br>
    Условия использования | Политика конфиденциальности
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
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