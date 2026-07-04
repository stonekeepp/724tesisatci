---
name: Plumbing Excellence System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006780'
  on-secondary: '#ffffff'
  secondary-container: '#76dcff'
  on-secondary-container: '#006077'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#331200'
  on-tertiary-container: '#cf6721'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#b7eaff'
  secondary-fixed-dim: '#6cd3f7'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e61'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb68e'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#763300'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  margin-desktop: 4rem
  margin-mobile: 1.25rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
  section-padding: 6rem
---

## Brand & Style
The brand personality is authoritative, dependable, and premium. Unlike typical emergency services that lean into loud, frantic aesthetics, this design system prioritizes a calm, methodical approach to high-end plumbing. It targets discerning homeowners and commercial property managers who value technical expertise over the lowest price.

The visual style is **Corporate Modern with Tactile Refinement**. It utilizes heavy whitespace to convey a sense of order and cleanliness—essential for a service that deals with home maintenance. The UI feels "solid" and architectural, using subtle gradients and layered surfaces to suggest depth and reliability. Every interaction should feel intentional, reinforcing the promise of professional craftsmanship.

## Colors
The palette is rooted in a deep **Midnight Blue** (#0F172A), providing an anchor of trust and institutional stability. This is complemented by **Petrol Blue** (#0891B2) for interactive elements and brand accents, signifying modern technology and water-related precision.

**Warm Copper** (#B45309) is used sparingly as a premium accent to highlight high-value features, certifications, or "Gold Standard" services. **Urgent Orange** is strictly reserved for critical alerts or "Call Now" buttons in emergency contexts. The background system uses a layered approach of **Off-white** and **Light Blue-Gray** to differentiate content sections without the harshness of pure white.

## Typography
**Inter** is selected for its exceptional legibility and systematic, neutral character. The hierarchy is designed with generous leading (line height) to ensure the text feels breathable and easy to parse, especially for older demographics who may be seeking urgent services.

Headlines use semi-bold weights with slight negative letter spacing for a more "designed" and tight appearance. Labels use a slightly increased letter spacing and uppercase styling to denote metadata or small headers. Body text remains at a comfortable 16px or 18px to maintain the premium, editorial feel.

## Layout & Spacing
The layout follows a **12-column fixed grid** for desktop, ensuring content remains centered and readable on large displays. A hallmark of this system is "Sectional Breathing"—large vertical padding (96px+) between major service blocks to prevent the UI from feeling cluttered.

On mobile, the grid collapses to a single column with 20px side margins. Components like cards and service blocks should utilize an 8px base spacing scale. Use "Inset" layouts for detailed technical blocks to focus the user's attention toward the center of the screen.

## Elevation & Depth
Depth is achieved through **Soft Tonal Layering**. Instead of harsh shadows, use very soft, diffused shadows with a slight blue tint (using the Primary color at 5-10% opacity) to ground elements.

- **Level 0 (Base):** Background color (#F8FAFC).
- **Level 1 (Cards):** White surface with a 1px border (#E2E8F0) and a subtle 4px blur shadow.
- **Level 2 (Interactive):** Floating elements like Sticky CTAs use a 12px blur shadow with 8% opacity to appear physically elevated above the content.
- **Level 3 (Overlays):** Modals and drawers use a backdrop blur (12px) to maintain context while focusing on the action.

## Shapes
The design utilizes **Rounded (0.5rem base)** shapes, but extends to **Rounded-2XL (1rem to 1.5rem)** for primary containers and high-fidelity cards. This softness balances the "hard" nature of plumbing and construction, making the brand feel more approachable and modern.

Buttons should use the `rounded-lg` (1rem) or `rounded-full` (pill) style to distinguish them from structural layout containers.

## Components
- **Primary Buttons:** High-contrast Midnight Blue background with white text. On hover, transition to Petrol Blue. For "Emergency" buttons, use a solid Petrol Blue with a subtle Urgent Orange glow effect.
- **High-Fidelity Cards:** Used for services. They feature a white background, 1.5rem corner radius, and a 1px soft border. Icons within cards should be rendered in Copper or Petrol Blue.
- **Accordion FAQs:** Minimalist design with no outer border; use a light gray bottom-border only. Icons use a simple plus/minus toggle.
- **Sticky CTA Bar:** A fixed footer element for mobile, featuring a prominent "Call Now" button and a secondary "WhatsApp" icon, ensuring the user is never more than one tap away from contact.
- **Trust Badges:** Horizontal flex containers with grayscale logos of certifications (ISO, local trade guilds) that turn to brand colors on hover.
- **Input Fields:** Large, 48px height fields with a light gray fill and 0.5rem corner radius. Focus state uses a 2px Petrol Blue border.