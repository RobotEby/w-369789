
import { ArrowRight, Linkedin, Mail, MapPin } from "lucide-react";
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
        description: "Obrigado por se inscrever em nosso newsletter.",
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
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden border-t border-gray-800">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-800/20"></div>
      </div>
      
      <div className="relative pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12">
            {/* Company Info */}
            <div className="lg:col-span-5">
              <div className="mb-8 animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
                  CBAAP
                </h2>
                <div className="w-16 h-0.5 bg-gray-600 rounded-full mb-6 animate-pulse"></div>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Transformamos ideias em estratégias digitais de alto impacto. Especializados em marketing digital, desenvolvimento e tecnologia para impulsionar o crescimento do seu negócio.
              </p>
              
              {/* Simple Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">cbaap.agencia@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Belo Horizonte, MG</span>
                </div>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-semibold text-white mb-6">Empresa</h3>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/about" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/careers" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                  >
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/privacy-policy" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                  >
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="lg:col-span-4">
              <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-6">
                Receba insights exclusivos sobre marketing digital e tecnologia.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Digite seu email" 
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 text-white placeholder-gray-500 transition-colors duration-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? "Inscrevendo..." : "Inscrever-se"}</span>
                  {!isSubmitting && (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                </button>
              </form>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} CBAAP. Todos os direitos reservados.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-500 text-sm mr-2">Siga-nos:</span>
                <a 
                  href="https://www.linkedin.com/company/cbaap/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#0077B5] transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
