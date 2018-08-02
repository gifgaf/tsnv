<template>
  <v-dialog v-model="dialog" origin="top center" max-width="800px">
    <v-btn fab icon small @click.native="dialog = false" class="close_icon secondary black--text">
      <v-icon>close</v-icon>
    </v-btn>
    <v-card>
      <v-container grid-list-lg>
        <v-layout wrap>
          <v-flex xs12 class="mt-0 mb-3">
            <v-select
              class="select_title"
              :items="products"
              v-model="a1"
              label="Выберите товар"
              combobox
             ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-text-field
            label="Ваше имя"
            required
            prepend-icon="person"
            hint="Ваше имя"
            v-model="title"
            :rules="[rules.required]"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field 
            label="Email"
            required
            prepend-icon="email"
            hint="емайл"
            v-model="email"
            :rules="[rules.required, rules.email]"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
          <v-text-field
            placeholder="Ваш телефон*"
            required
            prepend-icon="phone"
            hint="xxx xxxxxxx"
            :mask="phonemask"
            :rules="[rules.required]"
            v-model="patronphone"
            prefix="+7"
          ></v-text-field>
          </v-flex>
          <v-flex xs12 text-xs-center>
          <h4>Свойства вымпела</h4>
          </v-flex>
          <v-flex xs12>
            <v-select
             label="Модель вымпела"
             :items="vimpelModel"
             v-model="vimpelmodel"
            ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-select
              label="Форма вымпела"
              :items="vimpelShape"
              v-model="vimpelshape"
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
          <v-flex xs12>
            <v-text-field
            label="Количество вымпелов"
            hint="Сколько вымпелов тербуется" 
            v-model="vimpelamount"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-select
              label="Размер вымпела"
              :items="vimpelSize"
              v-model="vimpelsize"
              combobox
            ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-select
              label="Обстрочка вымпела"
              :items="vimpelStitch"
              v-model="vimpelstitch"
            ></v-select>
          </v-flex>
          <v-flex xs12>
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
          <v-flex xs12>
            <v-radio-group column>
              <v-radio label="Одна сторона" value="radio-1" color="primary"></v-radio>
              <v-radio label="Две стороны (+20% к стоимости)" value="radio-2" color="primary"></v-radio>
            </v-radio-group>
          </v-flex>
          <v-flex xs12 text-xs-center>
            <h4>Доставка</h4>
          </v-flex>
          <v-flex xs12>
            <v-select
              label="Выберите вид доставки"
              :items="vimpelDelivery"
              v-model="vimpeldelivery"
              hint="Способ доставки"
            ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-text-field
            label="Адрес доставки"
            hint="Ваш адрес"
            v-model="vimpeladress"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 text-xs-center>
            <h4>Оплата</h4>
          </v-flex>
          <v-flex xs12>
            <v-select
              label="Оплата"
              :items="vimpelPayment"
              v-model="vimpelpayment"
              hint="Оплата" 
            ></v-select>
          </v-flex>
          <v-flex xs12>
            <v-text-field
            label="Добавить реквизиты"
            hint="ваши реквизиты" 
            v-model="vimpeldummy"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 text-xs-center>
            <h4>Дополнительно</h4>
          </v-flex>
          <v-flex xs12>
            <v-text-field 
              label="Комментарий к заказу" 
              hint="дополнительно"
              multi-line
              rows="3"
              v-model="vimpelpaymentdetails"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
            type="file"
            label="Прикрепить файл макета"
            hint="ваш макет"
            v-model="vimpelfile"
            prepend-icon="attach_file"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
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
              <v-date-picker v-model="vimpeldate"  locale="ru-RU" no-title scrolautosave>
              </v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex xs12 class="mt-3">
            <v-checkbox
              v-model="terms"
              color="green"
            >
            <div slot="label" @click.stop="" class="terms">
              Вы согласны с
              <a href="javascript:;" @click.stop="terms = true">Условиями обработки персональных данных</a>
            </div>
            </v-checkbox>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions class="pb-5">
        <v-btn class="primary noupper" large flat @click="dialog = false">Заказать</v-btn>
      </v-card-actions>
    </v-card>
    <v-btn round block dark class="noupper px-2" color="success" slot="activator">Заказать</v-btn>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      terms: false,
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
      a1: null,
      rules: {
        required: (value) => !!value || 'Обязательное поле.',
        email: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'E-mail must be valid'
      },
      vimpelModel: ['Атласный твердый с прокладкой', 'Атласный мягкий', 'Бумажный ламинированный'],
      vimpelSize: ['10х15 см', '15х21 см', '21х30 см', '30х40 см', 'Укажите размер: '],
      vimpelStitch: ['обстрочка шнуром', 'дополнение кистями в цвет шнура', 'обстрочка шнуром + дополнение кистями (серебро и золото)', 'дополнение бахромой'],
      vimpelPrint: ['Одна сторона', 'Две стороны (+20% к стоимости)'],
      vimpelShape: [
        {icon: 'bookmark', title: 'Прямоугольный', avatar: '/static/vimpel/vf_01.svg'},
        {icon: 'flag', title: 'Пятиугольный-1', avatar: '/static/vimpel/vf_02.svg'},
        {icon: 'flag', title: 'Пятиугольный-2', avatar: '/static/vimpel/vf_03.svg'},
        {icon: 'flag', title: 'Пятиугольный-3', avatar: '/static/vimpel/vf_04.svg'},
        {icon: 'flag', title: 'Треугольный', avatar: '/static/vimpel/vf_05.svg'},
        {icon: 'flag', title: 'Закругленный', avatar: '/static/vimpel/vf_06.svg'},
        {icon: 'flag', title: 'Щит', avatar: '/static/vimpel/vf_07.svg'},
        {icon: 'flag', title: 'Вырезной', avatar: '/static/vimpel/vf_08.svg'},
        {icon: 'flag', title: 'Герб', avatar: '/static/vimpel/vf_09.svg'}
      ],
      vimpelFurniture: [
        {icon: 'flag', title: 'золотой', avatar: '/static/vimpel/goldcord.png'},
        {icon: 'flag', title: 'желтый', avatar: '/static/vimpel/yellowcord.png'},
        {icon: 'flag', title: 'золотой', avatar: '/static/vimpel/gold1cord.png'},
        {icon: 'flag', title: 'зеленый', avatar: '/static/vimpel/greencord.png'}
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
      ],
      products: [ 'Банданы', 'Баннеры', 'Бейсболки', 'Вымпел', 'Флаги', 'Флажки на палочке', 'Флагштоки', 'Фотообои', 'Фото на подарки', 'Фотошторы', 'Футболки с логотипом'
      ]
    }
  }
}
</script>

<style scoped>
.dialog__container{width: 100%; position: relative;}
.tabs__div{ text-transform: unset!important;}
.radio-group .input-group{display: inline-block;}
.card__actions {justify-content: center;}
.container.grid-list-lg .layout .flex{padding: 0 8px;}

.tabs__item {
  background-color: #060084!important;
}

.close_icon{ position: absolute; right: 0%; top:0%; z-index: 1;}
.select_title {font-size: 24px!important;/*border-bottom: 1px solid #060084; background-color: #ECEFF1!important;*/}
.icon{font-size: 24px!important;}
.terms{ font-size: 14px!important;}

</style>