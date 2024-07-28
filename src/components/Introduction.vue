<template>
    <div class="introduction">
        <p class="title-text">About Me</p>
        <p class="regular-text">
            Hi there! I am Richard Marck Barreda. An IT Specialist and Web developer from Angeles City Pampanga, Philippines. 
            As an IT Specialist I have an experience working on Technical Support Industry wherein I was able to provide 
            technical assistance to employees who are experiencing issues with their computer whether it is a hardware 
            or software problem. I am also a Web developer that specialized in front-end development. I have an approximately 
            3 years of experience on web development, part of those experience were the knowledge and skills I gain to be a front-end 
            developer from my first company and the experience I gain from my current company wherein I was able to explore the side of a 
            back-end developer. My ultimate goal as a web developer is to become a full-fledged Full-Stack Developer. I know that 
            there will be alot of challenges along my way but I am standing confident, because I am dedicated and eager to learn 
            new technologies and frameworks to stay current in this ever-evolving field.
        </p>

        <p class="regular-text">
            When I’m not at the computer, I’m usually watching anime, reading manga, hanging out with my family, friends and my dog, or running around Hyrule searching for <span class="highlight-text">Korok seeds</span>.
        </p>
    </div>
</template>
  



<script>
// import Something from '@/components/Something.vue'
export default {
    name: 'Introduction',
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
    .introduction {
        padding-top: 120px;
        padding-bottom: 30px;

        .regular-text {
            padding-bottom: 30px;

            .highlight-text {
                opacity: 1;
                font-weight: 700;
                color: lawngreen;
            }
        }

        
    }
</style>
  