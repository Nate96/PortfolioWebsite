import './../css/ExperienceCard.css'
import React from 'react'
import Card from 'react-bootstrap/Card'
import data from '../data/ProfessionalExperience.json'

const  ExperienceCard = () => {
    const Experiences = data.Experience.map((experience) => 
        <div style={{paddingBottom: '1rem'}}>
            <Card style={{ maxWidth: '40rem', textAlign: 'left'}}>
                <Card.Body>
                <Card.Title>{experience.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{experience.Organization}, {experience.location}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{experience.startDate} - {experience.endDate}</Card.Subtitle>
                <Card.Text style={{fontSize: 'medium'}}>
                    <ul>
                        {experience.highlights.map((highlight) => 
                            <li>{highlight}</li>
                        )}
                    </ul>
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
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