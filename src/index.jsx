import React, { useRef } from "react";

const Drop = () => {
  const modelRef = useRef(null);

  const handleInputModel = (event) => {
    const model = event.target.files[0];
    modelRef.current.src = URL.createObjectURL(model);
  };

  return (
    <div>
      <input type="file" accept=".glb" onChange={handleInputModel} />
      <model-viewer
        ref={modelRef}
        camera-controls
      ></model-viewer>
    </div>
  );
};

export default Drop;