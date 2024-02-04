import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20' id='projects'>
                My Projects
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
                <ProjectCard
                    src='/zaku.png'
                    title='ZAKU'
                    description='ZAKU is a mobile app developed using OutSystems, a low-code development platform, for financial record-keeping to make expense tracking easier, leading to a more economical and planned life.'
                />
                <ProjectCard
                    src='/web-mens-id.png'
                    title='Mens.id'
                    description='Mens.id is a website developed using HTML, CSS, and JavaScript. It offers a user-friendly experience, allowing users to explore and find clothing and accessories that match their style and preferences.'
                />
                <ProjectCard
                    src='/vitrack.png'
                    title='VITRACK'
                    description='VITRACK is a Mobile Health Monitoring, designed to assist users in recording, tracking, and analyzing crucial aspects of their health. This application is developed using the Kotlin programming language.'
                />
            </div>
        </div>
    )
}

export default Projects