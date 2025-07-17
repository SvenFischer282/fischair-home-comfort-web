import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Wind, Thermometer, Snowflake } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const features = [
    { icon: Wind, text: 'Zdravý vzduch' },
    { icon: Thermometer, text: 'Úspora energie' },
    { icon: Snowflake, text: 'Celoročný komfort' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Vitajte vo{' '}
              <span className="text-primary">Fischair</span>
              <br />
              <span className="text-3xl md:text-5xl text-muted-foreground">
                odborníci na zdravé a úsporné bývanie
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Fischair je slovenská spoločnosť špecializujúca sa na predaj a montáž 
              rekuperácií, tepelných čerpadiel a klimatizácií. Pomáhame domácnostiam 
              aj firmám šetriť energiu, znížiť náklady na vykurovanie a zároveň 
              zlepšiť kvalitu ovzdušia v interiéri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light shadow-lg hover:shadow-xl transition-all duration-300">
                Nezáväzná ponuka
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Naše služby
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-card to-secondary/50 backdrop-blur-sm border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">{feature.text}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>Overené technológie</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>Rýchla montáž</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>Záruka a servis</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>Finančné poradenstvo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;