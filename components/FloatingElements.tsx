export default function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Lighter Dark Blue & Blue Grey Gradient Blobs with 9% opacity */}
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        style={{
          background: 'radial-gradient(circle, #3A4B66 0%, #4B5A70 100%)',
          opacity: 0.09,
        }}
      ></div>

      <div
        className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        style={{
          background: 'radial-gradient(circle, #4B5A70 0%, #3A4B66 100%)',
          opacity: 0.09,
        }}
      ></div>

      <div
        className="absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
        style={{
          background: 'radial-gradient(circle, #3A4B66 0%, #4B5A70 100%)',
          opacity: 0.09,
        }}
      ></div>
    </div>
  );
}
