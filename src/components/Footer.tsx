
import { ArrowRight, Linkedin, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Erro",
        description: "Por favor, digite seu endereço de email.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: "Inscrito do Website CBAAP",
        from_email: email,
        message: `Nova solicitação de inscrição no newsletter da CBAAP.`,
        to_name: 'Equipe CBAAP',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Sucesso!",
        description: "Obrigado por se inscrever em nosso newsletter de marketing digital da CBAAP.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Erro ao enviar inscrição:", error);
      
      toast({
        title: "Erro",
        description: "Houve um problema na inscrição. Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="relative w-full overflow-hidden">
      {/* Background with gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      
      <div className="relative pt-20 pb-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
            {/* Company info - takes more space */}
            <div className="lg:col-span-5 space-y-8">
              <div className="group">
                <img 
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Logo da CBAAP com Gráficos de Marketing Digital" 
                  className="h-12 w-auto mb-8 filter brightness-0 invert group-hover:scale-105 transition-transform duration-300" 
                />
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  CBAAP - Agência de Marketing Digital
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                  Na CBAAP, unimos tecnologia e criatividade para desenvolver estratégias digitais que realmente funcionam. Nossa expertise abrange desde a criação e gestão de campanhas de tráfego pago até a implementação de soluções avançadas de analytics.
                </p>
              </div>

              {/* Contact info with icons */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group/item">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm font-medium">
                      Belo Horizonte, Minas Gerais<br />
                      Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group/item">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <a href="mailto:cbaap.agencia@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                      cbaap.agencia@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div>
                <h4 className="text-sm font-semibold mb-4 text-gray-200">Siga-nos</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/company/cbaap/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
                  >
                    <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 hover:-translate-y-1"
                  >
                    <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
                  >
                    <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Empresa
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/about" 
                    className="text-gray-300 hover:text-white transition-all duration-200 flex items-center group text-sm"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full mr-3 group-hover:from-white group-hover:to-gray-200 transition-all duration-200"></span>
                    Sobre a CBAAP
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/careers" 
                    className="text-gray-300 hover:text-white transition-all duration-200 flex items-center group text-sm"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full mr-3 group-hover:from-white group-hover:to-gray-200 transition-all duration-200"></span>
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/privacy-policy" 
                    className="text-gray-300 hover:text-white transition-all duration-200 flex items-center group text-sm"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full mr-3 group-hover:from-white group-hover:to-gray-200 transition-all duration-200"></span>
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="lg:col-span-4">
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
                <div className="relative">
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Newsletter
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm">
                    Receba insights exclusivos sobre marketing digital
                  </p>
                  <form className="space-y-4" onSubmit={handleSubscribe}>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Seu melhor email" 
                        className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:border-transparent text-white placeholder-gray-400 text-sm backdrop-blur-sm transition-all duration-200"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    <button 
                      type="submit" 
                      className="group relative w-full px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
                      disabled={isSubmitting}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      {isSubmitting ? (
                        <div className="flex items-center relative z-10">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          <span>Inscrevendo...</span>
                        </div>
                      ) : (
                        <div className="flex items-center relative z-10">
                          <span>Inscrever-se</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom section with elegant separator */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/30 to-transparent h-px"></div>
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm font-light">
                © {new Date().getFullYear()} CBAAP - Agência de Marketing Digital. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-6">
                <Link 
                  to="/privacy-policy" 
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light"
                >
                  Política de Privacidade
                </Link>
                <span className="text-gray-600 text-xs">•</span>
                <span className="text-sm text-gray-400 font-light">
                  Feito com ❤️ em Belo Horizonte
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
