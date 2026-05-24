"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="medium"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Nuru Legende"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Authentic Döner Kebab, Legendary Flavor"
      description="Handcrafted döner made fresh daily with premium ingredients and traditional recipes. Order online or visit us today."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarah_foodie",
          testimonial: "The best döner I've ever had in the city! Absolutely authentic.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-chilling-out-classy-lifestyle-reserved-concept_53876-15896.jpg",
        },
        {
          name: "Mark D.",
          handle: "@mark_d",
          testimonial: "Fresh, fast, and legendary flavor. My go-to lunch spot.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-restaurant_23-2148006698.jpg",
        },
        {
          name: "Emily R.",
          handle: "@emily_r",
          testimonial: "The meat is always tender and the sauces are incredible.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-enjoying-mexican-barbecue_23-2151000370.jpg",
        },
        {
          name: "David K.",
          handle: "@david_k",
          testimonial: "Top-notch service and truly high-quality ingredients.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-business-woman_23-2148603029.jpg",
        },
        {
          name: "Jessica L.",
          handle: "@jess_l",
          testimonial: "Consistently amazing experience. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-hipster-guy-dressed-denim-shirt-wearing-stylish-glasses_273609-6821.jpg",
        },
      ]}
      buttons={[
        {
          text: "Order Now",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-lamb-doner-kebab-served-flatbread-with-pickles-fries_141793-2040.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/lovely-couple-enjoying-new-year-party_23-2149173295.jpg",
          alt: "Customer profile 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-couple-paying-bill-after-lunch-bar-man-is-using-smart-phone-contactless-payment_637285-631.jpg",
          alt: "Customer profile 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-happy-friends-table_23-2149213365.jpg",
          alt: "Customer profile 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598351.jpg",
          alt: "Customer profile 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/lunch-colleagues_1098-13959.jpg",
          alt: "Customer profile 5",
        },
      ]}
      avatarText="Trusted by 5,000+ food lovers"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="A Legacy of Flavor"
      description={[
        "Founded with a passion for tradition, Nuru Legende brings the authentic taste of premium döner kebab to your neighborhood.",
        "We believe in handcrafted quality, sourcing only the freshest ingredients to deliver a legendary culinary experience every single time.",
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Classic Beef Döner Wrap",
          price: "$9.50",
          variant: "Popular",
          imageSrc: "http://img.b2bpic.net/free-photo/roasted-meat-with-flapjack-served-with-pickles_140725-1210.jpg",
        },
        {
          id: "2",
          name: "Chicken Shawarma Plate",
          price: "$12.00",
          variant: "Best Seller",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-wings-served-with-fresh-salad-onions_140725-3057.jpg",
        },
        {
          id: "3",
          name: "Nuru Special Falafel Wrap",
          price: "$8.50",
          variant: "Vegetarian",
          imageSrc: "http://img.b2bpic.net/free-photo/doner-slices-with-green-salad-onions-white-plate_141793-1719.jpg",
        },
        {
          id: "4",
          name: "Mixed Döner Box",
          price: "$13.50",
          variant: "Hearty",
          imageSrc: "http://img.b2bpic.net/free-photo/azerbaijani-traditional-kebab-barbeque-lavash-with-sumakh-onion-green-salad_114579-2939.jpg",
        },
        {
          id: "5",
          name: "Premium Chicken Wrap",
          price: "$10.50",
          variant: "Spicy",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-with-spices-rice_140725-9649.jpg",
        },
        {
          id: "6",
          name: "Side Hummus & Pita",
          price: "$5.00",
          variant: "Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/kebab-combo-liver-rice-hummus-onion-vegetables-side-view_140725-11280.jpg",
        },
      ]}
      title="Our Menu Favorites"
      description="Explore our selection of premium döner wraps, platters, and sides crafted with love."
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Fresh Ingredients Daily",
          description: "We source the best local produce and fresh meat daily.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/man-preparing-salad-with-fresh-vegetables-wooden-table-cooking-tasty-healthy-food-black-background-vegetarian-food-healthy-cooking-concept-close-up_639032-431.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/chicken-bbq-served-lavash-with-spicy-salad_114579-1992.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-lamb-doner-kebab-served-flatbread-with-pickles-fries_141793-2040.jpg",
          imageAlt: "professional kitchen restaurant staff",
        },
        {
          title: "Traditional Recipes",
          description: "Authentic flavors passed down through generations.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/vegetable-composition-with-tomato-middle_23-2147681798.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/chef-cuts-tomatoes-meat-ramrod-with-onions-herbs-pita-bread_140725-3524.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/roasted-meat-with-flapjack-served-with-pickles_140725-1210.jpg",
          imageAlt: "professional kitchen restaurant staff",
        },
        {
          title: "Rapid Ordering",
          description: "Seamless online platform for quick pickups.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/chef-working-together-professional-kitchen_23-2149727963.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/two-pieces-lule-kebab-bbq-served-with-species-herbs_114579-1991.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-wings-served-with-fresh-salad-onions_140725-3057.jpg",
          imageAlt: "professional kitchen restaurant staff",
        },
      ]}
      showStepNumbers={true}
      title="Why Choose Nuru?"
      description="Experience the difference of authentic preparation and premium quality standards."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Delivery.com",
        "City Foodie",
        "Local Bites",
        "Top Kebab 2024",
        "Culinary Excellence",
        "Taste Magazine",
        "Food Guide",
      ]}
      title="Trusted by Foodies"
      description="See why local food enthusiasts and critics choose Nuru Legende."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Exceptional Quality",
          quote: "The meat quality is unmatched. Truly a premium experience.",
          name: "Alice M.",
          role: "Food Blogger",
          imageSrc: "http://img.b2bpic.net/free-photo/older-friends-eating-restaurant_23-2149316782.jpg",
        },
        {
          id: "2",
          title: "Reliable Lunch",
          quote: "I order here twice a week. Always consistent and delicious.",
          name: "Brian K.",
          role: "Software Engineer",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-woman-with-food_23-2148899066.jpg",
        },
        {
          id: "3",
          title: "Authentic Taste",
          quote: "Reminds me of the döner I had in Istanbul. Perfect seasoning.",
          name: "Cynthia H.",
          role: "Graphic Designer",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-young-woman-makes-hairstyle-with-rollers-going-have-breakfast-pours-milk-cornflakes-dressed-nightwear-undergoes-beauty-procedures-isolated-pink-background-morning-time_273609-62842.jpg",
        },
        {
          id: "4",
          title: "Great Staff",
          quote: "Friendly service makes the experience even better.",
          name: "Daniel P.",
          role: "Student",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg",
        },
        {
          id: "5",
          title: "Must Try",
          quote: "Do not skip the house sauce. It's a game changer!",
          name: "Elena T.",
          role: "Marketing Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-delicious-cocktail_23-2150166070.jpg",
        },
      ]}
      title="Voices of Nuru"
      description="Real feedback from our loyal community."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      title="Visit Us Today"
      description="Located in the heart of the city. Open daily for lunch and dinner."
      imageSrc="http://img.b2bpic.net/free-photo/antique-ceiling-lamp_1203-804.jpg"
      mediaAnimation="slide-up"
      tag="Find Us"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Nuru Legende"
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "All Items",
              href: "#products",
            },
            {
              label: "Wraps",
              href: "#products",
            },
            {
              label: "Platters",
              href: "#products",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
