<template>
  <Portfolio></Portfolio>
</template>

<script>
import Portfolio from '@/views/Portfolio.vue'
export default {
  name: 'App',
  components: {
    Portfolio
  }
}
</script>

<style lang="scss">
body {
  background-color: #121220!important;
}

p {
  margin-bottom: 0px!important;
}

.regular-text {
  font-size: 16px;
  opacity: .6;
  color: #E2E8F0;
}

.title-text {
  font-size: 20px;
  opacity: 1;
  color: #E2E8F0;
  text-transform: uppercase;
  font-weight: 500;
  padding-bottom: 15px;
}
</style>
