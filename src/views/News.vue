<template>
  <div class="subjects">

    <div class="row">
      <div class="col-4">
        <h1>10 latest news</h1>
      </div>
      <div class="col-8 my-auto">
        <form @submit.prevent="categoryNews">
          <input type="text">
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

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
            <td>{{ news1.tekst | shortText}}</td>
            <td>{{ new Date(news1.vremeKreiranja).toDateString() }}</td>
            <td>{{ news1.brojPoseta }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <h1>Select category</h1>
      <form @submit.prevent="categoryNews">
        <select v-model='idCategory' class="form-select" aria-label="Default select example">
          <option v-for="category in categories" :key = "category.id" v-bind:value=category.id> {{ category.ime }}</option>
        </select>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import News from "../components/News";

export default {
  components: News,
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
      idCategory: 1,
      news: [],
      categories: []
    }
  },
  methods:{
    categoryNews(){
      console.log(this.idCategory)
      this.$router.push({
        name: 'AllCategories',
        params: { kategory: this.idCategory }
      })
    },
    getNews(id){
      this.$router.push(`/homePage/wholeNews/${id}`);
    }
  },
  mounted() {
    this.$axios.get('/api/homePage/latestNews').then((response) => {
      this.news = response.data;
    });
    this.$axios.get("/api/homePage/allCategories").then((response) => {
      this.categories = response.data;
    });
  },
}
</script>
