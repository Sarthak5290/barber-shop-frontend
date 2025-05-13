import ServiceDetail from "@/components/ServiceDetail";
import Image4 from "@/assets/images/05_img.jpg";

export default function BeardTrimPage() {
  const beardTrim = {
    title: "BEARD TRIM",
    image: Image4,
    description: 
      "Our expert Beard Trim service is designed to shape and maintain your facial hair for a well-groomed, distinguished look. Whether you're sporting a full beard, goatee, or stubble, our skilled barbers will define your facial features while ensuring your beard looks its absolute best. This service includes precise trimming, shaping, and finishing with premium beard care products.",
    duration: "30 minutes",
    price: "$25",
    benefits: [
      "Professional shaping to enhance your facial structure and features",
      "Precise trimming to maintain ideal beard length and fullness",
      "Clean line definition along cheeks and neckline",
      "Hot towel treatment to soften facial hair for easier styling",
      "Professional advice on beard growth and maintenance",
      "Application of premium beard oils and balms for conditioning"
    ],
    process: [
      {
        title: "Consultation",
        description: "Your barber will discuss your beard goals, face shape, and lifestyle to determine the ideal shape and style for your facial hair."
      },
      {
        title: "Preparation",
        description: "A hot towel treatment will be applied to soften your beard hair, making it more manageable for precise trimming."
      },
      {
        title: "Trimming & Shaping",
        description: "Using professional tools, your barber will trim your beard to the desired length and create clean, defined lines."
      },
      {
        title: "Detailing",
        description: "Special attention will be given to the mustache, sideburns, and neckline to create a polished, cohesive look."
      },
      {
        title: "Finishing",
        description: "Your beard will be finished with conditioning oil or balm to soften the hair, tame flyaways, and promote healthy growth."
      }
    ],
    recommendations: "For optimal beard maintenance, we recommend scheduling a professional beard trim every 2-3 weeks. Daily use of quality beard oil and regular combing will help maintain shape and condition between appointments. Consider pairing this service with a haircut every other visit for a completely cohesive look."
  };

  return <ServiceDetail {...beardTrim} />;
}