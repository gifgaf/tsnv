<template>
    <v-dialog v-model="dialog" origin="top right" max-width="400px">
      <v-btn fab icon small @click.native="dialog = false" class="close_icon secondary black--text">
        <v-icon>close</v-icon>
      </v-btn>
      <v-card>
        <v-container grid-list-lg>
          <v-layout wrap>
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
        <v-btn class="primary noupper" large flat @click="dialog = false">Перезвоните мне</v-btn>
        </v-card-actions>
      </v-card>
      <v-btn round flat class="primary noupper" slot="activator">
        <v-icon left class="secondary--text">phone_callback</v-icon>
        Перезвоните мне
      </v-btn>
  </v-dialog>
</template>


<script>
export default {
  data () {
    return {
      dialog: false,
      terms: false,
      title: '',
      phonemask: '(###) ### - ####',
      patronphone: '',
      rules: {
        required: (value) => !!value || 'Обязательное поле.'
      }
    }
  }
}
</script>

<style scoped>
.tabs__div{ text-transform: unset!important;}
.radio-group .input-group{display: inline-block; width: 192px;}
.card__actions {justify-content: center;}
.container.grid-list-lg .layout .flex{padding: 0 8px;}
.close_icon{ position: absolute;right: 0%; top:0%; z-index: 1;}
.icon{font-size: 24px!important;}
.terms{ font-size: 14px!important; }

</style>