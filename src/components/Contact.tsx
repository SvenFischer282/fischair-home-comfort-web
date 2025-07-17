import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefón',
      value: '+421 XXX XXX XXX',
      description: 'Voľanie zdarma'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@fischair.sk',
      description: 'Odpovieme do 24 hodín'
    },
    {
      icon: MapPin,
      title: 'Adresa',
      value: 'Bratislava, Slovensko',
      description: 'Pôsobíme po celom Slovensku'
    },
    {
      icon: Clock,
      title: 'Pracovný čas',
      value: 'Po - Pi: 8:00 - 17:00',
      description: 'Víkendy: na dohovor'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontaktujte nás
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Máte otázky alebo potrebujete poradenstvo? Kontaktujte nás ešte dnes 
            a pripravíme vám nezáväznú cenovú ponuku na mieru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Kontaktné informácie
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow bg-gradient-to-br from-card to-secondary/20 border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <p className="text-foreground font-medium">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional info */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Prečo nás kontaktovať?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Bezplatná konzultácia a cenová ponuka</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Pomoc s výberom najvhodnejšieho riešenia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Informácie o dostupných dotáciách</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Technické poradenstvo od odborníkov</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl bg-gradient-to-br from-card to-secondary/20 border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Napíšte nám
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Meno a priezvisko *
                    </label>
                    <Input placeholder="Vaše meno" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefón *
                    </label>
                    <Input placeholder="+421 XXX XXX XXX" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input type="email" placeholder="vas@email.sk" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Predmet záujmu
                  </label>
                  <select className="w-full p-3 border border-input rounded-md bg-background text-foreground">
                    <option>Rekuperácia</option>
                    <option>Tepelné čerpadlo</option>
                    <option>Klimatizácia</option>
                    <option>Kombinácia riešení</option>
                    <option>Nezáväzná konzultácia</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Správa
                  </label>
                  <Textarea 
                    placeholder="Opíšte nám vaše potreby a požiadavky..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-primary to-primary-light shadow-lg hover:shadow-xl">
                  <Send className="mr-2 h-4 w-4" />
                  Odoslať správu
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  * Povinné polia. Vaše údaje sú v bezpečí a nebudú zdieľané s tretími stranami.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;