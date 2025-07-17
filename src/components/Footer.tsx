import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const services = [
    'Rekuperácie',
    'Tepelné čerpadlá',
    'Klimatizácie',
    'Montáž a servis',
    'Finančné poradenstvo'
  ];

  const quickLinks = [
    { label: 'Domov', href: '#home' },
    { label: 'Služby', href: '#services' },
    { label: 'Prečo Fischair', href: '#why-us' },
    { label: 'Pre koho', href: '#target' },
    { label: 'Kontakt', href: '#contact' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Fischair</span>
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Sme slovenská spoločnosť špecializujúca sa na predaj a montáž rekuperácií, 
              tepelných čerpadiel a klimatizácií. Pomáhame vytvárať zdravé a úsporné bývanie 
              pre domácnosti aj firmy po celom Slovensku.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+421 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@fischair.sk</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Bratislava, Slovensko</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background/10 hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Naše služby</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-background/80 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Rýchle odkazy</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/80 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Pracovný čas</h5>
              <p className="text-background/80 text-sm">
                Pondelok - Piatok: 8:00 - 17:00<br />
                Víkendy: na dohovor
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 Fischair. Všetky práva vyhradené.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Ochrana osobných údajov
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Obchodné podmienky
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;