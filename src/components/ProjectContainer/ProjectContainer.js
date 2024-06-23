import React from 'react';
import { Element } from 'react-scroll'; // Ensure Element is imported from react-scroll
import img1 from "../../assets/coffee-shop.jpg"; // Ensure these paths and extensions are correct
import img2 from "../../assets/flower-project.jpg";
import img3 from "../../assets/instagram-clone.jpg"; // Ensure the path and name are correct
import Project from "../Project/Project"; // Ensure this is the correct path to the Project component
import"./ProjectContainer.css";

const ProjectContainer = () => {
    const projects = [
        {
            img: img1,
            title: "Coffee Shop",
            desc: 'Coffee Website Using HTML CSS & BOOTSTRAP 5',
            link: 'https://sprightly-froyo-c01d1b.netlify.app/'
        },
        {
            img: img2,
            title: "Flower Project",
            desc: 'Designed A Responsive E-Commerce Flower Shop Website',
            link: 'https://superb-duckanoo-2c49d4.netlify.app/'
        },
        {
            img: img3,
            title: "Instagram Clone",
            desc: 'Complete Responsive Instagram Clone With HTML & CSS',
            link: 'https://jocular-phoenix-58364e.netlify.app/'
        }
    ];

    return (
        <Element className='projectContainer' id='projects'>
            <h1>Projects</h1>
            <p> Here are some projects which are changing many people’s lives and some clone works of large tech companies.</p>
            <div className='projectContainer_projects'>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        img={project.img}
                        title={project.title}
                        desc={project.desc}
                        link={project.link}
                    />
                ))}
            </div>
        </Element>
    );
};

export default ProjectContainer; // Ensure you are exporting the component here




// import React from 'react'
// import img1 from "../../assets/coffee-shop.jpg";
// import img2 from "../../assets/flower-project.jpg";
// import img3 from "../../assets/instagram-clone.jpg";
// import { Element } from 'react-scroll';
// import Project from "../Project/Project";


// const Projects = () => {

//     const projects= [
//         {
//             img: img1,
//             title:"coffee-shop",
//             desc:'Coffee Website Using HTML CSS & BOOTSTRAP 5',
//             link:'https://sprightly-froyo-c01d1b.netlify.app/'
//         },
//         {
//             img: img2,
//             title:"flower-project",
//             desc:'Designed A Responsive E-Commerce Flower Shop Website',
//             link:'https://superb-duckanoo-2c49d4.netlify.app/'
//         },
//         {
//             img: img3,
//             title:"Instagram Clone",
//             desc:'Complete Responsive Instagram Clone With HTML & CSS',
//             link:'https://jocular-phoenix-58364e.netlify.app/'
//         }
        
//     ];



//   return (
//     <Element className='projectContainer' id='projects'>
//         <h1>Projects</h1>
//         <p> Here are some projects which are changing many people lives and some
//         clone works of large tech tack companies.</p>
//         <div className='projectContainer_projects'>
        
//         {projects.map((project,index)=>{
//             return (
//                 <project key={index}
//                     img={project.img}
//                     title={project.title}
//                     desc={project.desc}
//                     link={project.link}/>
//                 )
//              })
//         }

//         </div>
//     </Element>
//   );
// };

// export default Projects;

