import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Gift, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import giveImage from "@/assets/12.jpeg";

export function GiveSection() {
  return (
    <section className="pt-20 pb-28 lg:pt-28 lg:pb-36 bg-gradient-holy text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <img
          src={giveImage}
          alt="Church sanctuary"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-church-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4 border border-white/10">
              Support Our Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Partner with Us in{" "}
              <span className="text-red-500">Kingdom Work</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              Your generous giving enables us to spread the Gospel, support missions, 
              and transform lives. Every gift makes a difference in building God's kingdom.
            </p>
          </motion.div>

          {/* Giving Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-6 mb-10"
          >
            {[
              { icon: Heart, title: "Tithe", description: "Honor God with your firstfruits" },
              { icon: Gift, title: "Offering", description: "Give generously from your heart" },
              { icon: CreditCard, title: "Seed", description: "Plant seeds for your harvest" },
            ].map((option) => (
              <div
                key={option.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-church-gold/20 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-6 h-6 text-red-300" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{option.title}</h3>
                <p className="text-white/70 text-sm">{option.description}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button size="xl" className="bg-red-500" asChild>
              <Link to="/give">Give Online Now</Link>
            </Button>
            <p className="text-white/60 text-sm mt-4">
              Secure payment • Mobile Money • Bank Transfer • Card
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
