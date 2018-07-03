<template>
  <v-layout wrap>
    <v-flex xs12 text-xs-center>
      <h1 class="primary--text">Новости</h1>
    </v-flex>
    <v-flex xs12
      v-for="item in news"
      :key="item.newsid"
      >
      <v-card color="" class="">
        <div class="headline mb-2 white--text">{{ item.title }}</div>
        <div class="newsdate ml-3">{{ item.date }}</div>
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex xs12 md4 v-if="item.picsrc">
              <v-card-media
                :src="item.picsrc"
                height="205px"
                contain
              ></v-card-media>
            </v-flex>
            <v-flex xs12 md8>
              <v-card-text>
                {{ item.description }}
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-pagination :length="4" v-model="page" circle></v-pagination>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      page: 1,
      news: [
        {newsid: 1, date: '15 мая 2018', title: 'Лидер Северной Кореи Ким Чен Ын пристрелил на месте фотографа', description: 'Лидер Северной Кореи Ким Чен Ын пристрелил на месте фотографа, который намеревался сделать снимок его жены Ли Соль Чу и супруги президента Южной Кореи Ким Чжон Сук. Как отмечает Fox News, инцидент произошел 27 апреля во время приема в "Доме мира", который находится в южной части демилитаризованной зоны. На видео заметно, как фоторепортер преграждает путь женщинам, чтобы сделать снимок. В этот момент северокорейский лидер выхватил автомат и расстрелял журналиста в спину.', picsrc: '/static/news_img/north-korea.jpg'},
        {newsid: 2, date: '25 апреля', title: 'В Москве впервые обнаружили очаг клещевого энцефалита', description: 'В столице впервые обнаружен вирус клещевого энцефалита, его очаг выявлен в лесопарке в Крылатском. Об этом свидетельствует доклад научных сотрудников Центрального НИИ эпидемиологии Роспотребнадзора, сообщают "Известия". Согласно исследованию, в этой зоне обитают инфицированные клещи и млекопитающие. По мнению экспертов, вирус мог появиться из-за птиц.', picsrc: ''},
        {newsid: 3, date: '1 марта', title: 'Путин подписал указ о повышении пенсий', description: 'Российский президент Владимир Путин неоднократно заострял внимание на проблемах, с которыми сталкиваются пенсионеры в нашей стране. В первую очередь он указывал на недостаточную поддержку таких граждан, что отражается на их материальном уровне.', picsrc: '/static/news_img/portrait.jpg'}
      ]
    })
  }
</script>

<style scoped>
.newsdate{
  font-size: 90%;
  /*border-radius: 0 0 0.5rem 0.5rem;*/
  color: rgba(0,0,0,.7)
}
.headline{
  position: relative;
  font-size: 20px!important;
  padding: 0 16px;
  background: #060084;
  margin-left: -8px;
}
.headline::before{
  content: ''; 
  position: absolute;
  left: 0px; bottom: -8px;
  border: 4px solid transparent;
  border-top: 4px solid #000;
  border-right: 4px solid #000;}
.layout.row{
  flex-direction: row-reverse;
}
.layout{
  justify-content: center;
}

</style>