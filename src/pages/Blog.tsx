
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BlogPostCard from '@/components/BlogPostCard';
import NewsSystem from '@/components/NewsSystem';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  // Get the newest blog post for the featured post section
  const featuredPost = blogPosts.find(post => post.id === '4') || blogPosts[0]; // Feature the new post about sensor technology
  // Get the rest of the blog posts for the grid section
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id);
  
  return (
    <PageLayout>
      <SEO 
        title="CBAAP - Últimas Atualizações e Insights sobre Marketing Digital" 
        description="Mantenha-se atualizado com as últimas novidades e insights sobre marketing digital, tráfego pago e estratégias de agência da CBAAP."
        imageUrl={featuredPost?.imageUrl || "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"}
        keywords={['marketing digital', 'tráfego pago', 'insights de mercado', 'inovação digital', 'estratégias de performance', 'campanhas otimizadas']}
        type="website"
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Últimas Atualizações &amp; Insights CBAAP</h1>
            <p className="text-xl text-gray-300 mb-6">
              As últimas tendências e novidades em marketing digital, tráfego pago e estratégias de alta performance
            </p>
          </div>
        </div>
      </div>
      
      {/* Sistema de Notícias em Tempo Real */}
      <div className="container mx-auto px-4 py-16">
        <NewsSystem maxItems={9} autoRefresh={true} />
      </div>

      {/* Seção de Posts do Blog */}
      <div className="container mx-auto px-4 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Insights CBAAP</h2>
          <p className="text-xl text-gray-600">
            Artigos exclusivos da nossa equipe sobre estratégias avançadas de marketing digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`} className="col-span-1 md:col-span-2 lg:col-span-3">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="grid md:grid-cols-2 h-full">
                  <div 
                    className="bg-cover bg-center h-64 md:h-full p-8 flex items-center justify-center"
                    style={{ 
                      backgroundImage: `url('${featuredPost.imageUrl}')`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="text-white text-center bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium inline-block mb-4">Destaque</span>
                      <h3 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-gray-500 text-sm mb-2">Publicado: {featuredPost.date}</p>
                    <p className="text-gray-700 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Button variant="outline" className="group">
                      Leia Mais 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          )}
          
          {/* Other blog posts */}
          {otherPosts.map((post) => (
            <BlogPostCard 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl || '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png'}
              date={post.date}
              slug={post.slug}
              category={post.category}
            />
          ))}
          
          {/* If there are fewer than 3 published posts, add placeholders */}
          {blogPosts.length < 4 && Array.from({ length: Math.max(0, 4 - blogPosts.length) }).map((_, index) => (
            <BlogPostCard 
              key={`placeholder-${index}`}
              title="Próximo artigo"
              excerpt="Fique ligado para mais artigos interessantes sobre marketing digital e estratégias de tráfego pago."
              imageUrl={index % 2 === 0 ? "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png" : "/lovable-uploads/700e27d7-0513-4bfa-8ac4-f7fd6087594c.png"}
              date="Em breve"
              slug="#"
              category="Em breve"
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
