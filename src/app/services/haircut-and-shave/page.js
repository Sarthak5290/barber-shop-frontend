import ServiceDetail from "@/components/ServiceDetail";
import Image3 from "@/assets/images/04_img.jpg";

export default function HaircutAndShavePage() {
  const haircutAndShave = {
    title: "HAIRCUT & SHAVE",
    image: Image3,
    description: 
      "Our signature Haircut & Shave combination provides the complete gentleman's grooming experience. This premium service includes both a precision haircut and a traditional hot towel straight razor shave, delivering comprehensive care for a polished and refined appearance. Perfect for special occasions or as a regular grooming ritual for the discerning gentleman.",
    duration: "75 minutes",
    price: "$55",
    benefits: [
      "Complete grooming package addressing both hair and facial hair needs in one session",
      "Significant time savings compared to booking separate appointments",
      "Consistent styling approach for a cohesive overall appearance",
      "Our most luxurious experience with extended relaxation time",
      "Complimentary scalp massage included for additional stress relief",
      "Package pricing offers better value than individual services"
    ],
    process: [
      {
        title: "Initial Consultation",
        description: "Your barber will discuss your preferences for both haircut style and shaving needs to create a cohesive look."
      },
      {
        title: "Haircut Service",
        description: "Receive our premium haircut service including wash, cut, and style to create your desired look."
      },
      {
        title: "Relaxation Break",
        description: "Enjoy a brief pause with a complimentary beverage while we prepare for your shaving service."
      },
      {
        title: "Hot Towel Preparation",
        description: "A series of hot towels will be applied to prepare your skin and facial hair for the closest possible shave."
      },
      {
        title: "Traditional Shave",
        description: "Experience our signature straight razor shave with premium products for exceptional comfort and results."
      },
      {
        title: "Final Touches",
        description: "Your service concludes with final styling adjustments and aftercare product application for both hair and skin."
      }
    ],
    recommendations: "For special events such as weddings or important meetings, we recommend scheduling this service 2-3 days before the event for the most polished appearance. This comprehensive service is perfect for quarterly grooming maintenance or as a monthly luxury ritual."
  };

  return <ServiceDetail {...haircutAndShave} />;
}