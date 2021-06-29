<template>
  <div class="subjects">

    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Naslov</th>
            <th scope="col">Tekst</th>
            <th scope="col">Vreme kreiranja</th>
            <th scope="col">Broj poseta</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="news1 in news" :key="news1.id" @click="getNews(news1.id)">
            <th scope="row">{{ news1.id }}</th>
            <td>{{ news1.naslov }}</td>
            <td>{{ news1.tekst }}</td>
            <td>{{ new Date(news1.vremeKreiranja).toDateString() }}</td>
            <td>{{ news1.brojPoseta }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import News from "../components/News";

export default {
  name: "SearchedNews",
  components: News,
  data() {
    return {
      news: {},
    }
  },
  created() {
    this.$axios.get(`/api/news/${this.$route.params.tekst}`).then((response) => {
      this.news = response.data;
    });
  }
}
</script>

<style scoped>

</style>