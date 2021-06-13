import React from 'react'
import Typography from '@material-ui/core/Typography';

const content = {
    margin: '10px'
}

const page ={
    height: '100vh',
    padding: '5%'
}

const Interests = () => {
        return(
            <div style={page} id="Interests">
                <Typography variant='h2'>
                    Interests
                </Typography>
                <div style={content}>
                    <Typography variant='h5'>
                        &emsp;&emsp;Balancing work and school can be hectic, but when I manage to find 
                        free time I enjoy spending some of it with my family and frinds. I love 
                        watching movies and shows on netflix, hulu and amazon. When I have 
                        more time to available I like working with my hands, whether its 
                        fixing a phone, working on a car, or some type of carpentry. 
                        <br/>
                        <br/>
                        &emsp;&emsp;I would like to think I have passion for the outdoors. I like camping,
                        fishing and hiking. I'm a fan of the Blues, Cardinals, and Packers. My
                        schedule right now can be very limiting, but I try to make the most of
                        my time.
                    </Typography>
                </div>
                
            </div>
        )
}

export default Interests