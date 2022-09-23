import "./ReviewTrails.css";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
//Idea from https://react-icons.github.io/react-icons/icons?name=ai
import img from '../../assets/images/hike.jpg';

export default function ReviewTrails() {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluate";
      case 1:
        return "Very Dissatisfied";
      case 2:
        return "Dissatisfied";
      case 3:
        return "Neutral";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return "Comment here...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "Thank you for your rating. How can Go Trek imporve?";
      case 5:
        return "What is your favorite thing about Go Trek?";
      default:
        return "Comment here...";
    }
  };
  return (
    <div className="review">
      <div className="position">
        <div className="content">
          <div className="trail">
            <img
              style={{ width: 60, height: 60, objectFit: "cover" }}
              src="https://www.pexels.com/photo/person-waking-on-hill-554609/"
              alt="Trail Pic"
            />
            <h1>Go Trek Trails</h1>
          </div>
          <div>
            <h1>{handleText()}</h1>
            {Array(5)
              .fill()
              .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                  <AiFillStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                ) : (
                  <AiOutlineStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                )
              )}
          </div>
          <textarea placeholder={handlePlaceHolder()}></textarea>
          <button className={` ${!number && "disabled"} `}>Submit</button>
        </div>
      </div>
    </div>
  );
}
