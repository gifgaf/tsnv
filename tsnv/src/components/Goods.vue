<template>
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
      <v-list-group
        v-for="item in popmenuItems"
        v-model="item.active"
        :key="item.title"
        :append-icon="item.append"
        ripple
        class="secondary mb-1 elevation-1"
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
            <v-icon>{{ subItem.icon }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      popmenuItems: [
        {
          icon: 'local_activity',
          title: 'Банданы',
          append: ''
        },
        {
          icon: '',
          title: 'Баннеры',
          append: ''
        },
        {
          icon: 'local_activity',
          title: 'Флаги',
          items: [
            { title: 'Флаги на флагштоки' },
            { title: 'Ручные флаги' },
            { title: 'Флаги на стену' },
            { title: 'Настольные флаги' },
            { title: 'Знамена' },
            { title: 'Мобильные флаги' },
            { title: 'Флажки на палочке' },
            { title: 'Гирлянды из флагов' },
            { title: 'Флаги расцвечивания ' }
          ]
        },
        {
          icon: 'local_activity',
          title: 'Футболки с логотипом',
          append: ''
        },
        {
          icon: 'local_activity',
          title: 'Фартуки',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          icon: 'local_activity',
          title: 'Шарфы',
          append: ''
        },
        {
          icon: 'local_activity',
          title: 'Этикетки на бутылки',
          append: ''
        },
        {
          icon: 'local_activity',
          title: 'блэкджек со шлюхами',
          append: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>