<template>
    <div class="display">
        <Introduction></Introduction>
        <Education></Education>
        <TechnicalSkills></TechnicalSkills>
        <PersonalSkills></PersonalSkills>
    </div>
</template>
  



<script>
import Introduction from '@/components/Introduction.vue'
import Education from '@/components/Education.vue'
import TechnicalSkills from '@/components/TechnicalSkills.vue'
import PersonalSkills from '@/components/PersonalSkills.vue'
export default {
    name: 'Display',
    components: {
        Introduction, Education, TechnicalSkills, PersonalSkills
    },
    data() {
        return {

        }
    }
}
</script>
  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .display {
        width: 55%;
        padding-top: 100px;
    }
</style>
  