import'./Nav.css'


function Nav() {
    return (
        <>
            <div className='nav-container'>
                <div className='logo'>
                    <img src='../src/assets/images/logo.png' alt='Logo'></img>
                </div>
                <div className='nav-links'>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/menu'>Menu</a>
                </div>
            </div>
        </>

    )
}

export default Nav