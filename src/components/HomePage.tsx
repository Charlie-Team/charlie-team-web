export default function HomePage() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
    >
      <iframe
        width="900"
        height="600"
        src="https://www.youtube.com/embed/ZkbIR7YjsIo"
        title="YouTube video player"
        style={{ border: 'none' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
