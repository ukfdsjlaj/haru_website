import './Home.css'

function Home() {
    return(
        <>
            <div className='body-container'>
                <div className='layer1'>
                    <div className='layer1-text'>
                        <h1>Make Your <span className='haru'>Haru</span> Speical</h1>
                        <p>Named after the Korean word for "a day," Haru is our family’s promise to you. <br/> Whether it's a quick lunch or a lingering dinner, we are here to provide the perfect meal to brighten your day.</p>
                        <button className="glf-button" data-glf-cuid="3e682d01-54ea-4d0f-acf8-549faeb260fb" data-glf-ruid="4c81dc7b-0e42-48f6-8827-09d6cefa1829" >Order Online</button>
                    </div>
                    <div className='layer1-image'>
                        <img src='/Chicken.png' alt='Home Image'></img>
                    </div>
                </div>
                <div className='layer2'>
                    <div className='layer2-image'>
                        <img src='/restaurant.jpg' alt='Home Image'></img>
                    </div>
                    <div className='layer2-text'>
                        <h1>Reserve Your Table</h1>
                        <p>Book your table now<br/>and enjoy a delightful dining experience at Haru.</p>
                        <button className="glf-button" data-glf-cuid="3e682d01-54ea-4d0f-acf8-549faeb260fb" data-glf-ruid="4c81dc7b-0e42-48f6-8827-09d6cefa1829" data-glf-reservation="true" >Reserve</button>
                    </div>
                </div>

                <div className='footer'></div>
            </div>

            <script src="https://www.fbgcdn.com/embedder/js/ewm2.js" defer async ></script>
        </>
    )
}

export default Home