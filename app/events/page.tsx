import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const events = [
  {
    title: "Words of\nWisdom",
    subtitle: "HH Guru Prasad\nSwami Maharaj",
    image: "/images/wordsofwisdom.png",
  },
  {
    title: "Theatrical\nShow",
    subtitle: "",
    image: "/images/theatre.png",
  },
  {
    title: "Musical\nConcert",
    subtitle: "",
    image: "/images/music.png",
  },
  {
    title: "Cultural\nPerformance",
    subtitle: "",
    image: "/images/culture.png",
  },
];

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-pink-800 to-pink-400 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-white mb-16 tracking-wider" style={{letterSpacing:'2px'}}>EVENTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-7xl px-4">
          {events.map((event, idx) => (
            <div key={event.title} className="relative flex flex-col items-center" style={{ transform: 'rotate(-19deg)', width: 304, height: 913, margin: '0 auto' }}>
              {/* Accent rectangle (yellow) */}
              <div style={{ width: 70.97, height: 111.27, background: '#FFF000', position: 'absolute', left: 0, top: 500, zIndex: 1, borderRadius: 16 }} />
              {/* Card background */}
              <div className="bg-white shadow-xl rounded-3xl relative flex flex-col" style={{ width: 304, height: 913, zIndex: 2 }}>
                <img src={event.image} alt={event.title.replace(/\n/g, ' ')} className="w-full object-cover rounded-t-3xl" style={{ height: '70%' }} />
                <div className="p-6 flex-1 flex flex-col justify-end">
                  <div style={{
                    color: '#FFF000',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 800,
                    fontSize: 37.23,
                    lineHeight: '40.95px',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    textAlign: 'left',
                    whiteSpace: 'pre-line',
                  }}>
                    {event.title}
                  </div>
                  {event.subtitle && (
                    <div style={{
                      color: 'white',
                      fontFamily: 'Lato, sans-serif',
                      fontWeight: 700,
                      fontSize: 26.66,
                      lineHeight: '31.99px',
                      marginTop: 8,
                      whiteSpace: 'pre-line',
                    }}>
                      {event.subtitle}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
} 