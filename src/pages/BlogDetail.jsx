import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { ArrowLeft } from "lucide-react";
import { blogData } from "@/data/blogData";
import ReactMarkdown from "react-markdown";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogData[slug];
  


  if (!post) {
    return (
      <div className="pt-32 pb-20 flex flex-col items-center min-h-[60vh] justify-center text-center">
        <Heading as="h1" className="mb-4">Post Not Found</Heading>
        <Text className="text-gray-500 mb-8">The article you are looking for does not exist.</Text>
        <Link to="/blog" className="text-black font-medium underline underline-offset-4">Back to Journal</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fafafa] min-h-screen pt-32 pb-24">
      <SEO 
        title={`${post.title} - D Mimo Journal`} 
        description={post.excerpt}
      />
      
      <Container className="max-w-4xl">
        <div className="mb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-gray-500 hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </Link>
          <Heading as="h1" className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[0.015em] leading-tight mb-6">
            {post.title}
          </Heading>
          <div className="flex items-center gap-4 text-gray-500 font-medium">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>{post.readTime} read</span>
          </div>
        </div>

        <div className="w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden mb-16 shadow-sm">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="prose prose-lg prose-neutral max-w-3xl mx-auto">
          <ReactMarkdown
            components={{
              h3: ({node, ...props}) => <Heading as="h3" className="text-2xl mt-12 mb-4" {...props} />,
              p: ({node, ...props}) => <Text className="text-gray-600 text-lg leading-relaxed mb-6" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </Container>
    </div>
  );
}
