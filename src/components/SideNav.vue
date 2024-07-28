<template>
    <div class="side-nav">
        <div class="side-nav-wrapper">
            <div class="info-holder">
                <p class="my-name">Richard Barreda</p>
                <p class="my-title">Frontend Developer / IT Specialist</p>
                <p class="my-background">I Convert design concepts into functional and visually appealing web applications.</p>
            </div>
            <div class="anchor-holder" id="my-display">
                <a class="anchor-menu" href="#display-about"><span class="indicator"></span> ABOUT</a>
                <a class="anchor-menu" href="#display-experience"><span class="indicator"></span> EXPERIENCE</a>
                <a class="anchor-menu" href="#display-project"><span class="indicator"></span> PROJECTS</a>
            </div>
            <div class="links-holder">
                <a class="social-links"><i class="bi bi-github"></i></a>
                <a class="social-links"><i class="bi bi-envelope-at"></i></a>
                <a class="social-links"><i class="bi bi-facebook"></i></a>
                <a class="social-links"><i class="bi bi-linkedin"></i></a>
                <a class="social-links"><i class="bi bi-instagram"></i></a>
            </div>

            
        </div>
    </div>
</template>
  



<script>
// import Something from '@/components/Something.vue'
export default {
    name: 'SideNav',
    components: {

    },
    data() {
        return {

        }
    }
}
</script>
  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.side-nav {
    width: 45%;

    .side-nav-wrapper {
        position: fixed;
        margin-top: 100px;
        color: #E2E8F0;

        .info-holder {
            .my-name {
                font-size: 50px;
                font-weight: 700;
            }

            .my-title {
                font-size: 20px;
                margin-left: 2px;
            }

            .my-background {
                font-size: 16px;
                width: 80%;
                opacity: .6;
                margin-left: 2px;
                margin-top: 20px;
                max-width: 450px;
            }
        }

        

        .anchor-holder {
            display: flex;
            flex-direction: column;
            margin-top: 50px;

            .anchor-menu {
                text-decoration: none;
                color: #E2E8F0;
                opacity: .6;
                margin-left: 2px;
                font-size: 16px;
                margin-top: 10px;
                display: flex;
                align-items: center;
                width: max-content;
                transition: all 0.3s cubic-bezier(.25,.8,.25,1);

                .indicator {
                    width: 20px;
                    border-top: solid 1px #E2E8F0;
                    display: block;
                    margin-right: 10px;
                    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                }

                &:hover {
                    cursor: pointer;
                    opacity: 1;

                    .indicator {
                        width: 50px;
                    }
                }

                &-active {
                    font-weight: 700;
                    opacity: 1;

                    .indicator {
                        width: 50px;
                    }
                }
            }
        }

        .links-holder {
            display: flex;
            flex-direction: row;
            margin-top: 50px;

            .social-links {
                text-decoration: none;
                color: #E2E8F0;
                opacity: .6;
                font-size: 30px;
                margin-right: 20px;   
                
                &:hover {
                    cursor: pointer;
                    opacity: 1;
                }
            }
        }
    }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
    .side-nav {
        position: relative;

        .side-nav-wrapper {
            max-width: 400px;
            padding-left: 30px;

            .info-holder {
                .my-name {
                    font-size: 40px;
                }
            }
        }
    }
}

@media (min-width: 768px) and (max-width: 991.98px) {
    .side-nav {
        width: 100%;

        .side-nav-wrapper {
            position: relative;
            margin-top: 60px;

            .info-holder {
                .my-name {
                    font-size: 40px;
                }
                
                .my-title {
                    font-size: 18px;
                }

                .my-background {
                    margin-top: 10px;
                }

            }

            .anchor-holder {
                margin-top: 25px;

                .anchor-menu {
                    font-size: 14px;
                }
            }
        }
    }
}

@media (min-width: 576px) and (max-width: 767.98px) {
    .side-nav {
        width: 100%;

        .side-nav-wrapper {
            position: relative;
            margin-top: 60px;

            .info-holder {
                .my-name {
                    font-size: 40px;
                }
                
                .my-title {
                    font-size: 18px;
                }

                .my-background {
                    margin-top: 10px;
                }

            }

            .anchor-holder {
                margin-top: 25px;

                .anchor-menu {
                    font-size: 14px;
                }
            }
        }
    }
}

@media (max-width: 575.98px) {
    .side-nav {
        width: 100%;

        .side-nav-wrapper {
            position: relative;
            margin-top: 40px;

            .info-holder {
                .my-name {
                    font-size: 40px;
                }
                
                .my-title {
                    font-size: 18px;
                }

                .my-background {
                    margin-top: 10px;
                    width: 100%;
                }

            }

            .anchor-holder {
                margin-top: 25px;

                .anchor-menu {
                    font-size: 14px;
                }
            }
        }
    }
}
</style>
  