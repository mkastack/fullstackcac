import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/615301614_122200877756563087_4673069262446705519_n.jpg";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";

// Seed events removed, now fetching from Supabase

// Updated category colors for a more premium look in both modes
const categoryColors: Record<string, string> = {
  Prayer: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800",
  Youth: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800",
  Family: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-800",
  Women: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800",
  Children: "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800",
  Men: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800",
};

const defaultCategoryColor = "bg-muted text-muted-foreground border border-border";

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    async function fetchEvents() {
      const today = new Date().toISOString().split('T')[0];
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: false }); // Show newest first
      
      if (!error && data) {
        // Sort: Future events (ascending) then Past events (descending)
        const future = data.filter(e => e.date >= today).sort((a,b) => a.date.localeCompare(b.date));
        const past = data.filter(e => e.date < today).sort((a,b) => b.date.localeCompare(a.date));
        
        setEvents([...future, ...past].map(e => ({
          ...e,
          isPast: e.date < today
        })));
      }
      setLoading(false);
    }
    fetchEvents();
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribeStatus('loading');
    
    // Check if member already exists
    const { data: existing } = await supabase.from('members').select('id').eq('email', email).single();
    
    if (existing) {
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
      return;
    }

    const { error } = await supabase.from('members').insert([{
      full_name: 'Newsletter Subscriber',
      email: email,
      category: 'Visitor',
      status: 'Active'
    }]);

    if (error) {
      console.error('Subscription error:', error);
      setSubscribeStatus('error');
    } else {
      setSubscribeStatus('success');
      setEmail('');
    }

    setTimeout(() => setSubscribeStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-holy text-white relative">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Church sanctuary"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-hero-overlay" />
          </div>
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-5 py-2 bg-black/40 text-white border border-white/20 backdrop-blur-md rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-xl mb-6">
                Events & Programs
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Upcoming Events
              </h1>
              <p className="text-white/80 text-lg">
                Join us for worship, fellowship, and life-changing events. There's something for everyone!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20 bg-church-cream dark:bg-background">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-8">
              {loading ? (
                <div className="lg:col-span-2 text-center py-12 text-muted-foreground">Loading events...</div>
              ) : events.length > 0 ? (
                events.map((event, index)  => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-card relative border border-border rounded-2xl overflow-hidden shadow-[0_3px_10px_rgba(0,0,0,0.08)] hover:!shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 w-full ${
                      event.is_featured ? "ring-1 ring-church-red/10" : ""
                    }`}
                  >
                    {/* Left Accent Bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-church-red" />

                    <div className="p-5 sm:p-6 flex flex-col md:flex-row gap-6">
                      {/* Left Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${categoryColors[event.category] || defaultCategoryColor}`}>
                            {event.category || 'General'}
                          </span>
                          {event.isPast && (
                            <span className="px-4 py-1.5 bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                              Event Concluded
                            </span>
                          )}
                          {event.is_featured && !event.isPast && (
                            <span className="px-4 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-foreground mb-2 leading-tight group-hover:text-church-red transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-4 max-w-2xl">{event.description}</p>
                      </div>

                      {/* Right Details Panel */}
                      <div className="md:w-[280px] flex flex-col sm:flex-row md:flex-col justify-between gap-4 md:border-l border-neutral-200 dark:border-neutral-800 md:pl-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-4 text-foreground">
                            <div className="p-2 bg-muted rounded-lg text-church-red dark:text-red-400">
                              <Calendar className="w-5 h-5 shrink-0" />
                            </div>
                            <span className="font-bold text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-4 text-foreground">
                            <div className="p-2 bg-muted rounded-lg text-church-red dark:text-red-400">
                              <Clock className="w-5 h-5 shrink-0" />
                            </div>
                            <span className="font-bold text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center gap-4 text-foreground">
                            <div className="p-2 bg-muted rounded-lg text-church-red dark:text-red-400">
                              <MapPin className="w-5 h-5 shrink-0" />
                            </div>
                            <span className="font-bold text-sm tracking-tight">{event.location}</span>
                          </div>
                        </div>

                        <Button 
                          className="w-full h-12 bg-church-deep-blue dark:bg-church-royal-blue text-white hover:opacity-90 rounded-lg font-bold shadow-md shadow-church-deep-blue/20 transition-all active:scale-[0.98]"
                        >
                          Join Now
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))) : (
                <div className="lg:col-span-2 text-center py-12 text-muted-foreground font-medium">Check back soon for upcoming events!</div>
              )}
            </div>
          </div>
        </section>

        {/* Calendar CTA */}
        <section className="pt-16 pb-28 lg:pb-36 bg-background relative">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Church sanctuary"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-hero-overlay" />
          </div>
          <div className="container mx-auto px-6 text-center relative">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-church-red/10 backdrop-blur-md border border-church-red/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Calendar className="w-8 h-8 text-church-red" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-white mb-4">
                Never Miss an Event
              </h2>
              <p className="text-white/80 mb-8">
                Subscribe to our newsletter to receive updates about upcoming events, 
                programs, and special announcements straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-md mx-auto px-4 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribeStatus === 'loading'}
                  placeholder="Enter your email"
                  required
                  className="flex-1 h-12 text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-church-gold text-white placeholder:text-white/40 disabled:opacity-50 transition-all"
                />
                <Button 
                  type="submit"
                  disabled={subscribeStatus === 'loading'}
                  className="h-12 px-8 bg-church-red text-white hover:bg-church-red/90 transition-all font-bold shadow-lg"
                >
                  {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </Button>
                
                {subscribeStatus === 'success' && (
                  <div className="absolute -bottom-8 left-0 right-0 text-emerald-400 text-sm font-bold flex items-center justify-center gap-1 animate-fade-in">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Successfully subscribed!
                  </div>
                )}
                {subscribeStatus === 'error' && (
                  <div className="absolute -bottom-8 left-0 right-0 text-red-400 text-sm font-bold animate-fade-in">
                    Failed to subscribe. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
