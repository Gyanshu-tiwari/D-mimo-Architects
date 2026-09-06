import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function BlogSection() {
  const posts = [
    {
      category: "Design Tips",
      date: "Jun 9, 2025",
      title: "Material choices that define interior longevity",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      link: "/blog/material-choices"
    },
    {
      category: "Strategy",
      date: "Nov 30, 2025",
      title: "Designing interior spaces that age gracefully",
      image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=800",
      link: "/blog/age-gracefully"
    },
    {
      category: "Design Tips",
      date: "Feb 11, 2025",
      title: "Designing commercial spaces with purpose",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
      link: "/blog/commercial-spaces"
    }
  ];

  return (
    <Section className="bg-base-light">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 justify-between mb-16 lg:mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <Text className="text-sm font-semibold tracking-widest uppercase mb-6 text-gray-500">
              // Blog
            </Text>
            <Heading as="h2" className="mb-6">
              Latest Insights
            </Heading>
            <Text className="text-gray-600">
              Thoughtful perspectives on interior design, renovation, materials, and spatial planning.
            </Text>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col bg-white p-4 pb-8 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden mb-6 aspect-4/3 rounded-sm">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="px-2">
                <div className="flex items-center gap-4 mb-3">
                  <Text size="sm" className="font-semibold text-black uppercase tracking-wider">{post.category}</Text>
                  <Text size="sm" className="text-gray-400">{post.date}</Text>
                </div>
                <Heading as="h6" className="group-hover:text-gray-600 transition-colors">
                  <Link to={post.link}>{post.title}</Link>
                </Heading>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
