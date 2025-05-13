import ServiceDetail from "@/components/ServiceDetail";
import Image1 from "@/assets/images/02_img.jpg";

export default function HaircutPage() {
  const haircut = {
    title: "HAIRCUT",
    image: Image1,
    description:
      "Our expert haircut service is designed to give you a fresh, stylish look tailored to your preferences and face shape. Our skilled barbers combine traditional techniques with modern styles to create the perfect cut for you. Whether you're looking for a classic or contemporary style, our barbers will work with you to achieve the look you desire.",
    duration: "45 minutes",
    price: "$35",
    benefits: [
      "Precision cutting techniques for a clean, professional finish",
      "Personalized consultation to determine the best style for your face shape and hair type",
      "Hot towel treatment to open pores and soften hair before cutting",
      "Neck and sideburn detailing for a crisp, defined look",
      "Styling tips and product recommendations for maintaining your look at home",
    ],
    process: [
      {
        title: "Consultation",
        description:
          "Your barber will discuss your style preferences, lifestyle, and maintenance expectations to create a personalized cut that works for you.",
      },
      {
        title: "Wash & Prepare",
        description:
          "Your hair will be washed with premium products selected for your hair type, followed by a hot towel treatment to prepare your hair for cutting.",
      },
      {
        title: "Precision Cutting",
        description:
          "Using professional techniques and tools, your barber will craft your haircut with meticulous attention to detail and symmetry.",
      },
      {
        title: "Styling & Finishing",
        description:
          "Your cut will be finished with styling products and techniques to showcase the final look and teach you how to maintain it at home.",
      },
    ],
    recommendations:
      "For best results, we recommend scheduling a haircut every 3-4 weeks to maintain your style. Regular maintenance ensures your cut stays sharp and professional-looking between visits.",
  };

  return <ServiceDetail {...haircut} />;
}
