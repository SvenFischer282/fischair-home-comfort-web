import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, Wrench, Shield, PiggyBank } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Komplexné riešenia na mieru',
      description: 'Každý projekt navrhujeme individuálne, podľa potrieb a možností zákazníka.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Overené technológie',
      description: 'Spolupracujeme len s renomovanými výrobcami ako Daikin, Samsung, Toshiba, Nilan a ďalšími.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Wrench,
      title: 'Rýchla a čistá montáž',
      description: 'Náš vyškolený tím zabezpečí precíznu inštaláciu bez zbytočných prieťahov.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Záruka a servis',
      description: 'Na naše produkty aj prácu poskytujeme záručný a pozáručný servis, na ktorý sa môžete spoľahnúť.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: PiggyBank,
      title: 'Finančné poradenstvo',
      description: 'Pomôžeme vám získať dotácie (napr. Zelená domácnostiam) alebo nastaviť výhodné financovanie.',
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prečo si vybrať <span className="text-primary">Fischair</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sme vašim spoľahlivým partnerom pre energeticky efektívne riešenia. 
            Naša odbornosť a zákaznícky prístup sú zárukou vašej spokojnosti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/20 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${reason.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                      <h3 className="font-semibold text-foreground text-lg leading-tight">
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Spokojných zákazníkov</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Rokov skúseností</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Efektivita rekuperácie</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Technická podpora</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;