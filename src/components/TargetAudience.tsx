import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, Briefcase, MapPin, CheckCircle } from "lucide-react";

const TargetAudience = () => {
  const targets = [
    {
      icon: Home,
      title: "Rodinné domy",
      description:
        "Kompletné riešenia pre rodinné domy - od rekuperácie až po tepelné čerpadlá",
      features: ["Zdravé bývanie", "Úspora energií", "Komfort pre celú rodinu"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Building,
      title: "Bytové domy",
      description:
        "Efektívne vykurovanie a vetranie pre bytové domy a väčšie obytné komplexy",
      features: [
        "Centrálne riešenia",
        "Nízke prevádzkové náklady",
        "Jednoduchá údržba",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Briefcase,
      title: "Kancelárie a prevádzky",
      description:
        "Profesionálne klimatizácie a vetracie systémy pre podnikateľské priestory",
      features: [
        "Produktívne prostredie",
        "Nízke prevádzkové náklady",
        "Flexibilné riešenia",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: MapPin,
      title: "Developerské projekty",
      description: "Komplexné dodávky pre nové rezidenčné a komerčné projekty",
      features: [
        "Veľkoobchodné ceny",
        "Projektové riadenie",
        "Včasná realizácia",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section id="target" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pre koho sme tu?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Naše riešenia sú vhodné pre rôzne typy nehnuteľností. Nech už ide o
            rodinný dom alebo veľký developerský projekt, máme pre vás to
            správne riešenie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {targets.map((target, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/20 border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div
                    className={`p-4 rounded-2xl ${target.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <target.icon className={`h-8 w-8 ${target.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {target.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {target.description}
                    </p>
                    <div className="space-y-2">
                      {target.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-sm text-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Urobte ten správny krok k efektívnemu a komfortnému bývaniu
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Zverte sa do rúk odborníkom z Fischair a získajte riešenie, ktoré
            dýcha spolu s vaším domovom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Nezáväzná konzultácia
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Cenová ponuka
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
