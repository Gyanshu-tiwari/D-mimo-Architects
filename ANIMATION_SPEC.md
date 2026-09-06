# Animation Specification

## Motion Presets
| Element | Trigger | Initial | Target | Duration | Delay | Easing | Stagger | Notes |
| ------- | ------- | ------- | ------ | -------- | ----- | ------ | ------- | ----- |
| Hero Text | Page Load | `opacity: 0, y: 20` | `opacity: 1, y: 0` | 0.8s | 0.1s | `easeOut` | 0.1s | Soft fade up reveal |
| Hero Image | Page Load | `opacity: 0, scale: 1.05` | `opacity: 1, scale: 1` | 1.2s | 0.2s | `easeOut` | - | Subtle zoom out |
| Section Headings | Scroll in view | `opacity: 0, y: 20` | `opacity: 1, y: 0` | 0.6s | 0s | `easeOut` | - | Triggers when 20% in view |
| Cards / Grid Items | Scroll in view | `opacity: 0, y: 30` | `opacity: 1, y: 0` | 0.5s | 0.1s | `easeOut` | 0.1s per item | Sequential reveal |
| Navbar | Scroll down | `y: 0` | `y: -100%` | 0.3s | 0s | `easeInOut` | - | Hides on scroll down |
| Navbar | Scroll up | `y: -100%` | `y: 0` | 0.3s | 0s | `easeInOut` | - | Shows on scroll up, sticky |
| Buttons | Hover | `scale: 1` | `scale: 1.02` | 0.2s | 0s | `easeOut` | - | Includes bg color shift |
| Images | Hover | `scale: 1` | `scale: 1.05` | 0.4s | 0s | `easeOut` | - | Wrapped in `overflow-hidden` |
| Accordion | Click | `height: 0` | `height: auto` | 0.3s | 0s | `easeInOut` | - | FAQ expansion |

## Advanced Scroll Animations
- Minimal parallax on hero background.
- Sticky layout on the pricing section or featured works if applicable (needs closer GSAP mapping, but initially implement with standard Framer Motion variants).
