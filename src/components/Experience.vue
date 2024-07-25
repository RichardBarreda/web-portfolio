<template>
    <div class="experience">
        <p class="title-text">Work Experience</p>
        

        <div class="company-wrapper">
            <div class="company-header">
                <p class="company-name"><i class="bi bi-person-workspace"></i> Nanox Philippines Inc</p>
                <p class="job-title">IT Support / Web Developer</p>

                <div class="sub-details">
                    <div class="company-details"> <i class="bi bi-calendar-week details-icon"></i> <p class="regular-text">October 2020 - Present</p> </div>
                    <div class="company-details"> <i class="bi bi-geo-alt-fill details-icon"></i> <p class="regular-text">Clark Freeport, Mabalacat, Pampanga</p> </div>
                    <div class="company-details"> <i class="bi bi-box-arrow-up-right details-icon"></i> <a href="https://nanoxphilippines.com/" target="_blank" class="regular-text website-link">https://nanoxphilippines.com/</a> </div>
                </div>
            </div>

            <div class="responsibilities-wrapper">
                <div class="responsibilities-holder" v-for="job in nanox" :key="job.id">
                    <i class="bi bi-check2 skill-icon regular-text"></i>
                    <p class="responsibilities-text regular-text">{{ job.responsibility }}</p>
                </div>
            </div>
        </div>


        <div class="company-wrapper">
            <div class="company-header">
                <p class="company-name"><i class="bi bi-person-workspace"></i> Fullstack HQ</p>
                <p class="job-title">Front-end Web Developer</p>

                <div class="sub-details">
                    <div class="company-details"> <i class="bi bi-calendar-week details-icon"></i> <p class="regular-text">April 2019 - March 2020</p> </div>
                    <div class="company-details"> <i class="bi bi-geo-alt-fill details-icon"></i> <p class="regular-text">Sto. Rosario St. Angeles City, Pampanga</p> </div>
                    <div class="company-details"> <i class="bi bi-box-arrow-up-right details-icon"></i> <a href="https://fullstackhq.com/" target="_blank" class="regular-text website-link">https://fullstackhq.com/</a> </div>
                </div>
            </div>

            <div class="responsibilities-wrapper">
                <div class="responsibilities-holder" v-for="job in fullstack" :key="job.id">
                    <i class="bi bi-check2 skill-icon regular-text"></i>
                    <p class="responsibilities-text regular-text">{{ job.responsibility }}</p>
                </div>
            </div>
        </div>


        <div class="company-wrapper">
            <div class="company-header">
                <p class="company-name"><i class="bi bi-person-workspace"></i> MVP Asia Pacific Inc.</p>
                <p class="job-title">OJT - Front End Developer</p>

                <div class="sub-details">
                    <div class="company-details"> <i class="bi bi-calendar-week details-icon"></i> <p class="regular-text">November 2018 - March 2019</p> </div>
                    <div class="company-details"> <i class="bi bi-geo-alt-fill details-icon"></i> <p class="regular-text">Philexcel Business Park Clark Freeport, Mabalacat, Pampanga</p> </div>
                    <div class="company-details"> <i class="bi bi-box-arrow-up-right details-icon"></i> <a href="https://www.offshoremvp.com/" target="_blank" class="regular-text website-link">https://www.offshoremvp.com/</a> </div>
                </div>
            </div>

            <div class="responsibilities-wrapper">
                <div class="responsibilities-holder" v-for="job in mvp" :key="job.id">
                    <i class="bi bi-check2 skill-icon regular-text"></i>
                    <p class="responsibilities-text regular-text">{{ job.responsibility }}</p>
                </div>
            </div>
        </div>


    </div>
</template>
  



