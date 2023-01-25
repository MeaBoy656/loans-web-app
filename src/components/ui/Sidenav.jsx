import "./Sidenav.scss";

const Sidenav = (props) => {
  const lineStyle = {
    height: (props.percent / 100) * 350 + "px",
  };
  // CSS ANIMATION to gsap
  return (
    <header className="sidenav-container">
      <div id="logo"></div>
      <nav className="navbar-container">
        <div className="bar_and_line--container">
          <div className="bar">
            {Array(4)
              .fill("")
              .map((item, index) => {
                item = null;
                return (
                  <div
                    key={index}
                    className={`circle-number ${
                      index + 1 === props.step
                        ? "active"
                        : index + 1 < props.step
                        ? "wasactive"
                        : ""
                    } `}
                  >
                    {index + 1}
                  </div>
                );
              })}
            {/* <div className="circle-number active">1</div>
            <div className="circle-number">2</div>
            <div className="circle-number">3</div>
            <div className="circle-number">4</div> */}
          </div>
          <div className="line2"></div>
          <div className="line" style={lineStyle}></div>
        </div>
        <ol className="navbar-list">
          <li className={props.step === 1 ? "active" : ""}>פרטי הלקוח</li>
          <li className={props.step === 2 ? "active" : ""}>פרטי העסק</li>
          <li className={props.step === 3 ? "active" : ""}>הלוואה</li>
          <li className={props.step === 4 ? "active" : ""}>העלאת מסמכים</li>
        </ol>
      </nav>
    </header>
  );
};

export default Sidenav;
