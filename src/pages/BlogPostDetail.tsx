import { useParams, Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { useEffect, useState } from 'react';
import { blogPosts } from '@/data/blogPosts';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, MessageSquare, Share, Tag, Lightbulb, ArrowRight, FileText, Rocket, Settings, CheckCircle, BarChart, Zap, Target, DollarSign, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LoadingAnimation } from '@/components/LoadingAnimation';

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string; }>();
  const post = blogPosts.find(post => post.slug === slug);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate loading for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [slug]);
  
  if (!post) {
    return (
      <PageLayout>
        <SEO title="Post Não Encontrado - CBAAP" description="O post solicitado não pôde ser encontrado." />
        <div className="container mx-auto px-4 py-16 min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
          <p>Não conseguimos encontrar o post que você está procurando.</p>
          <Link to="/blog" className="mt-4">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Voltar para o Blog
            </Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  // Calculate reading time (average 200 words per minute)
  const wordCount = post.content.reduce((count, section) => {
    if (section.content) {
      return count + section.content.split(/\s+/).length;
    } else if (section.items) {
      return count + section.items.join(' ').split(/\s+/).length;
    }
    return count;
  }, 0);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Format date for machine-readable ISO format (for structured data)
  const formatDateForISO = (dateStr: string) => {
    if (!dateStr) return '';
    const months: Record<string, string> = {
      'Jan': '01',
      'Feb': '02',
      'Mar': '03',
      'Apr': '04',
      'May': '05',
      'Jun': '06',
      'Jul': '07',
      'Aug': '08',
      'Sep': '09',
      'Oct': '10',
      'Nov': '11',
      'Dec': '12'
    };
    const parts = dateStr.split(' ');
    if (parts.length === 3) {
      const month = months[parts[0]];
      const day = parts[1].replace(',', '');
      const year = parts[2];
      return `${year}-${month}-${day.padStart(2, '0')}`;
    }
    return dateStr;
  };

  // Special rendering for the process blog post with the updated design
  const isProcessPost = slug === 'from-idea-to-launch-development-process';
  
  // Determine if this is the sensor technology post
  const isSensorPost = slug === 'leveraging-sensor-technology-product-development';

  // Extract keywords from post content
  const extractKeywords = () => {
    const keywords = ['marketing digital', 'desenvolvimento de campanhas', post.category.toLowerCase()];
    if (post.title.includes('Processo de Desenvolvimento')) {
      keywords.push('processo de desenvolvimento', 'campanhas', 'prototipagem', 'design de estratégias digitais');
    }
    return keywords;
  };
  
  return (
    <PageLayout>
      <SEO 
        title={`${post.title} - CBAAP`} 
        description={post.excerpt} 
        imageUrl={post.imageUrl} 
        type="article" 
        isBlogPost={true} 
        publishDate={formatDateForISO(post.date)} 
        modifiedDate={formatDateForISO(post.date)} 
        author={post.author} 
        category={post.category} 
        keywords={extractKeywords()} 
      />
      
      {/* Back Button - Fixed Position */}
      <div className="fixed top-20 left-4 z-40">
        <Link to="/blog">
          <Button 
            variant="outline" 
            className="bg-white/90 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-white hover:text-gray-900 shadow-md flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Voltar
          </Button>
        </Link>
      </div>
      
      <div className={cn("w-full pt-32 pb-16 relative", isSensorPost ? "bg-black text-white" : "bg-gradient-to-b from-gray-900 to-black text-white")} style={{
        backgroundImage: isSensorPost 
          ? `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url('${post.imageUrl}')`
          : `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${post.imageUrl}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 flex items-center gap-1.5">
                <Tag size={14} />
                {post.category}
              </Badge>
              <Badge variant="outline" className="border-white/10 text-white/80 backdrop-blur-sm flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </Badge>
              <Badge variant="outline" className="border-white/10 text-white/80 backdrop-blur-sm flex items-center gap-1.5">
                <Clock size={14} />
                {readingTime} min de leitura
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center text-gray-300">
              <BookOpen size={18} className="mr-2" />
              <span>Por {post.author}</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <LoadingAnimation />
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {isProcessPost ? <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6
        }} className="prose prose-lg max-w-none">
                {/* Process post rendering */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.1
          }} className="mb-8">
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    At WRLDS, we simplify the journey from an idea to a finished smart product. Whether you're starting from scratch or already have a clear concept ready to scale, we're here to support you exactly where you need us.
                  </p>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Let's walk through our process with an example:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                    <p className="text-gray-700 italic">
                      Imagine you come to us with the idea of a smart glove. This glove automatically senses the outside temperature and adjusts its own warmth accordingly. It also connects to an app where you can control settings and view temperature information.
                    </p>
                  </div>
                </motion.div>

                {/* Step 1 */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.2
          }} className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                      <Lightbulb size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Step 1: Understanding Your Idea</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-gray-700 mb-4">
                      It all starts with a clear conversation. When you bring us your glove idea, we first meet to fully understand your vision and requirements. We'll discuss key points: What problem does the product solve? Who will use it? After that, we set a clear and practical roadmap.
                    </p>
                    <p className="text-gray-700">
                      If you already have a basic prototype or idea, we'll quickly identify how we can help scale it effectively.
                    </p>
                  </div>
                </motion.div>
                
                {/* Arrow divider */}
                <div className="flex justify-center my-6">
                  <ArrowRight size={24} className="text-gray-400" />
                </div>

                {/* Step 2 */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.3
          }} className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
                      <FileText size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Step 2: Building the First Prototype</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-gray-700 mb-4">
                      Once the plan is set, our team moves quickly to develop the first working prototype. For your smart glove, we design temperature sensors, heating elements, electronics, and the companion app to work seamlessly together.
                    </p>
                    <p className="text-gray-700">
                      We use rapid prototyping techniques like 3D printing and quick electronics integration. Within weeks, you get a tangible product to test and gather feedback.
                    </p>
                  </div>
                </motion.div>
                
                {/* Arrow divider */}
                <div className="flex justify-center my-6">
                  <ArrowRight size={24} className="text-gray-400" />
                </div>

                {/* Step 3 */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.4
          }} className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
                      <CheckCircle size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Step 3: Testing & Refinement</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-gray-700 mb-4">
                      With your prototype ready, we jump into testing. You'll evaluate the glove under real-world conditions to identify improvements. Together, we'll adjust designs, optimize the heating response, enhance the app, and retest frequently.
                    </p>
                    <p className="text-gray-700">
                      This process is quick, iterative, and practical, bringing you closer to a reliable, user-friendly product.
                    </p>
                  </div>
                </motion.div>
                
                {/* Arrow divider */}
                <div className="flex justify-center my-6">
                  <ArrowRight size={24} className="text-gray-400" />
                </div>

                {/* Step 4 */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.5
          }} className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-gray-700">
                      <Settings size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Step 4: Preparing for Production</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-gray-700 mb-4">
                      Next, we prepare the glove for large-scale manufacturing. We refine the design for efficient production, select reliable components, and ensure quality at scale.
                    </p>
                    <p className="text-gray-700">
                      If you already have a manufacturing partner, we'll work closely with them. If not, we'll help you find the best production solution. In either case, we'll integrate the technology smoothly into the production process.
                    </p>
                  </div>
                </motion.div>
                
                {/* Arrow divider */}
                <div className="flex justify-center my-6">
                  <ArrowRight size={24} className="text-gray-400" />
                </div>

                {/* Step 5 */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.6
          }} className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center text-white">
                      <Rocket size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Step 5: Product Launch</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-gray-700 mb-4">
                      Finally, it's launch day. You introduce your smart glove, thoroughly tested and production-ready, to the market. WRLDS provides ongoing support to ensure a smooth launch—from technical documentation to supporting the app's release.
                    </p>
                  </div>
                </motion.div>

                {/* Why Choose WRLDS */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.7
          }} className="mt-12 bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose WRLDS?</h2>
                  <p className="text-gray-700 mb-4">
                    Developing smart products can be complex, but we make it simple. Clients choose us because:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-gray-200 p-2 rounded-full text-gray-700">
                        <FileText size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Clear Process</h3>
                        <p className="text-sm text-gray-600">Simple steps, clear timelines, and reduced risks.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-gray-200 p-2 rounded-full text-gray-700">
                        <Clock size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Speed & Flexibility</h3>
                        <p className="text-sm text-gray-600">Rapid prototyping and agile iterations get your product to market faster.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-gray-200 p-2 rounded-full text-gray-700">
                        <Settings size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Comprehensive Expertise</h3>
                        <p className="text-sm text-gray-600">Hardware, software, and design experts under one roof.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-gray-200 p-2 rounded-full text-gray-700">
                        <CheckCircle size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Practical Results</h3>
                        <p className="text-sm text-gray-600">Real-world testing ensures your final product meets user needs.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.8
          }} className="mt-12 text-center">
                  <p className="text-gray-700 mb-6">
                    Have an idea or ready to scale an existing product? We'd love to hear from you and help bring your vision to life. Reach out and let's get started!
                  </p>
                  <Link to="/contact">
                    <Button size="lg">Get in Touch</Button>
                  </Link>
                </motion.div>
              </motion.div> : isSensorPost ? 
              <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }} className="prose prose-lg max-w-none prose-neutral">
                {/* Sensor post with black and white style */}
                {post.content.map((section, index) => (
                  <motion.div key={index} initial={{
                    opacity: 0,
                    y: 10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    duration: 0.4,
                    delay: 0.1 * index
                  }} className={cn("mb-8", section.type === 'quote' && "my-10")}>
                    {section.type === 'paragraph' && (
                      <p className="text-gray-800 mb-4 leading-relaxed">
                        {section.content}
                      </p>
                    )}
                    
                    {section.type === 'heading' && (
                      <div className="flex items-center gap-3 mt-12 mb-6 border-b border-gray-200 pb-2">
                        {section.content === 'The Shift from Manual Testing to Sensor-Driven Insights' && (
                          <Lightbulb size={24} className="text-gray-800" />
                        )}
                        {section.content === 'Real-time Performance Measurement Made Easy' && (
                          <Zap size={24} className="text-gray-800" />
                        )}
                        {section.content === 'Faster Iterations Through Automated Testing and AI' && (
                          <BarChart size={24} className="text-gray-800" />
                        )}
                        {section.content === 'Key Business Benefits' && (
                          <Target size={24} className="text-gray-800" />
                        )}
                        {section.content === 'Ready to Transform Your Product Development?' && (
                          <Rocket size={24} className="text-gray-800" />
                        )}
                        <h2 className="text-2xl font-bold text-gray-900">{section.content}</h2>
                      </div>
                    )}
                    
                    {section.type === 'subheading' && (
                      <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800 flex items-center gap-2">
                        {section.content === 'Reduced Testing Costs' && (
                          <DollarSign size={18} className="text-gray-700" />
                        )}
                        {section.content === 'Shorter Time-to-Market' && (
                          <Clock size={18} className="text-gray-700" />
                        )}
                        {section.content === 'Enhanced Product Quality' && (
                          <CheckCircle size={18} className="text-gray-700" />
                        )}
                        {section.content === 'Stronger Decision-Making' && (
                          <Target size={18} className="text-gray-700" />
                        )}
                        {section.content}
                      </h3>
                    )}
                    
                    {section.type === 'list' && (
                      <ul className="list-disc pl-5 my-4 space-y-2">
                        {section.items?.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    )}
                    
                    {section.type === 'quote' && (
                      <blockquote className="border-l-4 border-gray-600 pl-5 py-2 my-8 bg-gray-50 rounded-r-lg italic text-gray-700">
                        <div className="flex">
                          <MessageSquare size={20} className="text-gray-600 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-lg m-0">{section.content}</p>
                        </div>
                      </blockquote>
                    )}
                  </motion.div>
                ))}
              </motion.div> : <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="prose prose-lg max-w-none">
                {/* Standard post rendering */}
                {post.content.map((section, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.1 * index
          }} className={cn("mb-8", section.type === 'quote' && "my-10")}>
                    {section.type === 'paragraph' && <p className="text-gray-700 mb-4 leading-relaxed">
                      {section.content}
                    </p>}
                    {section.type === 'heading' && <div className="flex items-center gap-3 mt-12 mb-6">
                        <div className="w-1.5 h-7 bg-purple-500 rounded-full"></div>
                        <h2 className="text-2xl font-bold text-gray-900">{section.content}</h2>
                      </div>}
                    {section.type === 'subheading' && <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800 flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        {section.content}
                      </h3>}
                    {section.type === 'list' && <ul className="list-disc pl-5 my-4 space-y-2">
                        {section.items?.map((item, itemIndex) => <li key={itemIndex} className="text-gray-700">{item}</li>)}
                      </ul>}
                    {section.type === 'quote' && <blockquote className="border-l-4 border-purple-500 pl-5 py-2 my-8 bg-purple-50 rounded-r-lg italic text-gray-700">
                        <div className="flex">
                          <MessageSquare size={20} className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-lg m-0">{section.content}</p>
                        </div>
                      </blockquote>}
                  </motion.div>)}
              </motion.div>}
            
            <Separator className="my-8" />
            
            <div className="flex flex-col sm:flex-row items-center justify-between py-6 bg-gray-50 rounded-lg p-6 shadow-sm">
              <div>
                <p className="text-sm text-gray-600 font-medium">Categoria: {post.category}</p>
              </div>
              <Link to="/blog" className="mt-4 sm:mt-0">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft size={16} />
                  Voltar para o Blog
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default BlogPostDetail;
