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
                    label="Ваш телефон"
                    required
                    prepend-icon="phone"
                    hint="xxx xxxxxxx"
                    :mask="mask"
                    single-line
                    :rules="[rules.required]"
                    v-model="patronphone"
                    hide-details
                  ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="vimpelModel"
                      v-model="vimpelmodel"
                      label="Модель вымпела"
                      single-line
                      hide-details
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                    label="Количество вымпелов"
                    hint="Сколько вымпелов тербуется" 
                    v-model="vimpelamount"
                    hide-details
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="vimpelSize"
                      v-model="vimpelsize"
                      label="Размер вымпела"
                      single-line
                      hide-details
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="vimpelStitch"
                      v-model="vimpelstitch"
                      label="Обстрочка вымпела"
                      single-line
                      hide-details
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="vimpelFurniture"
                      v-model="vimpelfurniture"
                      label="Цвет шнура и\или кистей"
                      single-line
                      hide-details
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="vimpelPrint"
                      v-model="vimpelprint"
                      label="Количество сторон для печати"
                      single-line
                      hide-details
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="vimpelShape"
                      v-model="vimpelshape"
                      label="Форма вымпела"
                      single-line
                      hide-details
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field 
                    type="file"
                    label="Прикрепить файл макета"
                    hint="ваш макет" 
                    v-model="vimpeldummy"
                    hide-details
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="vimpelPayment"
                      v-model="vimpelpayment"
                      label="Оплата"
                      single-line
                      hide-details
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                    label="Прикрепить реквизиты"
                    hint="ваши реквизиты" 
                    v-model="vimpeldummy"
                    hide-details
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-text-field
                    label="Желаемая дата изготовления"
                    hint="К какой дате необходимо изготовить вымпел" 
                    v-model="vimpeldata"
                    hide-details
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md6>
                    <v-select
                      :items="vimpelDelivery"
                      v-model="vimpeldelivery"
                      label="Доставка"
                      single-line
                      hide-details
                    ></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                    label="Адрес доставки"
                    hint="Ваш адрес" 
                    v-model="vimpeladress"
                    hide-details
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12>              
                    <v-text-field 
                      label="Комментарий к заказу" 
                      required
                      hint="дополнительно"
                      :rules="[rules.required]"
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
      mask: '(###) ### - ####',
      radioGroup: 1,
      title: '',
      email: '',
      patronphone: '',
      vimpelcomments: '',
      vimpelmodel: null,
      vimpelamount: null,
      vimpelsize: null,
      vimpeldata: null,
      vimpelshape: null,
      vimpelstitch: null,
      vimpelprint: null,
      vimpelfurniture: null,
      vimpeldelivery: null,
      vimpeldummy: null,
      vimpeladress: null,
      vimpelpayment: null,
      vimpelpaymentdetails: null,
      rules: {
        required: (value) => !!value || 'Обязательное поле.',
        email: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'E-mail must be valid'
      },
      vimpelModel: ['Атласный твердый с прокладкой', 'Атласный мягкий', 'Бумажный ламинированный'],
      vimpelSize: ['10х15 см', '15х21 см', '21х30 см', '30х40 см', 'Свой размер укажу в комментарии'],
      vimpelStitch: ['обстрочка шнуром', 'дополнение кистями в цвет шнура', 'обстрочка шнуром + дополнение кистями (серебро и золото)', 'дополнение бахромой'],
      vimpelPrint: ['Одна сторона', 'Две стороны (+20% к стоимости)'],
      vimpelShape: ['Прямоугольный', 'Пятиугольный', 'Пятиугольный1', 'Треугольный', 'Пятиугольный2', 'Прямоугольный'],
      vimpelFurniture: ['красный', 'желтый', 'green'],
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
</style>