<template>
<div>
  <v-footer height="100%" class='primary'>
    <v-container grid-list-md class="footer_maxsize">
      <v-layout row wrap>
        <v-flex  xs12 sm9 class="secondary--text">
        (812) 335-86-61, Россия, 191014,  Санкт-Петербург, ул. Литовская, 8<br>
Время работы: пн-пт, с 10:00 до 18:00 (без обеда). Выдача заказов:  с 09:00 до 19:00
        </v-flex>
        <v-flex  xs12 sm3>
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
        <v-flex xs12 sm3>
            <v-list dark class='primary'>
              <v-list-group
                v-for="item in menuItems"
                :key="item.title"
                :prepend-icon="item.icon"
                no-action
              >
                <v-list-tile slot="activator">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon>{{ subItem.action }}</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list-group>
            </v-list>
          </v-card>
        </v-flex>

      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm3>
        блаблабла04
        </v-flex>
        <v-flex  xs12 sm3>
        блаблабла05
        </v-flex>
        <v-flex  xs12 sm3>
        блаблабла06
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
        { icon: 'home',
          title: 'О компании',
          items: [
            { title: 'Новости' },
            { title: 'Отзывы' }
          ]
        },
        { icon: 'sort_by_alpha',
          title: 'Продукция от А до Я'
        },
        { icon: 'help',
          title: 'Как заказать'
        },
        { icon: 'save_alt',
          title: 'Требования к макетам'
        },
        { icon: 'contacts',
          title: 'Контакты'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>