import React from 'react'
import Card from 'react-bootstrap/Card'
import picture from './../data/Nate2.png'
import 'bootstrap/dist/css/bootstrap.css';

function NameCard() {
    return (
        <div style={{paddingBottom: '1rem'}}>
            <Card className='nameCard' style={{
                    maxWidth: '40rem', 
                    maxHight: '10rem', 
                    textAlign: 'left', 
                }}>
                <img className='card-img-top' src={picture} alt='Card image cap'/> 
                <div className='card-body'>
                    <h1 className='card-title'>Nate Braukhoff</h1>
                    <p className='card-text' style={{fontSize: '18px'}}>(262)-794-6972</p>
                    <p className='card-text' style={{fontSize: '18px'}}>nate.braukhoff@gmail.com</p>
                </div>
            </Card>
        </div>

    )
}

export default NameCard