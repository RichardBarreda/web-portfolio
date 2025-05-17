<template>
    <div class="experience">
        <p class="title-text">Work Experience</p>
        

        <div class="company-wrapper">
            <div class="company-header">
                <p class="company-name"><i class="bi bi-person-workspace"></i> Nanox Philippines Inc</p>
                <p class="job-title">IT Support / Web Developer</p>

                <div class="sub-details">
                    <div class="company-details"> <i class="bi bi-calendar-week details-icon"></i> <p class="regular-text">October 2020 - May 2025</p> </div>
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
                {id: "1", responsibility: "Develop and design a user-friendly, visually appealing company website according to the specifications and requirements provided by the marketing team. (https://nanoxphilippines.com/)"},
                {id: "2", responsibility: "Regularly update website content by adding new features and functionalities based on marketing team feedback and preferences."},
                {id: "3", responsibility: "Optimize website content, meta tags, structure and conduct keyword research to identify valuable search terms and incorporate them into website content to improve its search engine rankings."},
                {id: "4", responsibility: "Collaborate with the marketing team to understand website needs and provide reports on metrics like visitor numbers, page views, bounce rates, and conversion rates."},
                {id: "5", responsibility: "Develop and implement a user-friendly IT Ticketing System to manage and track requests from employees across the company."},
                {id: "6", responsibility: "Handle user requests via IT Ticketing System, prioritizing them appropriately to ensure that critical issues are resolved quickly, to minimizing downtime and maintaining productivity."},
                {id: "7", responsibility: "Troubleshoot and resolve hardware, software, and network issues, including repair and replacement of hardware components."},
                {id: "8", responsibility: "Resolve user requests via phone, email, and chat, using remote tools to troubleshoot and fix laptop and desktop issues."},
                {id: "9", responsibility: "Document troubleshooting steps and solutions, and maintain accurate records of support requests and resolutions for future reference."},
                {id: "10", responsibility: "Ensure support requests are resolved within Service Level Agreements (SLAs) by monitoring progress, prioritizing tasks, and taking prompt action to meet response and resolution times."},
                {id: "11", responsibility: "Escalate unresolved issues per SLA guidelines to IT manager, company headquarters in Japan, or external contractors as needed."},
                {id: "12", responsibility: "Manage user accounts in Active Directory and other systems, ensuring access controls and security measures are in place."},
                {id: "13", responsibility: "Conduct regular preventive maintenance on servers, including system health checks, software updates, and hardware inspections to ensure optimal performance and reliability."},
                {id: "14", responsibility: "Train new employees on information security policies and best practices to ensure compliance from the start."},
                {id: "15", responsibility: "Perform audits on staff compliance with information security rules as per ISO27001:2002 standards to ensure that employees understand and adhere to the organization’s information security policies and procedures."},
                {id: "16", responsibility: "Investigate security breaches and other cybersecurity incidents, and develop strategies to handle and initiate investigations."},
                {id: "17", responsibility: "Escalate major security incidents to headquarters in Japan, providing detailed reports and updates for timely resolution."},
            ],

            fullstack: [
                {id: "1", responsibility: "Proactively join kick-off meetings to gain a comprehensive understanding of the project requirements and goals."},
                {id: "2", responsibility: "Contribute to sprint planning sessions by discussing and defining tasks, estimating effort, and setting priorities in alignment with Agile methodologies."},
                {id: "3", responsibility: "Ensure pixel-perfect conversion of PSD designs into HTML, CSS, and JavaScript, maintaining the integrity of the original design."},
                {id: "4", responsibility: "Create a custom WordPress theme by converting front-end code into WordPress template and ensuing that the content can be manage dynamically."},
                {id: "5", responsibility: "Installing and configuring WordPress plugins to extend website functionality and enhance user experience."},
                {id: "6", responsibility: "Utilize GitHub to collaborate with team members, manage code repositories, track changes, and facilitate version control."},
                {id: "7", responsibility: "Implement responsive design principles to ensure web pages are optimized for various devices and screen sizes."},
                {id: "8", responsibility: "Test and ensure compatibility across different browsers and platforms to provide a consistent user experience."},
                {id: "9", responsibility: "Work with the QA team to test the website, identify bugs, and implement fixes to ensure a high-quality user experience."},
                {id: "10", responsibility: "Incorporate feedback and amendments provided by clients or customers to ensure the final product meets their expectations and requirements."},
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
        padding-top: 60px;

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

    @media (max-width: 575.98px) {
        .experience {
            .company-wrapper {
                padding: 15px;

                .responsibilities-wrapper {
                    .responsibilities-holder {
                        .responsibilities-text {
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
    }
</style>
  