<template>
    <div class="portfolio">
        <div class="container portfolio-wrapper">
            <SideNav></SideNav>
            <Display></Display>
        </div>
    </div>
</template>
  



<script>
// import Something from '@/components/Something.vue'
import SideNav from '@/components/SideNav.vue'
import Display from '@/components/Display.vue'
export default {
    name: 'Portfolio',
    components: {
        SideNav, Display
    },
    data() {
        return {

        }
    }
}
</script>
  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.portfolio {
    .portfolio-wrapper {
        display: flex;
    }
}
</style>
  