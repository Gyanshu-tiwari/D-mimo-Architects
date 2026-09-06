import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Section } from "@/components/primitives/Section";
import { Button } from "@/components/primitives/Button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Basic",
      target: "For small spaces",
      price: "$150",
      features: [
        "Small interior concept consultation",
        "Space planning recommendations",
        "Style & material direction",
        "Furniture layout guidance",
        "Summary & next steps"
      ]
    },
    {
      name: "Studio",
      target: "For full homes & renovations",
      price: "$550",
      isPopular: true,
      features: [
        "In-depth design consultation",
        "Detailed space planning",
        "Material & finish selections",
        "Lighting & layout guidance",
        "Furniture & decor direction",
        "Design roadmap & priorities",
        "Dedicated design lead"
      ]
    },
    {
      name: "Essential",
      target: "For medium-sized spaces",
      price: "$350",
      features: [
        "Full interior concept consultation",
        "Space planning recommendations",
        "Style & material direction",
        "Furniture layout guidance",
        "Summary & next steps"
      ]
    }
  ];

  return (
    <Section className="bg-base-dark text-white relative">
      <Container>
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <Text className="text-sm font-semibold tracking-widest uppercase mb-6 text-white/50">
              // Pricing
            </Text>
            <Heading as="h2" className="text-white mb-6">
              Simple pricing
            </Heading>
            <Text className="text-white/70">
              Clear packages designed for residential, renovation, and commercial interior projects.
            </Text>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col p-8 rounded-2xl ${
                plan.isPopular ? "bg-white text-black" : "border border-white/10"
              }`}
            >
              <Heading as="h6" className={`mb-1 ${plan.isPopular ? "text-black" : "text-white"}`}>{plan.name}</Heading>
              <Text size="sm" className={`mb-6 ${plan.isPopular ? "text-gray-500" : "text-white/50"}`}>{plan.target}</Text>
              
              <div className="mb-8 flex items-baseline">
                <Heading as="h2" className={`${plan.isPopular ? "text-black" : "text-white"}`}>{plan.price}</Heading>
                <span className={`ml-2 ${plan.isPopular ? "text-gray-500" : "text-white/50"}`}>/session</span>
              </div>
              
              <div className="mb-8 flex flex-col gap-4 grow">
                <Text size="sm" className={`font-semibold ${plan.isPopular ? "text-black" : "text-white"}`}>What's Included:</Text>
                {plan.features.map(feat => (
                  <div key={feat} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.isPopular ? "text-black" : "text-white"}`} />
                    <Text size="sm" className={`${plan.isPopular ? "text-gray-700" : "text-white/70"}`}>{feat}</Text>
                  </div>
                ))}
              </div>
              
              <Button asChild variant={plan.isPopular ? "primary" : "secondary"} className={!plan.isPopular ? "bg-transparent text-white border-white/20 hover:bg-white/5" : "w-full"}>
                <Link to="/contact">Get started</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
