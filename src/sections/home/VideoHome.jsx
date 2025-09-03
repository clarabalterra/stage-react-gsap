const VideoHome = () => {
  return (
    <div className="flex justify-center lg:px-12">
      <div
        className="bg-coyote 
    h-[calc(100vh-3rem)] lg:h-[calc(100vh-6rem)] 
    w-[calc(100vw-3rem)] lg:w-[calc(100vw-6rem)] 
    rounded-2xl "
      >
        <video
          src="/home-video.mp4"
          className="w-full h-full object-cover rounded-2xl"
          autoPlay
          muted
          playsInline
          loop
        ></video>
      </div>
    </div>
  );
};

export default VideoHome;
