<template>
  <div class="store-card">
    <div class="store-card-description">
      <span class="card-type">{{ type }}</span>
      <div>
        <span class="card-address">Молдова, {{ city }}, {{ address }}</span>
      </div>
      <span class="card-contacts">{{ website }}</span>
      <span class="card-contacts">{{ email }}</span>
      <span class="card-number">{{ number }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsStoreCard",
  props: {
    type: String,
    city: String,
    address: String,
    website: String,
    email: String,
    number: String,
    titleColor: String,
  }
}
</script>

<style scoped>
  .store-card {
    width: 545px;
    height: 229px;
    background-color: #F3F3F3;
    margin: 0 5px 32px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .store-card-description {
    display: flex;
    flex-direction: column;
    width: 75%;
  }

  .store-card:last-child {
    margin: 0 0 0 40px;
  }

  .card-type {
    color: #828282;
    font-size: 18px;
    line-height: 36px;
  }

  .card-address {
    color: #000000;
    font-size: 16px;
    line-height: 36px;
    font-weight: bold;
  }

  .card-contacts {
    color: #D785A1;
    font-size: 16px;
    line-height: 36px;
  }

  .card-number {
    color: #000000;
    font-size: 24px;
    line-height: 36px;
  }
</style>