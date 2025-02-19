<template>
    <div class="projects">
        <p class="title-text">Sample Projects</p>
        <p class="regular-text">
            With my 2 years of experience as a Web Developer, I already worked with lots of front-end development 
            projects, but unfortunately I cannot disclose any information regarding my previous website projects 
            due to the Confidentiality Agreement with my previous employers and with the copyright / code ownership. 
            I can't publicly share the code without the client's permission. But to give an idea, I think I've already 
            worked with approximately 11 Web Development Projects.
        </p>
        <p class="regular-text">
            Listed below are some of my sample website projects, with the Nanox Philippines Inc. 
            Company Website as my recent Front-end project.
        </p>
        
        <div class="project-wrapper">
            
            <div class="project-holder" v-for="project in projects" :key="project.id">
                <div class="image-holder">
                    <img class="img-fluid" :src="project.image">
                </div>
                <div class="details-holder">
                    <a class="project-name" :href="project.link" target="_blank">{{ project.name }} <span class="link-icon"> <i class="bi bi-box-arrow-up-right"></i> </span> </a>
                    <p class="project-description"> {{ project.description }}</p>
                    <div class="language-group">
                        <p class="lang-badge" v-for="lang in project.language" :key="lang">{{lang}}</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="collapse multi-collapse" id="seeMoreProject">
            <div class="project-wrapper">
                <div class="project-holder" v-for="project in moreProjects" :key="project.id">
                    <div class="image-holder">
                        <img class="img-fluid" :src="project.image">
                    </div>
                    <div class="details-holder">
                        <a class="project-name" :href="project.link" target="_blank">{{ project.name }} <span class="link-icon"> <i class="bi bi-box-arrow-up-right"></i> </span> </a>
                        <p class="project-description"> {{ project.description }}</p>
                        <div class="language-group">
                            <p class="lang-badge" v-for="lang in project.language" :key="lang">{{lang}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="btn-wrapper">
            <a class="btn-more" data-bs-toggle="collapse" data-bs-target="#seeMoreProject" aria-expanded="false" aria-controls="multiCollapseExample2" @click="toggleProject">{{ projectIsOpen ? 'SEE LESS' : 'SEE MORE' }}</a>
        </div>

    </div>
</template>
  



<script>
// import Something from '@/components/Something.vue'
export default {
    name: 'Projects',
    components: {

    },
    data() {
        return {
            projects: [
                {id: "1", image: require('../assets/nanox-website.png'), name: "Nanox Philippines Inc", description:"Company website for Nanox Philippines Inc. Featuring the products and services they offer.", link: "https://richardbarreda.github.io/Nanox/", language:["HTML", "CSS", "SCSS", "Bootstrap", "Javascript"]},
                {id: "2", image: require('../assets/ticketing-system.png'), name: "Sample Ticketing System", description:"Sample Front-end concept for an IT Department Ticketing System. Inspired with the one I develop for Nanox Philippines Inc", link: "https://richardbarreda.github.io/ticketing-system/", language:["HTML", "CSS", "SCSS", "Bootstrap", "Vue JS"]},
                {id: "3", image: require('../assets/online-portfolio.png'), name: "My First Web Portfolio", description:"I created this web portfolio as a practice when I am studying Vue JS. You might also want to check this out!", link: "https://richardbarreda.github.io/my-portfolio/", language:["HTML", "CSS", "Bootstrap", "Vue JS"]},
            ],

            moreProjects: [
                {id: "1", image: require('../assets/party-raffle.png'), name: "Party Raffle System", description:"System I develop to improved the raffle system of Nanox Philippines. Through this simple system we can promote paperless lifestyle!", link: "https://nanox-marc.github.io/automated-raffle/", language:["HTML", "CSS", "SCSS", "JS"]},
                {id: "2", image: require('../assets/cps-system.png'), name: "Cashless Payment System", description:"A discontinued project. System that accepts payment through RFID Card to lessen the physical contact of employees on money during covid 19 pandemic.", link: "https://github.com/Nanox-Marc/CPS", language:["HTML", "CSS", "SCSS", "JS", "Laravel"]},
            ],

            projectIsOpen: false,
        }
    },
    methods: {
        toggleProject() {
            this.projectIsOpen = !this.projectIsOpen;
        }
    }
}
</script>
  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .projects {
        padding-bottom: 100px;
        padding-top: 60px;

        .regular-text {
            padding-bottom: 30px;
        }

        .project-wrapper {
            .project-holder {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 15px;
                border-radius: 7px;
                margin-bottom: 10px;

                &:hover {
                    background-color: #ffffff17;
                }

                .image-holder {
                    width: 100%;
                    max-width: 215px;
                }

                .details-holder {
                    margin-left: 15px;

                    .project-name {
                        font-size: 18px;
                        opacity: .8;
                        color: #E2E8F0;
                        font-weight: 500;
                        text-decoration: none;

                        .link-icon {
                            margin-left: 10px;
                            opacity: 0;
                        }

                        &:hover {
                            opacity: 1;
                            color: white;
                            text-decoration: underline;
                            cursor: pointer;

                            .link-icon {
                                opacity: 1;
                            }
                        }

                    }

                    .project-description {
                        font-size: 14px;
                        opacity: .6;
                        color: #E2E8F0;
                    }

                    .language-group {
                        display: flex;
                        margin-top: 5px;

                        .lang-badge {
                            font-size: 14px;
                            opacity: .6;
                            color: #E2E8F0;
                            background-color: #ffffff29;
                            margin-right: 10px;
                            padding: 0px 10px;
                            border-radius: 5px;
                        }
                    }
                }
            }
        }

        .btn-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;

            margin-top: 15px;

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
        }

        
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
        .projects {
            .project-wrapper {
                .project-holder {
                    .image-holder {
                        width: 30%;
                        max-width: 100%;
                    }

                    .details-holder {
                        width: 70%;

                        .language-group {
                            flex-wrap: wrap;

                            .lang-badge {
                                margin-bottom: 8px !important;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 575.98px) {
        .projects {
            .project-wrapper {
                .project-holder {
                    flex-direction: column;

                    .image-holder {
                        width: 100%;
                        max-width: 100%;
                    }

                    .details-holder {
                        width: 100%;

                        .language-group {
                            flex-wrap: wrap;

                            .lang-badge {
                                margin-bottom: 8px !important;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
  