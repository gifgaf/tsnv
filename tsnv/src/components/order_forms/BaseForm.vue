<template>
    <v-dialog v-model="dialog" origin="top left" max-width="800px">
        <v-btn fab icon small @click.native="dialog = false" class="secondary close_icon black--text">
          <v-icon size="24px">close</v-icon>
        </v-btn>
        <v-card>
          <v-container grid-list-lg>
            <v-layout wrap>
              <v-flex xs12 text-xs-center class="my-4">
                <h3>Ваш комментарий</h3>
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
                label="Прикрепить файл"
                hint="ваш файл"
                v-model="file"
                multiple
                prepend-icon="attach_file"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  required
                  multi-line
                  rows="3"
                  label="Ваш комментарий" 
                  hint="дополнительно"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 class="mt-3">
                <v-checkbox
                  v-model="terms"
                  color="green"
                  :rules="[rules.required]"
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
      terms: false,
      phonemask: '(###) ### - ####',
      datemask: '##/##/2018',
      title: '',
      email: '',
      patronphone: '',
      file: null,
      rules: {
        required: (value) => !!value || 'Обязательное поле.',
        email: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'E-mail must be valid'
      }
    }
  }
}
</script>

<style scoped>
.dialog__container{width: 100%;}
.tabs__div{ text-transform: unset!important;}
.card__actions {justify-content: center;}
.container.grid-list-lg .layout .flex{padding: 0 8px;}
.close_icon{ position: absolute; right: 0%; top:0%; z-index: 1;}
.terms{ font-size: 14px!important; }

</style>