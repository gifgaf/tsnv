<template>
    <v-dialog v-model="dialog" origin="top left" max-width="800px">
      <v-tabs icons-and-text centered  show-arrows class="noupper" color="blue-grey lighten-5" >
        <v-tabs-slider color="primary"></v-tabs-slider>
        <v-tab class="primary--text" href="#tab-1" >
          <h3>Заказать вымпел</h3>
        </v-tab>
        <v-tab class="primary--text" href="#tab-2">
          <h3>Выбор товара</h3>
        </v-tab>
        <v-tab-item id='tab-1'>
          <v-card>
              <v-container grid-list-lg>
                <v-layout wrap>
                   <v-flex xs12 sm6 md6>
                    <v-select
                      label="Модель вымпела"
                      :items="vimpelModel"
                      v-model="vimpelmodel"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                    label="Количество вымпелов"
                    hint="Сколько вымпелов тербуется" 
                    v-model="vimpelamount"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      label="Размер вымпела"
                      :items="vimpelSize"
                      v-model="vimpelsize"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      label="Обстрочка вымпела"
                      :items="vimpelStitch"
                      v-model="vimpelstitch"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      label="Цвет шнура и\или кистей"
                      :items="vimpelFurniture"
                      v-model="vimpelfurniture"
                    >
                      <template slot="selection" slot-scope="data">
                        <v-list-tile-avatar>
                          <img :src="data.item.avatar">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title app> {{ data.item.title }} </v-list-tile-title>
                        </v-list-tile-content>
                      </template>
                      <template slot="item" slot-scope="data">
                        <v-list-tile-content>
                          <v-list-tile-title app> {{ data.item.title }} </v-list-tile-title>
                        </v-list-tile-content>                    
                        <v-list-tile-avatar>
                          <img :src="data.item.avatar">
                        </v-list-tile-avatar>
                      </template>
                      </v-select>

                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      label="Количество сторон для печати"
                      :items="vimpelPrint"
                      v-model="vimpelprint"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      label="Форма вымпела"
                      :items="vimpelShape"
                      v-model="vimpelshape"
                    >
                      <template slot="selection" slot-scope="data">
                          <v-list-tile-content>
                            <v-list-tile-title app> {{ data.item.item }} </v-list-tile-title>
                          </v-list-tile-content>
                          <v-list-tile-action>
                            <v-icon> {{ data.item.icon }} </v-icon>
                          </v-list-tile-action>
                      </template>
                      <template slot="item" slot-scope="data">
                        <template>
                          <v-list-tile-content>
                            <v-list-tile-title app> {{ data.item.item }} </v-list-tile-title>
                          </v-list-tile-content>
                          <v-list-tile-action>
                            <v-icon> {{ data.item.icon }} </v-icon>
                          </v-list-tile-action>
                        </template>
                      </template>  
                    </v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field 
                    type="file"
                    label="Прикрепить файл макета"
                    hint="ваш макет" 
                    v-model="vimpelfile"
                    multiple
                    prepend-icon="attach_file"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-menu
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      :nudge-right="0"
                      max-width="290px"
                      min-width="290px">
                      <v-text-field
                        slot="activator"
                        label="Желаемая дата изготовления"
                        v-model="vimpeldate"
                        prepend-icon="event"
                        readonly
                        clearable>
                      </v-text-field>
                      <v-date-picker v-model="vimpeldate"  locale="ru-RU" no-title scrollable autosave>
                      </v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      label="Оплата"
                      :items="vimpelPayment"
                      v-model="vimpelpayment"
                      hint="Оплата" 
                    ></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                    label="Прикрепить реквизиты"
                    hint="ваши реквизиты" 
                    v-model="vimpeldummy"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      label="Доставка"
                      :items="vimpelDelivery"
                      v-model="vimpeldelivery"
                      hint="Способ доставки"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                    label="Адрес доставки"
                    hint="Ваш адрес" 
                    v-model="vimpeladress"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                    label="Ваше имя"
                    required 
                    hint="Ваше имя" 
                    v-model="title"
                    :rules="[rules.required]"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field 
                    label="Email"
                    required
                    hint="емайл"
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                  <v-text-field
                    placeholder="Ваш телефон"
                    required
                    prepend-icon="phone"
                    hint="xxx xxxxxxx"
                    :mask="phonemask"
                    :rules="[rules.required]"
                    v-model="patronphone"
                    prefix="+7"
                  ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>              
                    <v-text-field 
                      label="Комментарий к заказу" 
                      hint="дополнительно"
                      v-model="vimpelpaymentdetails"
                    ></v-text-field>
                  </v-flex>
                  <v-checkbox
                    color="success"
                    v-model="terms"
                    label='Согласен(-на) на обработку персональных данных'
                    :rules="[rules.required]"
                  ></v-checkbox>
                </v-layout>
              </v-container>
            <v-card-actions class="pb-5">
              <v-btn class="primary" large flat @click="dialog = false">Отмена</v-btn>
              <v-btn class="primary" large flat @click="dialog = false">Заказать</v-btn>
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
      terms: true,
      phonemask: '(###) ### - ####',
      datemask: '##/##/2018',
      radioGroup: 1,
      title: '',
      email: '',
      patronphone: '',
      vimpelcomments: '',
      vimpelmodel: null,
      vimpelamount: null,
      vimpelsize: null,
      vimpeldate: null,
      vimpelshape: null,
      vimpelstitch: null,
      vimpelprint: null,
      vimpelfurniture: null,
      vimpeldelivery: null,
      vimpeldummy: null,
      vimpeladress: null,
      vimpelpayment: null,
      vimpelpaymentdetails: null,
      vimpelfile: null,
      rules: {
        required: (value) => !!value || 'Обязательное поле.',
        email: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'E-mail must be valid'
      },
      vimpelModel: ['Атласный твердый с прокладкой', 'Атласный мягкий', 'Бумажный ламинированный'],
      vimpelSize: ['10х15 см', '15х21 см', '21х30 см', '30х40 см', 'Указать размер в комментарии'],
      vimpelStitch: ['обстрочка шнуром', 'дополнение кистями в цвет шнура', 'обстрочка шнуром + дополнение кистями (серебро и золото)', 'дополнение бахромой'],
      vimpelPrint: ['Одна сторона', 'Две стороны (+20% к стоимости)'],
      vimpelShape: [
        {icon: 'flag', item: 'Прямоугольный', avatar: ''},
        {icon: 'flag', item: 'Пятиугольный1', avatar: ''},
        {icon: 'flag', item: 'Треугольный', avatar: ''},
        {icon: 'flag', item: 'Пятиугольный2', avatar: ''},
        {icon: 'flag', item: 'Прямоугольный', avatar: ''}
      ],
      vimpelFurniture: [
        {title: 'золотой', avatar: '/static/vimpel/goldcord.png'},
        {title: 'желтый', avatar: '/static/vimpel/yellowcord.png'},
        {title: 'золотой', avatar: '/static/vimpel/gold1cord.png'},
        {title: 'зеленый', avatar: '/static/vimpel/greencord.png'}
      ],
      vimpelDelivery: ['самовывоз', 'доставка по СПб (указать адрес)', 'доставка по России (указать адрес)', 'отправка ТК по России'],
      vimpelPayment: ['б/н - прикрепить реквизиты', 'предоплата наличными в офисе'],
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
.card__actions {justify-content: center;}
.container.grid-list-lg .layout .flex{padding: 0 8px;}
    
</style>