import Nav from '../Nav/Nav'
import './About.css'

function About() {
    return (
        <>
        <div className='about'>
            <div className='about-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.8309361072384!2d-63.13159892352784!3d46.233706681768005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e5318d37170af%3A0xae1d2778ac6cc8de!2sHaru%20K-BBQ!5e0!3m2!1sen!2sca!4v1777837749952!5m2!1sen!2sca" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <div className='about-text'>
                    <h1>About <span className='haru'>Haru</span></h1>
                    <p>Located right in the heart of the city on bustling Grafton Street,<br/> Haru K-BBQ brings the authentic, interactive joy of Korean barbecue to Prince Edward Island.<br/><br/> As a family-owned restaurant, we believe the best meals are the ones cooked and shared together. From our fresh, local ingredients to our traditional family recipes, we invite you to join us and experience the true taste of Seoul right here in PEI.</p>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default About