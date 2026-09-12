import { useInView } from "@/hooks/useInView";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "5 Principles of Timeless Interior Design",
    excerpt: "What separates spaces that age gracefully from those that feel dated in five years? These five core principles guide our design decisions.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=800",
    slug: "timeless-interior-design-principles",
    date: "Aug 2025",
    readTime: "5 min"
  },
  {
    title: "How to Choose the Right Material Palette",
    excerpt: "Materials set the emotional tone of a space. Learn how we approach palette-building — from stone textures to fabric weights.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800",
    slug: "choosing-material-palette",
    date: "Jul 2025",
    readTime: "4 min"
  },
  {
    title: "Small Spaces, Bold Outcomes",
    excerpt: "Compact doesn't mean compromise. We explore how thoughtful spatial planning transforms tight layouts into extraordinary living.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
    slug: "small-spaces-bold-outcomes",
    date: "Jun 2025",
    readTime: "6 min"
  }
];

export function BlogSection() {
  const headerRef = useInView({ margin: "-100px" });
  const gridRef = useInView({ margin: "-80px" });

  return (
    <Section className="cv-auto bg-[#fafafa] border-t border-neutral-200/80">
      <Container>
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row gap-6 justify-between items-end mb-8 md:mb-12"
        >
          <div className="fade-up max-w-2xl">
            <Text className="text-sm font-semibold tracking-widest uppercase mb-4 text-gray-500">
              // Journal
            </Text>
            <Heading as="h2" className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[0.015em] text-neutral-900 leading-[1.1]">
              Design insights
            </Heading>
            <Text className="text-gray-600 text-base sm:text-lg">
              Thoughts on design, process, and what makes great spaces.
            </Text>
          </div>
          <div className="fade-up delay-2">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 border border-neutral-300 bg-white text-neutral-900 font-semibold hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all shadow-xs text-sm"
            >
              All posts
            </Link>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div
              key={post.slug}
              className={`fade-up delay-${i + 1}`}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group cursor-pointer flex flex-col bg-white p-4 pb-8 rounded-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative overflow-hidden mb-6 aspect-4/3 rounded-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                  />
                </div>
                <div className="px-2">
                  <div className="flex items-center gap-3 mb-3">
                    <Text size="xs" className="text-gray-400">{post.date}</Text>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <Text size="xs" className="text-gray-400">{post.readTime} read</Text>
                  </div>
                  <Heading as="h5" className="mb-3 group-hover:text-gray-600 transition-colors line-clamp-2">{post.title}</Heading>
                  <Text size="sm" className="text-gray-500 line-clamp-3">{post.excerpt}</Text>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
