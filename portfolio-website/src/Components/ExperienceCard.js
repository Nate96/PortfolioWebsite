import './../css/ExperienceCard.css'
import 'react-bootstrap'

import data from './../data/ProfessionalExperience.json'

function ExperienceCard() {

    const Experiences = data.Experience.map((experience) => 
        <div>
            <h2>{experience.title}</h2>
            <p>{experience.Organization}</p>
            <p>{experience.duration}</p>
            <p>{experience.location}</p>
            <ul>
                {
                    experience.highlights.map((highlight) => 
                        <li>{highlight}</li>
                    )
                }
            </ul>
        </div>
    )


    return (
        
        <div className='ExperienceCard'>
            {Experiences}
        </div>
    )

}

export default ExperienceCard