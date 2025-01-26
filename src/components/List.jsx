import {motion} from "framer-motion";
import {Link as ScrollLink} from "react-scroll";
import React, {useEffect, useState} from "react";


export default function List({ sortedProjects , children, classname }) {

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;

            // Calculate which project is currently in view
            const newIndex = Math.floor(scrollPosition / windowHeight);

            setCurrentProjectIndex(newIndex);
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
    <motion.div

        initial={{  y: 20 }}
        animate={{  y: 0 }}
        exit={{ y: 20 }}
        transition={{
            type: "spring",
            stiffness: 200,
            damping: 50,
        }}
        // ... your motion.div props ...
        className={` ${classname}  pl-10 pr-1 opacity-75 pt-24 overflow-y-scroll min-h-screen text-xs scale-75 text-left self-start z-20`}
    >
        {sortedProjects.map((project, index) => (
            <ScrollLink
                key={index}
                to={project.title.toLowerCase().replace(/\s/g, '-')}
                spy={true}
                smooth={true}
                offset={-70} // Adjust offset as needed
                duration={500}
            >
                <div
                    className="pt-1"
                >

                <p
                    className={`block leading-3 hover:text-accent cursor-pointer ${currentProjectIndex === index+1 ? 'font-semibold' : ''}`}
                    style={{color: `${currentProjectIndex === index + 1 ? project.color : '#000000'}`}}
                >
                    {project.title}
                </p>
                <p className="text-gray-500 text-[8px]">{new Date(project.date).getFullYear()}</p>
                </div>

            </ScrollLink>
        ))}
    </motion.div>
 )
}