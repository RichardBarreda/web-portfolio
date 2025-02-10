<template>
    <div class="introduction">
        <p class="title-text">About Me</p>

        <p class="regular-text">
            Hi there! I’m <span class="my-name">Richard Marck Barreda</span>, an IT Support and a Front-end web developer with a passion 
            for creating engaging and user-friendly web interfaces. I have 2+ years of experience 
            in front-end development, utilizing technologies like HTML, CSS, JavaScript, and front-end 
            frameworks such as Bootstrap, Jquery, and Vue JS.  I have honed my skills in building responsive 
            and visually appealing websites to provide an excellent user experience.
        </p>

        <p class="regular-text">
            Recently, I have embarked on a journey to expand my expertise into back-end development. I’m currently 
            learning PHP and one of its frameworks - Laravel, as well as studying and working with databases using 
            SQL (although I prefer to use Laravel’s Eloquent because it makes the development faster and more 
            efficient). This new knowledge is enabling me to understand the full stack of web development and 
            create more comprehensive and efficient solutions.
        </p>

        <p class="regular-text">
            In addition to my development skills, I have a strong background in IT support. I have an experience 
            of troubleshooting hardware and software issues, managing networks, and providing technical assistance 
            to users. This dual expertise allows me to understand and address both the development and operational 
            aspects of technology.
        </p>

        <p class="regular-text">
            When I’m not working, I’m usually watching anime and reading manga on my free time. Some of my favorites 
            are One Piece,  Kimetsu no Yaiba, and Frieren. I’m also into playing video games, such as League of 
            Legends: Wild Rift, and Minecraft (which I can express my creativity). Aside from this you can also find 
            me hanging out with my family and friends, trying out and discovering new places with good foods! 
            When I’m alone and nowhere to be found I spend my time on running around Hyrule searching for <span class="korok-seeds">Korok seeds</span> 
            and hunting <span class="bubbul-frogs">Bubbulfrogs</span>.
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

            .korok-seeds {
                opacity: 1;
                font-weight: 700;
                color: lawngreen;
            }

            .bubbul-frogs {
                opacity: 1;
                font-weight: 700;
                color: #92fffb;
            }

            .my-name {
                opacity: 1;
                font-weight: 700;
                color: white;
            }
        }

        
    }
</style>
  