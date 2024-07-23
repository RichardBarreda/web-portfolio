<template>
    <div class="technical-skills">
        <p class="title-text">Technical Skills</p>
        
        <div class="skill-wrapper">

            <div class="skill-holder" v-for="skill in skills" :key="skill.id">
                <div class="image-holder">
                    <img class="img-fluid" :src="skill.icon">
                </div>
                <div class="details-holder">
                    <p class="regular-text skill-title">{{ skill.language }}</p>
                    <div class="skill-bar"> <div class="confidence-bar" :style="'width:'+skill.level"></div> </div>
                    <p class="regular-text skill-level">Confidence: {{ skill.level }} </p>
                </div>
            </div>

        </div>

    </div>
</template>
  



<script>
// import Something from '@/components/Something.vue'
export default {
    name: 'TechnicalSkills',
    components: {

    },
    data() {
        return {
            skills: [
                {id: "1", language: "HTML", icon: require('../assets/html.png'), level: "90%"},
                {id: "2", language: "CSS", icon: require('../assets/css-3.png'), level: "90%"},
                {id: "3", language: "Javascript", icon: require('../assets/js.png'), level: "70%"},
                {id: "4", language: "SASS", icon: require('../assets/sass.png'), level: "80%"},
                {id: "5", language: "Bootstrap", icon: require('../assets/bootstrap.png'), level: "80%"},
                {id: "6", language: "VUE", icon: require('../assets/vue.png'), level: "60%"},
                {id: "7", language: "REACT", icon: require('../assets/react.png'), level: "20%"},
                {id: "8", language: "PHP", icon: require('../assets/php.png'), level: "25%"},
                {id: "9", language: "Wordpress", icon: require('../assets/wp.png'), level: "60%"},
                {id: "10", language: "LARAVEL", icon: require('../assets/laravel.png'), level: "60%"},
                {id: "11", language: "JAVA", icon: require('../assets/java.png'), level: "20%"},
                {id: "12", language: "Python", icon: require('../assets/python.png'), level: "20%"},
                {id: "13", language: "C#", icon: require('../assets/c-sharp.png'), level: "20%"},
                {id: "14", language: "C++", icon: require('../assets/c-pp.png'), level: "15%"},
                {id: "15", language: "Github", icon: require('../assets/github.png'), level: "70%"}
            ]
        }
    }
}
</script>
  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .technical-skills {
        padding-bottom: 30px;

        .regular-text {

        }

        .skill-wrapper {
            display: flex;
            flex-wrap: wrap;

            .skill-holder {
                display: flex;
                margin-bottom: 20px;
                width: 100%;
                max-width: 250px;
                margin-right: 40px;
                
                .image-holder {
                    width: 100%;
                    max-width: 50px;
                }

                .details-holder {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left: 15px;
                    width: 100%;

                    .skill-bar {
                        height: 10px;
                        width: 100%;
                        background-color: transparent;
                        border: solid 1px #E2E8F0;

                        .confidence-bar {
                            height: 100%;
                            background-color: #E2E8F0;
                            opacity: .9;
                        }
                    }
                }
            }
        }
    }
</style>
  