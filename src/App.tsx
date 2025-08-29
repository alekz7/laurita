// import React from "react";
import {
  Leaf,
  Scale,
  Shield,
  Mountain,
  TreePine,
  // Mail,
  // Phone,
  // MapPin,
  Linkedin,
  Mail as MailIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

function App() {
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log("Form submitted");
  // };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#234F32] via-[#3E7A5E] to-[#234F32] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 transform rotate-12">
            <TreePine size={120} />
          </div>
          <div className="absolute top-32 right-20 transform -rotate-12">
            <Leaf size={80} />
          </div>
          <div className="absolute bottom-20 left-1/4 transform rotate-45">
            <Scale size={100} />
          </div>
          <div className="absolute bottom-32 right-10 transform -rotate-45">
            <TreePine size={90} />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Scale size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Soluciones legales para un futuro sostenible
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Especialista en Derecho Ambiental y Regulación Industrial en México
          </p>
          <Button
            size="lg"
            className="bg-white text-[#234F32] hover:bg-white/90 text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Agenda tu consulta
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#234F32] mb-6">
                Quién Soy
              </h2>
              <div className="w-20 h-1 bg-[#3E7A5E] mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Soy{" "}
                <strong className="text-[#234F32]">Laura Ponce Allende</strong>,
                abogada con más de 10 años de experiencia en Derecho Ambiental y
                Regulación Industrial.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mi compromiso es ofrecer soluciones legales sólidas que protejan
                tanto a las empresas como al medio ambiente.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2 text-[#3E7A5E]">
                  <Shield size={20} />
                  <span className="font-medium">10+ años de experiencia</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/assets/Laura.jpeg"
                    alt="Laura Ponce Allende"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#3E7A5E] rounded-full flex items-center justify-center shadow-lg">
                  <Leaf size={24} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#234F32] mb-6">
              Servicios
            </h2>
            <div className="w-20 h-1 bg-[#3E7A5E] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrezco servicios especializados en derecho ambiental para
              empresas y organizaciones comprometidas con la sostenibilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg rounded-2xl">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#234F32]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#234F32]/20 transition-colors">
                  <Scale size={32} className="text-[#234F32]" />
                </div>
                <CardTitle className="text-xl font-serif text-[#234F32]">
                  Asesoría Jurídica Ambiental
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Cumplimiento normativo, planes de manejo, permisos y licencias
                  ambientales para garantizar el cumplimiento de la legislación
                  vigente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg rounded-2xl">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#234F32]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#234F32]/20 transition-colors">
                  <Shield size={32} className="text-[#234F32]" />
                </div>
                <CardTitle className="text-xl font-serif text-[#234F32]">
                  Defensa y Litigio Ambiental
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Entregas legales ante PROFEPA o ASEA, atención a
                  procedimientos administrativos, representación en descargas y
                  emisiones.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg rounded-2xl">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#234F32]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#234F32]/20 transition-colors">
                  <Mountain size={32} className="text-[#234F32]" />
                </div>
                <CardTitle className="text-xl font-serif text-[#234F32]">
                  Sectores Minero e Industrial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Estrategias legales para operaciones, regularización de
                  emisiones y descargas en sectores de alto impacto ambiental.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg rounded-2xl">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-[#234F32]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#234F32]/20 transition-colors">
                  <TreePine size={32} className="text-[#234F32]" />
                </div>
                <CardTitle className="text-xl font-serif text-[#234F32]">
                  Proyectos Forestales y de Energía
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Consultoría NOMs forestales, asesoría en energía y cambio
                  climático para proyectos sostenibles y renovables.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#234F32] mb-6">
              Contacto
            </h2>
            <div className="w-20 h-1 bg-[#3E7A5E] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              ¿Necesitas asesoría legal ambiental? Contáctame para una consulta
              personalizada.
            </p>
          </div>

          {/* <Card className="shadow-xl border-0 rounded-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-[#234F32] font-medium">
                      Nombre *
                    </Label>
                    <Input 
                      id="nombre" 
                      required 
                      className="border-gray-200 focus:border-[#3E7A5E] focus:ring-[#3E7A5E] rounded-xl"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="correo" className="text-[#234F32] font-medium">
                      Correo Electrónico *
                    </Label>
                    <Input 
                      id="correo" 
                      type="email" 
                      required 
                      className="border-gray-200 focus:border-[#3E7A5E] focus:ring-[#3E7A5E] rounded-xl"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-[#234F32] font-medium">
                    Teléfono
                  </Label>
                  <Input 
                    id="telefono" 
                    type="tel" 
                    className="border-gray-200 focus:border-[#3E7A5E] focus:ring-[#3E7A5E] rounded-xl"
                    placeholder="+52 55 1234 5678"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-[#234F32] font-medium">
                    Mensaje *
                  </Label>
                  <Textarea 
                    id="mensaje" 
                    required 
                    rows={5}
                    className="border-gray-200 focus:border-[#3E7A5E] focus:ring-[#3E7A5E] rounded-xl resize-none"
                    placeholder="Describe tu consulta o proyecto..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#234F32] hover:bg-[#3E7A5E] text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Enviar Consulta
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#234F32] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Scale size={24} />
                </div>
                <span className="text-xl font-serif font-bold">
                  Laura Ponce Allende
                </span>
              </div>
              <p className="text-white/80">Derecho Ambiental • México</p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="mailto:arual_ponce@hotmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                aria-label="Email"
              >
                <MailIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/laura-ponce"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © 2025 Laura Ponce Allende. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
