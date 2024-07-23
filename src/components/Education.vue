<template>
    <div class="education">
        <p class="title-text">Education</p>
        
        <div class="education-wrapper">
            <div class="school-holder">
                <div class="image-holder">
                    <img class="img-fluid" :src="hauLogo">
                </div>
                <div class="details-holder">
                    <p class="regular-text education-title">BACHELOR OF SCIENCE IN COMPUTER SCIENCE</p>
                    <p class="regular-text education-school">Holy Angel University</p>
                    <p class="regular-text education-year">June 2015 - May 2019</p>
                </div>
            </div>

            <div class="school-holder">
                <div class="image-holder">
                    <img class="img-fluid" :src="hauLogo">
                </div>
                <div class="details-holder">
                    <p class="regular-text education-title">SECONDARY EDUCATION</p>
                    <p class="regular-text education-school">Holy Angel University</p>
                    <p class="regular-text education-year">June 2011 - March 2015</p>
                </div>
            </div>

            <div class="school-holder">
                <div class="image-holder">
                    <img class="img-fluid" :src="vtesLogo">
                </div>
                <div class="details-holder">
                    <p class="regular-text education-title">PRIMARY EDUCATION</p>
                    <p class="regular-text education-school">Villa Teodora Elementary School</p>
                    <p class="regular-text education-year">June 2005 - May 2011</p>
                </div>
            </div>
        </div>
    </div>
</template>
  



<script>
// import Something from '@/components/Something.vue'
export default {
    name: 'Education',
    components: {

    },
    data() {
        return {
            hauLogo: require('../assets/hau.png'),
            vtesLogo: require('../assets/vtes.png'),
        }
    }
}
</script>
  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .education {
        padding-bottom: 30px;

        .regular-text {
            
        }

        .education-wrapper {
            .school-holder {
                display: flex;
                margin-bottom: 15px;

                .image-holder {
                    width: 100%;
                    max-width: 90px;
                }   

                .details-holder {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left: 15px;

                    .education-title {
                        opacity: 1;
                        color: #E2E8F0;
                        text-transform: uppercase;
                        font-weight: 500;
                    }
                }
            }
        }
    }
</style>
  