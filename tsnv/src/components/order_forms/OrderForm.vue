<template>
    <v-dialog v-model="dialog" origin="top left" max-width="800px">
      <v-tabs icons-and-text centered  show-arrows class="noupper" color="blue-grey lighten-5" >
        <v-tabs-slider color="primary"></v-tabs-slider>
        <v-tab href="#tab-1">
          <h3>Заказать вымпел</h3>
        </v-tab>
        <v-tab href="#tab-2">
          <h3>Выбор товара</h3>
        </v-tab>
        <v-tab-item id='tab-1'>
          <v-card>
              <v-container grid-list-lg>
                <v-layout wrap>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                    label="Ваше имя"
                    required 
                    hint="на Патриса Лумумбу напоминает" 
                    v-model="title"
                    :rules="[rules.required]"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field 
                    label="Email"
                    required
                    hint="за такой имэйл можно и в глаз"
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                  <v-text-field
                    label="Ваш телефон"
                    required
                    prepend-icon="phone"
                    hint="Ты с какова района, чувак"
                    :mask="mask"
                    single-line
                    :rules="[rules.required]"
                    v-model="patronphone"
                  ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>              
                    <v-text-field 
                      label="Комментарий" 
                      required
                      hint="и кнопку не забудь нажать, вомбат"
                      :rules="[rules.required]"
                      v-model="comments"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12> 
                  <v-checkbox 
                     color="success"
                     v-model="terms"
                     label='Я согласен(-на) на обработку персональных данных'
                     :rules="[rules.required]"
                  ></v-checkbox>
                  </v-flex>
                </v-layout>
              </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>
        <v-tab-item id='tab-2'>
          <v-card flat fluid>
            <v-card-text>
              <v-flex xs12 > 
              <v-radio-group v-model="radioGroup" >
              <v-radio 
                color="primary" 
                v-for="item in popmenuItems" :key="item.title"
                :label="item.title"
                :value="item.title"
              ></v-radio>
              </v-radio-group>
              </v-flex>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
      <v-btn round block large dark color="success" slot="activator">Заказать</v-btn>
    </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      terms: false,
      mask: '(###) ### - ####',
      radioGroup: 1,
      title: '',
      email: '',
      patronphone: '',
      comments: '',
      rules: {
        required: (value) => !!value || 'Обязательное поле.',
        email: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'E-mail must be valid'
      },
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

<style scoped>
.dialog__container{width: 100%;}
.tabs__div{ text-transform: unset!important;}
.radio-group .input-group{display: inline-block; width: 192px;}
</style>