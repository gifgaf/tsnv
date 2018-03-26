<template>
  <v-app>
    <v-navigation-drawer class="secondary mt-56"
      temporary
      v-model="drawer"
      absolute>
    <v-list dense>
      <v-list-tile v-for="item in menuItems" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon left>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
      <v-divider ></v-divider>
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
      <v-toolbar-title class="secondary--text"><h1>ТСНв</h1></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title">
        <v-icon left class=" secondary--text">{{ item.icon }}</v-icon>{{ item.title }}</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="secondary hidden-sm-and-up" light @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <main>
      <h1 class="text-xs-center">Добро пожаловать на сайт предприятия «ТСН» !</h1>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems: [
        { icon: 'home', title: 'О компании' },
        { icon: 'flag', title: 'Продукция от А до Я' },
        { icon: 'mail_outline', title: 'Как заказать' },
        { icon: 'attach_file', title: 'Требования к макетам' },
        { icon: 'contacts', title: 'Контакты' }
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
      ]
    }
  }
}
</script>
