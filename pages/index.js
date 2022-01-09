export default function Home() {
  return (
    <video
      className={`w-screen h-[calc(100vh-5rem)] object-cover`}
      autoPlay="autoplay"
      muted
      loop
    >
      <source src="intro.mp4" type="video/mp4" />
    </video>
  );
}
