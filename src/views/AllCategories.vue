<template>
  <div class="subjects">
    <h1 class="mt-4">10 latest news</h1>

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
          <tr v-for="news1 in news" :key="news1.id" @click="selectedNews = news1">
            <th scope="row">{{ news1.id }}</th>
            <td>{{ news1.naslov }}</td>
            <td>{{ news1.tekst | shortText}}</td>
            <td>{{ new Date(news1.vremeKreiranja).toDateString() }}</td>
            <td>{{ news1.brojPoseta }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-6">
        <news v-if="selectedNews" :news1="selectedNews"></news>
      </div>
    </div>
  </div>
</template>

<script>
import News from "../components/News";

export default {
  comments: {News},
  name: "AllCategories",
  filters: {
    shortText(value) {
      if (value.length < 30) {
        return value;
      }
      return value.slice(0, 30) + '...'
    }
  },
  data() {
    return {
      selectedNews: null,
      news: []
    }
  },
  mounted() {
    this.$axios.get(`/api/homePage/${this.$route.params.kategory}`).then((response) => {
      this.news = response.data;
    });
  },
}
</script>