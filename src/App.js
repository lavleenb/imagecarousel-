import './App.css';
import {PlusSlides, CurrentSlide } from './Script.js';

function App() {
  return (
    <div className="App">
      <body>
        <h1> HELLO </h1>
        <div className='slideshow container'>
          <div className='slides swipe'>
            <div className='numbertext'>1 / 8</div>
            <img src="./assets/img1.jpg" alt=''></img>
            <div className='caption'>canton liberty fest</div>
          </div>
          <div className='slides swipe'>
            <div className='numbertext'>2 / 8</div>
            <img src="./assets/img2.jpg" alt=''></img>
            <div className='caption'>neha didi's maiyan rangoli</div>
          </div>
          <div className='slides swipe'>
            <div className='numbertext'>3 / 8</div>
            <img src="./assets/img3.jpg" alt=''></img>
            <div className='caption'>canton liberty fest</div>
          </div>
          <div className='slides swipe'>
            <div className='numbertext'>4 / 8</div>
            <img src="./assets/img4.jpg" alt=''></img>
            <div className='caption'>canton liberty fest</div>
          </div>
          <div className='slides swipe'>
            <div className='numbertext'>5 / 8</div>
            <img src="./assets/img5.jpg" alt=''></img>
            <div className='caption'>canton liberty fest</div>
          </div>
          <div className='slides swipe'>
            <div className='numbertext'>6 / 8</div>
            <img src="./assets/img6.jpg" alt=''></img>
            <div className='caption'>canton liberty fest</div>
          </div>
          <div className='slides swipe'>
            <div className='numbertext'>7 / 8</div>
            <img src="./assets/img7.jpg" alt=''></img>
            <div className='caption'>canton liberty fest</div>
          </div>
          <div className='slides swipe'>
            <div className='numbertext'>8 / 8</div>
            <img src="./assets/img8.jpg" alt=''></img>
            <div className='caption'>canton liberty fest</div>
          </div>

          <button className='prev' onClick={PlusSlides(-1)}></button>
          <button className='next' onClick={PlusSlides(1)}></button>

          <div>
            <button class="dot" onClick={CurrentSlide(1)}></button>
            <button class="dot" onClick={CurrentSlide(2)}></button>
            <button class="dot" onClick={CurrentSlide(3)}></button>
            <button class="dot" onClick={CurrentSlide(4)}></button>
            <button class="dot" onClick={CurrentSlide(5)}></button>
            <button class="dot" onClick={CurrentSlide(6)}></button>
            <button class="dot" onClick={CurrentSlide(7)}></button>
            <button class="dot" onClick={CurrentSlide(8)}></button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
