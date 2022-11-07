import './../css/ExperienceCard.css'
import React from 'react'
import Card from 'react-bootstrap/Card'
import data from '../data/ProfessionalExperience.json'

function ExperienceCard() {

    const Experiences = data.Experience.map((experience) => 
        <div>
            <Card style={{ width: '40rem', textAlign: 'left', padding: '1rem'}}>
                <Card.Body>
                <Card.Title>{experience.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{experience.Organization}, {experience.location}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{experience.duration}</Card.Subtitle>
                <Card.Text style={{fontSize: 'medium'}}>
                    <ul>
                        {experience.highlights.map((highlight) => 
                            <li>{highlight}</li>
                        )}
                    </ul>
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>


        </div>
    )


    return (
        
        <div className='ExperienceCard'>
            {Experiences}
        </div>

    )

}

export default ExperienceCard