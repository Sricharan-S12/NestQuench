import { Link } from "react-router-dom";
import { Search, MapPin, Users, MessageSquare, Shield, Star, ArrowRight, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";
import { listings } from "@/data/mockData";
import { ListingCard } from "@/components/ListingCard";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    desc: "Filter PGs, hostels & flats near VIT Bhopal by price, type, and trust score.",
    to: "/listings",
  },
  {
    icon: MapPin,
    title: "VITian Heat Map",
    desc: "See where VIT Bhopal students are living — Ashta, Kotri, Sehore & more.",
    to: "/heatmap",
  },
  {
    icon: Users,
    title: "Find Roommates",
    desc: "Connect with fellow VITians looking for roommates near campus.",
    to: "/roommates",
  },
  {
    icon: MessageSquare,
    title: "Parent Portal",
    desc: "Parents can directly ask landlords about food, safety & maintenance.",
    to: "/parents",
  },
  {
    icon: Navigation,
    title: "Nearby Amenities",
    desc: "Check bus stops, railways, hospitals, and shops near Ashta, Kotri & Sehore.",
    to: "/amenities",
  },
  {
    icon: Shield,
    title: "Trust & Reviews",
    desc: "Anonymous reviews and trust scores to help you avoid bad landlords.",
    to: "/listings",
  },
];

const stats = [
  { value: "50+", label: "Verified Listings" },
  { value: "3,000+", label: "VIT Bhopal Students" },
  { value: "4", label: "Areas Covered" },
  { value: "98%", label: "Trust Rate" },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="VIT Bhopal student housing"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1024}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-up max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight">
              Find Your Perfect
              <span className="block text-primary"> Nest</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              The housing platform built exclusively for VIT Bhopal students. Verified PGs, hostels & flats near Ashta, Kotri & Sehore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-warm text-primary-foreground text-base font-semibold px-8 rounded-xl shadow-elevated hover:opacity-90 transition-opacity">
                <Link to="/listings">
                  <Search className="mr-2 h-5 w-5" />
                  Explore Listings
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm text-base font-semibold px-8 rounded-xl hover:bg-primary-foreground/20">
                <Link to="/roommates">
                  <Users className="mr-2 h-5 w-5" />
                  Find Roommate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Everything VITians Need
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              From smart search to parent peace-of-mind — NestMate has it all for VIT Bhopal students.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Link to={f.to} key={f.title}>
                  <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Featured Listings</h2>
              <p className="text-muted-foreground mt-1">Top-rated PGs & hostels near VIT Bhopal</p>
            </div>
            <Button asChild variant="ghost" className="text-primary font-semibold">
              <Link to="/listings">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.slice(0, 3).map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="gradient-warm rounded-3xl p-10 md:p-16 text-center shadow-elevated">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Find Your Nest?
            </h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto mb-8">
              Join thousands of VIT Bhopal students who found safe, verified housing through NestMate.
            </p>
            <Button asChild size="lg" className="bg-background text-foreground font-semibold px-8 rounded-xl hover:bg-background/90">
              <Link to="/listings">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
