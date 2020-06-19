import React from "react";

export default function Point(props) {
   console.log(props);

   const descObj = props.pointDesc.find(
      (point) => point.pointTitle === props.point
   );

   console.log(descObj);
   return (
      <div>
         <div className="point-title">{props.point}</div>
         <div className="point-desc">{descObj.text}</div>
      </div>
   );
}
