import React from "react";

function Resume() {
  return (
    <div className="w-4/5  m-auto my-5">
      {/* <embed
        src={process.env.REACT_APP_RESUME_URL}
        width="100%"
        height="600px"
        type="application/pdf"
        className="border-red-500"
      /> */}
      <iframe
        src="https://drive.google.com/file/d/1dGrdBCg_TBaj_ca6qRLUZRGYZ9mi8nOc/preview"
        allow="autoplay"
        title="resume"
        className="w-full h-screen"
      ></iframe>
    </div>
  );
}

export default Resume;
