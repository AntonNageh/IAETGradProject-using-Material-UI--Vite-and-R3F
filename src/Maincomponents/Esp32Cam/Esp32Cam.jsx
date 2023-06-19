import React from "react";
import ReactPlayer from "react-player"

const Esp32Cam = () => {
  
  const url = "http://192.168.4.0/capture?_cb=1684748061392/video-stream"; 
  
  return (
    <div>
      <ReactPlayer url={url} playing />
    </div>
  );
};

export default Esp32Cam;







// import React from "react";

// const Esp32LiveStream = () => {
//   const videoUrl = "http://esp32-ip-address/video-stream";

//   return (
//     <div>
//       <video src={videoUrl} autoPlay />
//     </div>
//   );
// };

// export default Esp32LiveStream;





// fetch("http://esp32-ip-address/video-stream")
// 			.then(response => {
// 				// Create a readable stream from the response
// 				const reader = response.body.getReader();

// 				// Create a writable stream to receive the video data
// 				const videoStream = new ReadableStream({
// 					start(controller) {
// 						function push() {
// 							reader.read().then(({ done, value }) => {
// 								if (done) {
// 									controller.close();
// 									return;
// 								}

// 								controller.enqueue(value);
// 								push();
// 							});
// 						}

// 						push();
// 					}
// 				});

// 				// Create a blob URL for the video stream
// 				const videoBlob = new Blob([videoStream], { type: "video/mp4" });
// 				const videoUrl = URL.createObjectURL(videoBlob);

// 				// Set the video player source to the blob URL
// 				const videoPlayer = document.getElementById("videoPlayer");
// 				videoPlayer.src = videoUrl;
// 			})
// 			.catch(error => {
// 				console.error(error);
// 			});























