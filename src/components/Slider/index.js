import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import audiImg from "../../assets/IMG_1696.jpg"
import sonataImg from "../../assets/IMG_0199.jpg"
import accordImg from "../../assets/IMG_1573.jpg"
import mainImg from "../../assets/main.jpg";
import aboutImg from "../../assets/about.jpg";
import orderImg from "../../assets/order.png";
import s from "../Layout/style.module.css";

const buttonStyle = {
  padding: "15px",
  borderRadius: "50%",
  background: "rgb(50,0,188,0.7)",
  opacity: 0.7,
  fontSize: "20px"
};
const contentStyle = {
  color: "black",
  fontSize: "20px"
};
const textStyle = {
  // paddingTop: '1.5 rem',
  // paddingBottom: '1.5rem',
  background: 'rgb(255,255,255,0.5)',
  fontSize: '1.6rem',
  textAlign: 'left',
  // color: '555',
  // lineHeight: '1.9rem',
}
const divTextStyle = {
  // left: '-500px'
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem',
  padding: '3rem 0',
  position: 'left',
  float: 'left',
}
const bgImg = {
  position: "absolute",
  zIndex: -1,
  left: 0,
  top: 0,
  width: "100%"
};

export default function App() {
  return (
    <AwesomeSlider
      organicArrows={false}
      buttonContentRight={<p style={buttonStyle}>{">"}</p>}
      buttonContentLeft={<p style={buttonStyle}>{"<"}</p>}
      play
      // customContent={<p style={contentStyle}>{"I am the content/text"}</p>}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
     
      
      {/* /////////HYUNDAI SONATA///////// */}
      <div style={{ zIndex: 2 }}>
        {/* <div> */}
          <img
            style={bgImg}
            alt="Wow"
            src={sonataImg}
          />
          <div style={divTextStyle}>
            {/* <h1 style={textStyle}>Microsoft</h1> */}
            <h2 style={textStyle}>
              HYUNDAI SONATA 2016 <br/>
              Состояние: Run and Drive<br/>
              Двигатель: 2.4  <br/>
              Пробег: 60939 миль<br/>
              Коробка передач: Automatic<br/>
              Цвет кузова: красный<br/>
              Ведущие колеса: передние<br/>
              Топливо: бензин<br/>
              Цена: 3550 USD <br/>
              {/* Цена в Украине: <br/> */}
              <a style={{color:'rgb(50,0,188,0.7)'}} href="https://autoastat.com/en/vehicle/5NPE24AFXGH365129-15193111">
                Ссылка AutoAstat
              </a>
            </h2>
          </div>
      </div>
      {/* /////////HONDA ACCORD///////// */}
      <div style={{ zIndex: 2 }}>
        {/* <div> */}
          <img
            style={bgImg}
            alt="Wow"
            src={accordImg}
          />
          <div style={divTextStyle}>
            {/* <h1 style={textStyle}>Microsoft</h1> */}
            <h2 style={textStyle}>
              HONDA ACCORD 2015 <br/>
              Состояние: Run and Drive<br/>
              Двигатель: 2.4  <br/>
              Пробег: 70328 миль<br/>
              Коробка передач: Automatic<br/>
              Цвет кузова: серый<br/>
              Ведущие колеса: передние<br/>
              Топливо: бензин<br/>
              Цена: 4650 USD <br/>
              {/* Цена в Украине: <br/> */}
              <a style={{color:'rgb(50,0,188,0.7)'}} href="https://autoastat.com/en/vehicle/1HGCR2F80FA086992-15799075">
                Ссылка AutoAstat
              </a>
            </h2>
          </div>
        </div>
         {/* /////////AUDI A7///////// */}
        <div style={{ zIndex: 2 }}>
        {/* <div> */}
          <img
            style={bgImg}
            alt="Wow"
            src={audiImg}
          />
          <div style={divTextStyle}>
            {/* <h1 style={textStyle}>Microsoft</h1> */}
            <h2 style={textStyle}>
              AUDI A7 2012 <br/>
              Состояние: Run and Drive<br/>
              Двигатель: 3.0 <br/>
              Пробег: 93500 миль<br/>
              Коробка передач: Automatic<br/>
              Цвет кузова: Серебряный<br/>
              Ведущие колеса: полный<br/>
              Топливо: бензин<br/>
              Цена: 8 600 USD <br/>
              {/* Цена в Украине: <br/> */}
              <a style={{color:'rgb(50,0,188,0.7)'}} href="https://autoastat.com/en/vehicle/WAUSGAFC7CN009679-16271934">
                Ссылка AutoAstat
              </a>
            </h2>
          </div>
        {/* </div> */}
      </div>

    </AwesomeSlider>
  );
}
      {/* <h2 style={textStyle}>
        AUDI A7 2012 <br/>
        Состояние: Run and Drive<br/>
        Двигатель: <br/>
        Пробег: <br/>
        Коробка передач: <br/>
        Цвет кузова: <br/>
        Ведущие колеса: <br/>
        Топливо: <br/>
        Цена: <br/>
        Цена в Украине: <br/>
        <a style={{color:'rgb(50,0,188,0.7)'}} href="https://autoastat.com/en/vehicle/WAUSGAFC7CN009679-16271934">
          Ссылка AutoAstat
        </a>
      </h2> */}

// import React from "react";
// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
// import mainImg from "../../assets/main.jpg";
// import aboutImg from "../../assets/about.jpg";
// import orderImg from "../../assets/order.png";
// import s from "../Layout/style.module.css";

// const Slider = ({ id, title, descr, urlBg, colorBg }) => {
//   // const styleColorBg = colorBg ? { background: colorBg } : {};
//   const styleUrlBg = urlBg ? { backgroundImage: `url(${urlBg})` } : {};
//   return (
//     <section className={s.root} id={id} style={{ ...styleUrlBg }}>
//       <div className={s.wrapper}>
//         <article>
//           <AwesomeSlider>
//             {/* cssModule={styles}> */}
//             <div >
//               <img
//                 src={orderImg}
//               ></img>
//               <h2 style={{
//                 color:"white"
//               }}>test</h2>
//             </div>
//             {/* <div data-src={mainImg} /> */}
//             <div data-src={aboutImg} />
//             <div data-src={orderImg} />
//           </AwesomeSlider>

//           {/* <div className={s.title}>
//             {title && <h3>{title}</h3>}
//             <span className={s.separator}></span>
//           </div>
//           <div className={s.desc}>{descr && <p>{descr}</p>}</div> */}
//         </article>
//       </div>
//     </section>
//   );
// };

// export default Slider;
