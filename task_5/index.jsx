import { useState } from "react";

const tagTypes = {
  img: ({ imgAlt, imgSrc }) => <img src={imgSrc} alt={imgAlt} />,
  text: ({ content }) => <p>{content}</p>,
  address: ({ userData }) => (
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  ),
}

export const Block = ({ mouseEnterCallbak, type, ...props }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {tagTypes[type](props)}
    </div>
  );
};

function App() {
  return (
    <Fragment>
      <Block
        type='img'
        mouseEnterCallbak={() => console.log("hi from Block1")}
        imgSrc="https://ohmylook.ua/files/products/42504.290x484.JPG?ce7d3c50d2e66b146f8711dd9eb7af35"
        imgAlt="my picture"
      />
      <Block
        type='text'
        mouseEnterCallbak={() => console.log("hi from Block 2")}
        content="Magdalena"
      />
      <Block
        type='address'
        mouseEnterCallbak={() => console.log("hi from Block 3")}
        userData={{ country: "USA", street: "Maskavas" }}
      />
    </Fragment>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
