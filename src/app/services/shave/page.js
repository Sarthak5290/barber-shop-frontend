import ServiceDetail from "@/components/ServiceDetail";
import Image2 from "@/assets/images/03_img.jpg";

export default function ShavePage() {
  const shave = {
    title: "SHAVE",
    image: Image2,
    description: 
      "Experience the time-honored tradition of a professional hot towel shave. Our luxurious shaving service combines premium products with skilled technique to deliver the closest, most comfortable shave possible. This indulgent treatment leaves your skin feeling remarkably smooth while providing a moment of relaxation and rejuvenation.",
    duration: "30 minutes",
    price: "$25",
    benefits: [
      "Hot towel treatment to soften facial hair and open pores for a closer shave",
      "Pre-shave oil application to protect and condition the skin",
      "Premium shaving cream lathered with a traditional brush",
      "Straight razor technique for the closest possible shave",
      "Cold towel finish to close pores and soothe skin",
      "Post-shave balm application to hydrate and protect freshly shaved skin"
    ],
    process: [
      {
        title: "Preparation",
        description: "Your face will be prepared with a series of hot towels to soften the beard, open pores, and relax facial muscles."
      },
      {
        title: "Pre-Shave Treatment",
        description: "A thin layer of pre-shave oil will be applied to protect your skin and soften beard hairs for easier cutting."
      },
      {
        title: "Lather Application",
        description: "Premium shaving cream will be worked into a rich lather using a traditional brush and applied to your face."
      },
      {
        title: "The Shave",
        description: "Using a traditional straight razor, your barber will perform a precise shave with proper technique to ensure comfort and closeness."
      },
      {
        title: "Finish & Hydrate",
        description: "A cool towel will be applied to close pores, followed by a soothing post-shave balm to hydrate and protect your skin."
      }
    ],
    recommendations: "For those new to straight razor shaves, we recommend allowing 24 hours before any significant events to allow for any potential skin sensitivity to subside. For maintenance, we suggest scheduling a professional shave once every 1-2 weeks."
  };

  return <ServiceDetail {...shave} />;
}