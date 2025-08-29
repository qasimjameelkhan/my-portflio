import { TypeAnimation } from "react-type-animation";
import {motion} from "motion/react";

const Speech = () => {
    return(
        <motion.div 
        className='bubbleContainer'
         animate={{opacity: [0,1]}}
          transition={{duration: 1}}> 
            <div className='bubble'>
                <TypeAnimation
                  sequence={[
        // Same substring at the start will only be typed out once, initially
                 'I build fast, responsive, and user-friendly web applications that turn ideas into reality',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Your idea, my code—let’s make it real',
                  1000,
                  'From concept to deployment—I deliver complete, production-ready solutions',
                  1000,
                  'Skilled in React, Node.js, and modern web technologies to deliver scalable applications',
                  1000
                ]}
                   wrapper="span"
                   speed={40}
                   deletionSpeed={60}
                  // omitDeletionAnimation
                   repeat={Infinity}
    />
            </div>
            <img src="/qasim.PNG" alt=""/>
        </motion.div>  
    )
}
export default Speech;