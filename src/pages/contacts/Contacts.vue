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
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
import ContactsStoreCard from "@/pages/contacts/ContactsStoreCard";

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
      ]
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    mapboxgl.accessToken = 'pk.eyJ1IjoibmF0YW5lciIsImEiOiJjbDYzcHRncjcwaHZ2M2JvNWQ3a3Q2ampyIn0.hRfyPyAqAo2vb-yhIW8ZWQ'
    // eslint-disable-next-line no-undef
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [28.835, 47.012670],
      zoom: 12.5,
      projection: 'globe'
    });
    // eslint-disable-next-line no-undef
    new mapboxgl.Marker({ color: 'red' })
        .setLngLat([28.830, 47.021])
        .addTo(map);
    // eslint-disable-next-line no-undef
    new mapboxgl.Marker({ color: 'blue' })
        .setLngLat([28.830, 47.024])
        .addTo(map);
    // eslint-disable-next-line no-undef
    new mapboxgl.Marker({ color: 'yellow' })
        .setLngLat([28.835, 47.02])
        .addTo(map);
    // eslint-disable-next-line no-undef
    new mapboxgl.Marker({ color: 'green' })
        .setLngLat([28.835, 47.023])
        .addTo(map);
    // eslint-disable-next-line no-undef
    new mapboxgl.Marker({ color: '#30d5c8' })
        .setLngLat([28.830, 47.029])
        .addTo(map);
    // eslint-disable-next-line no-undef
    new mapboxgl.Marker({ color: 'purple' })
        .setLngLat([28.828, 47.028])
        .addTo(map);
    // eslint-disable-next-line no-undef
    new mapboxgl.Marker({ color: '#D785A1' })
        .setLngLat([28.824, 47.027])
        .addTo(map);

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