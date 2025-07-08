
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-16">
            {/* Company info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="group">
                <img 
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Logo da CBAAP" 
                  className="h-10 w-auto mb-6 filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
                />
                <h3 className="text-lg font-semibold mb-4 text-white">
                  CBAAP
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
                  Agência de marketing digital especializada em estratégias que geram resultados reais.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group/item">
                  <Mail className="w-4 h-4 text-gray-400 group-hover/item:text-white transition-colors duration-200" />
                  <a href="mailto:cbaap.agencia@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                    cbaap.agencia@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white">
                Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/about" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/careers" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block"
                  >
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/privacy-policy" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block"
                  >
                    Privacidade
                  </Link>
                </li>
              </ul>

              {/* Social media */}
              <div className="mt-8">
                <h4 className="text-sm font-medium mb-4 text-white">Redes Sociais</h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.linkedin.com/company/cbaap/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group w-10 h-10 bg-[#0077B5] hover:bg-[#005885] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group w-10 h-10 bg-[#1877F2] hover:bg-[#166FE5] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Newsletter
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  Insights exclusivos sobre marketing digital
                </p>
                <form className="space-y-4" onSubmit={handleSubscribe}>
                  <input 
                    type="email" 
                    placeholder="Seu email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-gray-400 text-sm backdrop-blur-sm transition-all duration-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                  <button 
                    type="submit" 
                    className="w-full px-4 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <span>Inscrever-se</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    )}
                  </button>
                </form>
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
