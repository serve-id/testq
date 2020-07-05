<template>
  <q-page class="flex flex-center">
    <MyCity :cities="cities" 
    :citiesoptions.sync="cityoptions" 
    @saveme="addCity()"></MyCity>
    <pre>{{cities}}</pre>
  </q-page>
</template> 
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import MyCity from 'components/Selectcities.vue'
export default {
  data() {
    return {
      cities: {
        city: 'Delhi',
        others: '',
        etc: ''
      },
      cityoptions: ['Delhi', 'London', 'NewYork', 'Tokyo', 'Others']
    }
  },
  computed: {
    ...mapGetters('cities', ['getCities'])
  },
  methods: {
    ...mapActions('cities', ['addThisCity']),
    addCity(){
      this.addThisCity(this.cities)
      this.updateCityoptions()
      this.resetCities()
    },
    updateCityoptions(){
      console.log('Where is my City in the State? ', this.getCities)
        let gp = this.cityoptions.concat(this.getCities);
        let unique = [...new Set(gp)];
        this.cityoptions = unique;
    },
    resetCities(){
      this.cities.city = 'Delhi',
      this.cities.others= '',
      this.cities.etc = ''      
    }    
  },
  components: {
    MyCity
  }
}
</script>
