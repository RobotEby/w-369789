
import { ArrowRight, Linkedin, Mail, Phone, MapPin } from "lucide-react";
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
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
      </div>
      
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
      
      <div className="relative pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12">
            {/* Company Info */}
            <div className="lg:col-span-5">
              <div className="mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
                  CBAAP
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Transformamos ideias em estratégias digitais de alto impacto. Especializados em marketing digital, desenvolvimento e tecnologia para impulsionar o crescimento do seu negócio.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>contato@cbaap.com.br</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <span>+55 (31) 9 9999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-red-400" />
                  </div>
                  <span>Belo Horizonte, MG - Brasil</span>
                </div>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-semibold text-white mb-6">Empresa</h3>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/about" 
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/careers" 
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/privacy-policy" 
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="lg:col-span-4">
              <h3 className="text-xl font-semibold text-white mb-6">Newsletter</h3>
              <p className="text-slate-300 mb-6">
                Receba insights exclusivos sobre marketing digital e tecnologia.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Digite seu email" 
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white placeholder-slate-400 transition-all duration-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
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
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} CBAAP. Todos os direitos reservados.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-slate-400 text-sm mr-2">Siga-nos:</span>
                <a 
                  href="https://www.linkedin.com/company/cbaap/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077B5] transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
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
