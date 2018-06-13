<template>
    <v-dialog v-model="dialog" origin="top left" max-width="800px">
        <v-btn fab icon small @click.native="dialog = false" class="close_icon primary">
          <v-icon>close</v-icon>
        </v-btn>
        <v-card>
          <v-container grid-list-lg>
            <v-layout wrap>
              <v-flex xs12 text-xs-center class="my-4">
                <h3>Оставить отзыв</h3>
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
              <v-flex xs12 sm6 md6>
                <v-text-field 
                label="Email"
                required
                prepend-icon="email"
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
              <v-flex xs12>
                <v-text-field
                type="file"
                label="Прикрепить файл макета"
                hint="ваш макет"
                v-model="vimpelfile"
                multiple
                prepend-icon="attach_file"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  required
                  multi-line
                  label="Ваш комментарий" 
                  hint="дополнительно"
                  v-model="vimpelpaymentdetails"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 class="mt-3">
                <v-checkbox
                  color="success"
                  v-model="terms"
                  label='Согласен(-на) на обработку персональных данных'
                  :rules="[rules.required]"
                ></v-checkbox>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions class="pb-5">
          <v-btn class="primary noupper" large flat @click="dialog = false">Отмена</v-btn>
          <v-btn class="primary noupper" large flat @click="dialog = false">Отправить</v-btn>
          </v-card-actions>
        </v-card>
      <v-btn round large dark class="noupper" color="primary" slot="activator">Написать отзыв</v-btn>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      rules: {
        required: (value) => !!value || 'Обязательное поле.',
        email: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'E-mail must be valid'
      }
    }
  }
}
</script>

<style scoped>
</style>

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
.tabs__item {
  background-color: #060084!important;
}
.icon{font-size: 32px!important;}
.close_icon{ position: absolute; right: 0%; top: 0%; z-index: 1; margin: 0;}

</style>