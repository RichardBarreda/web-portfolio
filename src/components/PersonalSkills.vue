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
                {id: "1", name: "Communication"},
                {id: "2", name: "Problem-Solving"},
                {id: "3", name: "Customer Service"},
                {id: "4", name: "Adaptability"},
                {id: "5", name: "Analysis"},
                {id: "6", name: "Creativity"},
                {id: "7", name: "Leadership"},
                {id: "8", name: "Teamwork"},
                {id: "9", name: "Decision-Making"},
                {id: "10", name: "Time Management"},
            ]
        }
    }
}
</script>
  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .personal-skills {

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

    @media (max-width: 575.98px) {
        .personal-skills {
            .skill-wrapper {
                flex-direction: column;

                .skill-holder {
                    width: 100%;
                }
            }
        }  
    }
</style>
  