<script>
// import Something from '@/components/Something.vue'
export default {
    name: 'Experience',
    components: {

    },
    data() {
        return {
            nanox: [
                {id: "1", responsibility: "Provide technical support and troubleshooting assistance to employees via ticketing system, email, chat, remote application or in person."},
                {id: "2", responsibility: "Diagnose and resolve hardware and software problems on time, such as hardware replacement, software error, and connectivity issues. Escalate complex problems to IT Manager when necessary to avoid downtime on the end-user."},
                {id: "3", responsibility: "Maintain accurate records of support request with detailed solution provided that can serve as a guideline for the IT Team."},
                {id: "4", responsibility: "Manage user accounts through Microsoft Active Directory 2008. This includes Account Creation, Reset Account Password, and User Group Membership."},
                {id: "5", responsibility: "Setup company laptop for newly hired employees and conduct IT related training including the importance of Information Security in the workplace."},
                {id: "6", responsibility: "Promote cyber security in the workplace through email campaign and provide training to required employees as needed."},
                {id: "7", responsibility: "Conduct annual ISMS Internal audits to the departments of the company and ensuring that they comply to the company’s Information Security rules."},
                {id: "8", responsibility: "Mentor and train other Junior IT members. Ensures that the company standard practices and policies are adhered to."},
                {id: "9", responsibility: "Develop and maintain the Company Website for Nanox Philippines Inc. https://www.nanoxphilippines.com"},
                {id: "10", responsibility: "Maintain the existing company system such as Online Leave Application, Document Management System, and Employee Database System."},
                {id: "11", responsibility: "Develop and implemented an internal IT Ticketing system that the company employees use to submit support request to the IT Department."},
            ],

            fullstack: [
                {id: "1", responsibility: "Implemented websites and applications from concept through deployment."},
                {id: "2", responsibility: "Convert mock-up designs into responsive and reusable front-end code then integrate it into WordPress template."},
                {id: "3", responsibility: "Tested websites and performed troubleshooting prior to deployment to ensure that the website meets the client’s expectations."},
                {id: "4", responsibility: "Designed websites to be compatible with top browsers including Google Chrome, Firefox, Microsoft Edge, and Safari."},
                {id: "5", responsibility: "Building reusable components and optimized them for maximum performance across a vast array of web-capable devices and browsers."},
                {id: "6", responsibility: "Uses GitHub to implement version controls with the websites and collaborates with different developers from the team."},
                {id: "7", responsibility: "Coordinate with QA team and ensure that any website issues or bugs that arise will be fixed immediately."},
            ],

            mvp: [
                {id: "1", responsibility: "Attend daily stand up meetings that tackles about the progress of the assigned projects and the different issues / bugs of the website to ensure everyone on the team is updated."},
                {id: "2", responsibility: "Test the functionalities of different web pages accross different browsers (Chrome, Firefox, Safari & Internet Explorer) and devices such as desktop, laptop, tablets and smartphones."},
                {id: "3", responsibility: "Troubleshoot and debug different website projects then suggest and help the development team to resolve issues with front-end code, ensuring that web applications and sites function correctly and efficiently."},
                {id: "4", responsibility: "Review and provide feedback on design and code written by team members to ensure consistency, quality, and best practices."},
                {id: "5", responsibility: "Continuously learn and stay updated with the latest front-end development trends, technologies, and best practices to ensure the company remains competitive."},
            ]
        }
    }
}
</script>
  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .experience {
        padding-bottom: 30px;

        .regular-text {
            
        }

        .company-wrapper {
            padding: 25px;
            border-radius: 10px;

            &:hover {
                background-color: #ffffff17;
            }

            .company-header {
                .company-name {
                    font-size: 18px;
                    opacity: .8;
                    color: white;
                    font-weight: 500;
                }

                .job-title {
                    font-size: 14px;
                    opacity: .6;
                    background-color: #E2E8F0;
                    color: black;
                    width: max-content;
                    padding: 0pc 10px;
                    border-radius: 8px;
                    margin-left: -5px;
                }

                .sub-details {
                    margin-top: 15px;

                    .regular-text {
                        font-size: 15px;
                    }

                    .company-details {
                        display: flex;
                        align-items: center;

                        .details-icon {
                            font-size: 16px;
                            opacity: .6;
                            color: #E2E8F0;
                            font-weight: 500;
                            margin-right: 10px;
                        }
                    }

                    .website-link {
                        text-decoration: none;

                        &:hover {
                            text-decoration: underline;
                            color: white;
                            opacity: 1;
                        }
                    }
                }
            }

            .responsibilities-wrapper {
                margin-top: 20px;

                .responsibilities-holder {
                    display: flex;
                    margin-top: 5px;

                    .responsibilities-text {
                        margin-left: 15px;
                    }
                }
            }
        }

        
    }
</style>
  