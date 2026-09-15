import { useInView } from "@/hooks/useInView";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { Link } from "react-router-dom";
import { blogList } from "@/data/blogData";

export function BlogSection({ showButton = true, showAll = false }) {
  const headerRef = useInView({ margin: "-100px" });
  const gridRef = useInView({ margin: "-80px" });

  const posts = showAll ? blogList : blogList.slice(0, 3);

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
          {showButton && (
            <div className="fade-up delay-2">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 border border-neutral-300 bg-white text-neutral-900 font-semibold hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all shadow-xs text-sm"
              >
                All posts
              </Link>
            </div>
          )}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div
              key={post.slug}
              className={`fade-up delay-${i + 1} group block`}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="cursor-pointer flex flex-col bg-white p-4 pb-8 rounded-sm shadow-sm group-hover:shadow-md group-hover:-translate-y-2 transition-all duration-500 ease-out"
              >
                <div className="relative overflow-hidden mb-6 aspect-4/3 rounded-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
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
