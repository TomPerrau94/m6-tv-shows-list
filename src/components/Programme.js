import React from "react";

const Programme = ({ className, programmeTv }) => {
  //   console.log(programmeTv);
  return (
    <div className={className}>
      <span className="programme-time">{programmeTv.time}</span>
      <img src={programmeTv.image} alt=""></img>
      <div className="programme-infos">
        <h2>{programmeTv.title}</h2>
        <p>{programmeTv.type}</p>
        <div className="programme-more-infos">
          <span className="programme-duration">{programmeTv.duration}</span>
          <span className="programme-tag">
            {programmeTv.isUnseen === false ? null : <span>• Inédit</span>}
            {programmeTv.direct === false ? null : <span>• Direct</span>}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Programme;
