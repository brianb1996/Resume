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
                        Outside of work and school I enjoy spending time with my family and frinds. I
                        also enjoy working with my hand doing anything, from fixing phones or working
                        on cars to grilling or wood working.
                    </Typography>
                </div>
                
            </div>
        )
}

export default Interests