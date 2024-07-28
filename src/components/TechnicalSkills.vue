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

        <div class="collapse multi-collapse" id="technicalSkills">
            <div class="skill-wrapper">
                <div class="skill-holder" v-for="skill in moreSkills" :key="skill.id">
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

        <div class="btn-wrapper">
            <a class="btn-more" data-bs-toggle="collapse" data-bs-target="#technicalSkills" aria-expanded="false" aria-controls="multiCollapseExample2" @click="toggleSkills">{{ skillIsOpen ? 'SEE LESS' : 'MORE SKILLS' }}</a>
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
                {id: "7", language: "Wordpress", icon: require('../assets/wp.png'), level: "60%"},
                {id: "8", language: "LARAVEL", icon: require('../assets/laravel.png'), level: "60%"},
            ],

            moreSkills:[
                {id: "9", language: "REACT", icon: require('../assets/react.png'), level: "20%"},
                {id: "10", language: "PHP", icon: require('../assets/php.png'), level: "25%"},
                {id: "11", language: "JAVA", icon: require('../assets/java.png'), level: "20%"},
                {id: "12", language: "Python", icon: require('../assets/python.png'), level: "20%"},
                {id: "13", language: "C#", icon: require('../assets/c-sharp.png'), level: "20%"},
                {id: "14", language: "C++", icon: require('../assets/c-pp.png'), level: "15%"},
                {id: "15", language: "Github", icon: require('../assets/github.png'), level: "70%"}
            ],

            skillIsOpen: false,
        }
    },
    methods: {
        toggleSkills() {
            this.skillIsOpen = !this.skillIsOpen;
        }
    }
}
</script>
  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .technical-skills {
        padding-bottom: 50px;

        .regular-text {

        }

        .btn-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;

            margin-top: 15px;
        }

        .btn-more {
            text-decoration: none;
            text-transform: uppercase;
            font-size: 15px;
            color: #E2E8F0;

            border: solid 1px white;
            border-radius: 3px;
            width: 100%;
            max-width: 115px;
            text-align: center;

            &:hover {
                cursor: pointer;
                background-color: #E2E8F0;
                color: black;
            }
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

    @media (min-width: 992px) and (max-width: 1199.98px) {
        .technical-skills {
            .skill-wrapper {
                .skill-holder {
                    max-width: 215px;
                    margin-right: 20px;
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        .technical-skills {
            .skill-wrapper {
                .skill-holder {
                    max-width: 300px;
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
        .technical-skills {
            .skill-wrapper {
                .skill-holder {
                    max-width: 230px;
                    margin-right: 25px;
                }
            }
        }
    }

    @media (max-width: 575.98px) {
        .technical-skills {
            .skill-wrapper {
                .skill-holder {
                    max-width: 100%;
                }
            }
        }
    }

</style>
  