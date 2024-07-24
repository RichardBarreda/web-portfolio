<template>
    <div class="personal-skills">
        <p class="title-text">Personal Skills</p>

        <div class="skill-wrapper">
            <div class="skill-holder" v-for="skill in skills" :key="skill.id">
                <i class="bi bi-check2-square skill-icon regular-text"></i>
                <p class="skill-text regular-text">{{ skill.name }}</p>
            </div>
        </div>
        
    </div>
</template>
  



<script>
// import Something from '@/components/Something.vue'
export default {
    name: 'PersonalSkills',
    components: {

    },
    data() {
        return {
            skills: [
                {id: "1", name: "Time Management"},
                {id: "2", name: "Creativity"},
                {id: "3", name: "Analytical Skills"},
                {id: "4", name: "Communication"},
                {id: "5", name: "Teamwork"},
                {id: "6", name: "Organizational Skills"},
                {id: "7", name: "Flexible"},
                {id: "8", name: "Problem Solving"},
                {id: "9", name: "Leadership"},
                {id: "10", name: "Technical Writing"},
            ]
        }
    }
}
</script>
  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .personal-skills {
        padding-bottom: 50px;

        .regular-text {
            font-size: 18px;
            opacity: .8;
        }

        .skill-wrapper {
            display: flex;
            flex-wrap: wrap;
            width: 100%;

            .skill-holder {
                display: flex;
                width: 45%;

                .skill-text {
                    margin-left: 10px;
                }
            }
        }

        
    }
</style>
  