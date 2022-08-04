<template>
  <div class="contacts">
    <h1 class="contacts-title">Контакты</h1>
    <div class="contacts-title-stores">
      <div class="contacts-stores">
        <ContactsStoreCard
            v-for="card in cards"
            :key="card.id"
            :type="card.type"
            :city="card.city"
            :address="card.address"
            :website="card.website"
            :email="card.email"
            :number="card.number"></ContactsStoreCard>
      </div>
      <div id="map" ref="myId"></div>
    </div>
  </div>
</template>

<script>
import ContactsStoreCard from "../contacts/ContactsStoreCard";
import { Loader } from "@googlemaps/js-api-loader";

export default {
  name: "Contacts-page",
  components: {
    ContactsStoreCard
  },
  data() {
    return {
      cards: [
        { type: 'Магазин', city: 'Кишинев', address: 'Stefan cel Mare St 134/1', website: 'shop.com', email: 'shop@gmail.com', number: '+373 4545 3860', id: 1 },
        { type: 'Пункт выдачи', city: 'Кишинев' , address: 'Stefan cel Mare St 15/2', website: 'point.com', email: 'point@gmail.com', number: '+373 9945 3902', id: 2 },
        { type: 'Магазин', city: 'Кишинев' , address: 'Stefan cel Mare St 133/10', website: 'shop.com', email: 'shop@gmail.com', number: '+373 4545 3020', id: 3 },
        { type: 'Магазин', city: 'Кишинев' , address: 'Stefan cel Mare St 10/1', website: 'shop.com', email: 'shop@gmail.com', number: '+373 2535 3390', id: 4 },
        { type: 'Офис', city: 'Кишинев' , address: 'Stefan cel Mare St 68/2', website: 'office.com', email: 'office@gmail.com', number: '+373 4445 3960', id: 5 },
        { type: 'Филиал', city: 'Кишинев' , address: 'Stefan cel Mare St 89/6', website: 'filial.com', email: 'filial@gmail.com', number: '+373 1235 3860', id: 6 },
        { type: 'Филиал', city: 'Кишинев' , address: 'Stefan cel Mare St 43/21', website: 'filial.com', email: 'filial@gmail.com', number: '+373 3215 3860', id: 7 },
      ],
      map: null,
    }
  },
  methods: {
    initMap() {
      const map = this.$refs.myId
      // eslint-disable-next-line no-undef
      const centerOfMap = new google.maps.LatLng(47, 28.86);
      // eslint-disable-next-line no-undef
      this.map = new google.maps.Map(map, {
        center: centerOfMap,
        zoom: 12,
      })
    }
  },
  mounted() {

    // eslint-disable-next-line no-undef
    const loader = new Loader({
      apiKey: "AIzaSyBep00Ryhyqv9Ao-z4YHapbLj4_4qmZuX4&libraries=drawing&callback=initMap&v=weekly",
      version: "weekly",
    })

    loader.load().then(() => {
      this.initMap()
    })
  }
}
</script>

<style scoped>
  .contacts {
    margin-bottom: 30px;
  }


  .contacts-stores {
    overflow-y: scroll;
    height: 1010px;
  }

  .contacts-stores::-webkit-scrollbar {
    width: 7px;
  }

  .contacts-stores::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 20px;
  }

  .contacts-stores::-webkit-scrollbar-thumb:hover {
    background: black;
    border-radius: 30px;
  }

  .contacts-title-stores {
    display: flex;
    flex-direction: row;
  }

  .contacts-title {
    margin: 0 0 40px 40px;
  }

  #map {
    width: 870px;
    height: 1010px;
    margin-left: 30px;
  }
</style>