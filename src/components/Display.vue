<template>
    <div class="display" data-bs-spy="scroll" data-bs-target="#my-display" data-bs-offset="0" data-bs-smooth-scroll="true">
        <div class="about-section" id="display-about">
            <Introduction></Introduction>
            <Education></Education>
            <TechnicalSkills></TechnicalSkills>
            <PersonalSkills></PersonalSkills>
        </div>
        <Experience id="display-experience"></Experience>
        <Projects id="display-project"></Projects>
    </div>
</template>
  



<script>
import Introduction from '@/components/Introduction.vue'
import Education from '@/components/Education.vue'
import TechnicalSkills from '@/components/TechnicalSkills.vue'
import PersonalSkills from '@/components/PersonalSkills.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'
export default {
    name: 'Display',
    components: {
        Introduction, Education, TechnicalSkills, PersonalSkills, Experience, Projects
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
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        .display {
            width: 100%;
        }
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
        .display {
            width: 100%;
        }
    }

    @media (max-width: 575.98px) {
        .display {
            width: 100%;
        }
    }
</style>
  