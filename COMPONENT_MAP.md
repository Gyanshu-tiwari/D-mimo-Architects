# Component Architecture Map

## Primitives
- `Container`: Reusable max-width and padded wrapper (`max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8`).
- `Section`: Wrapper for page sections to handle background colors and vertical padding (`py-24 sm:py-32`).
- `Heading`: Polymorphic component (`as="h1" | "h2"`) matching exact design tokens.
- `Text`: Body text component.
- `Button`: Primary, secondary, and ghost variants.
- `Link`: Accessible navigation links.
- `Image`: Optimized image component with cover/contain support.

## Patterns
- `Navbar`: Sticky top navigation with blurred background.
- `Footer`: Site footer with links and newsletter.
- `SectionHeader`: Standardized title and subtitle for sections.
- `ServiceCard`: Card displaying service details.
- `ProjectCard`: Card displaying portfolio items.
- `TestimonialCard`: Quote layout for reviews.
- `PricingCard`: Tiered pricing display.
- `FAQItem`: Accordion for questions.
- `BlogCard`: Article summary card.
- `LogoRow`: Flex/grid row for client logos.

## Sections
- `HeroSection`
- `AboutSection`
- `ServicesSection`
- `PhilosophySection`
- `WorksSection`
- `TestimonialsSection`
- `ProcessSection`
- `WhyUsSection`
- `PricingSection`
- `FAQSection`
- `BlogSection`

## Pages
- `Home` (`/`)
- `Projects` (`/projects`)
- `Services` (`/#services`)
- `About` (`/about`)
- `Blog` (`/blog`)
- `Contact` (`/contact`)
