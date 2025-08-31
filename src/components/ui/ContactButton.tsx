'use client'

export default function ContactButton() {
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="px-4 py-2 bg-gray-900 border-2 border-transparent rounded-lg text-yellow-400 font-medium hover:text-yellow-300 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
      style={{
        background: 'linear-gradient(gray-900, gray-900) padding-box, linear-gradient(45deg, #ff0000, #ff4444, #ff8888, #ff4444, #ff0000) border-box'
      }}
    >
      <span className="relative z-10">Contact</span>
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
