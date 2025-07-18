import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Thermometer, Snowflake, ArrowRight } from "lucide-react";
import rekuperaciaIcon from "@/assets/rekuperacia-icon.png";
import tepelneCerpadloIcon from "@/assets/tepelne-cerpadlo-icon.png";
import klimatizaciaIcon from "@/assets/klimatizacia-icon.png";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: rekuperaciaIcon,
      fallbackIcon: Wind,
      title: "Rekuperácie",
      description:
        "Zdravý vzduch bez tepelných strát. Vhodné pre novostavby aj rekonštrukcie.",
      features: [
        "Až 95% recuperácia tepla",
        "Kontinuálny prívod čerstvého vzduchu",
        "Filtrácia vzdušných nečistôt",
        "Zníženie vlhkosti a plesní",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: tepelneCerpadloIcon,
      fallbackIcon: Thermometer,
      title: "Tepelné čerpadlá",
      description:
        "Ekologické a úsporné vykurovanie s návratnosťou investície už od pár rokov.",
      features: [
        "Až 4x nižšie náklady na vykurovanie",
        "Environmentálne šetrné riešenie",
        "Vykurovanie aj chladenie",
        "Dlhá životnosť a spoľahlivosť",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: klimatizaciaIcon,
      fallbackIcon: Snowflake,
      title: "Klimatizácie",
      description:
        "Pohodlie počas celého roka – chladenie aj kúrenie modernou klimatizáciou.",
      features: [
        "Presná regulácia teploty",
        "Tichá prevádzka",
        "WiFi ovládanie",
        "Inverterová technológia",
      ],
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Naše služby
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ponúkame komplexné riešenia pre zdravé a energeticky efektívne
            bývanie. Každý projekt navrhujeme individuálne podľa vašich potrieb.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-secondary/20 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-20 h-20 mx-auto mb-4 p-4 rounded-2xl ${service.bgColor} group-hover:scale-110 transition-transform duration-300`}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to Lucide icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const iconContainer = target.parentElement!;
                      const FallbackIcon = service.fallbackIcon;
                      const iconElement = document.createElement("div");
                      iconElement.innerHTML = `<svg class="w-full h-full ${service.color}" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"></svg>`;
                      iconContainer.appendChild(iconElement);
                    }}
                  />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}

                <Button
                  asChild
                  variant="outline"
                  className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link
                    to={
                      service.title === "Rekuperácie"
                        ? "/rekuperacie"
                        : service.title === "Tepelné čerpadlá"
                        ? "/tepelne-cerpadla"
                        : service.title === "Klimatizácie"
                        ? "/klimatizacie"
                        : "/"
                    }
                  >
                    Viac informácií
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-light shadow-lg hover:shadow-xl"
          >
            Získať cenovú ponuku
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
