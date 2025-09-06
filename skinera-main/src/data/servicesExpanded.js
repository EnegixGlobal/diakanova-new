// Expanded services mock data
// Service-specific images
import imgPigmentation from "../../Images/newServicesComponent/Pigmentation.jpg";
import imgSkinTightening from "../../Images/newServicesComponent/Skin-tightening.jpg";
import imgHairPRP from "../../Images/newServicesComponent/Hair-PRP.jpg";
import imgHairGFC from "../../Images/newServicesComponent/HAIR-GFC.webp";
import imgHairRegrowthLaser from "../../Images/newServicesComponent/Hair-regrowth-laser.jpg";
import imgKoreanSkin from "../../Images/newServicesComponent/KoreanSkinTreatment.jpg";
import imgBotox from "../../Images/newServicesComponent/BotoxTreatment.avif";
import imgAntiAging from "../../Images/newServicesComponent/Anti-aging-solutions.jpg";
import imgDeepPeelings from "../../Images/newServicesComponent/Deeppeelings.jpg";
import imgFacials from "../../Images/newServicesComponent/Facials.jpg";
import imgLaserHairRemoval from "../../Images/newServicesComponent/Laser-hair-removal.jpg";
import imgLaserSkinTherapy from "../../Images/newServicesComponent/Laser-skin-therapy.jpg";
import imgMesotherapy from "../../Images/newServicesComponent/Mesotherapy.jpg";
import imgMicrodermabrasion from "../../Images/newServicesComponent/Microdermabrasion.jpg";
export const servicesExpanded = [
  {
    id: "pigmentation-solutions",
    title: "Pigmentation Solutions",
    short:
      "Target uneven tone and dark spots with advanced corrective protocols.",
    overview: {
      title: "Personalized Pigmentation Correction",
      description:
        "Our pigmentation solutions combine dermaceutic actives, controlled exfoliation, and targeted device-based approaches to gradually even skin tone while safeguarding barrier health.\n\nProtocols are customised after in-depth assessment and may include brightening peels, melanin-inhibiting serums, low-energy laser toning, and supportive home care.",
    },
    image: imgPigmentation,
    included: [
      "Assessment & Wood lamp check",
      "Customized peel/laser plan",
      "Post-care guide",
    ],
    excluded: [
      "Unrelated dermatological prescriptions",
      "Systemic medications",
    ],
  },
  {
    id: "skin-tightening",
    title: "Skin Tightening",
    short: "Stimulate collagen for firmer, lifted facial contours.",
    overview: {
      title: "Non‑Surgical Skin Firming",
      description:
        "Energy-based modalities and bio‑stimulatory actives are layered strategically to support dermal density.",
    },
    image: imgSkinTightening,
    included: ["Consult & mapping", "Energy session", "After-care"],
    excluded: ["Invasive surgery"],
  },
  {
    id: "hair-prp",
    title: "Hair PRP",
    short: "Concentrated platelet growth factors to revive follicles.",
    overview: {
      title: "Autologous PRP Therapy",
      description: "Platelet concentrate supports regeneration signalling.",
    },
    image: imgHairPRP,
    included: ["PRP preparation", "Scalp application"],
    excluded: ["Hair transplant"],
  },
  {
    id: "hair-gfc",
    title: "HAIR GFC",
    short: "Growth Factor Concentrate for amplified follicle stimulation.",
    overview: {
      title: "High-Purity GFC Infusion",
      description: "Refined growth factors in a controlled protocol.",
    },
    image: imgHairGFC,
    included: ["GFC kit", "Sterile application"],
    excluded: ["PRP (separate)"],
  },
  {
    id: "hair-regrowth-laser",
    title: "Hair Regrowth Laser",
    short: "Low‑level laser therapy to energize dormant follicles.",
    overview: {
      title: "Photobiomodulation for Scalp Health",
      description: "LLLT improves cellular respiration and micro‑circulation.",
    },
    image: imgHairRegrowthLaser,
    included: ["Laser session", "Progress tracking"],
    excluded: ["Medication courses"],
  },
  {
    id: "korean-skin-treatment",
    title: "Korean Skin Treatment",
    short:
      "Hydration layering and barrier renewal inspired by Korean aesthetics.",
    overview: {
      title: "Layered Hydration & Glow",
      description:
        "A multi‑phase protocol focusing on gentle resurfacing and deep moisture infusion.",
    },
    image: imgKoreanSkin,
    included: ["Cleansing phases", "Essence infusion"],
    excluded: ["Injectables"],
  },
  {
    id: "botox-treatment",
    title: "Botox Treatment",
    short:
      "Precision neuromodulator application for expression line softening.",
    overview: {
      title: "Targeted Dynamic Line Relaxation",
      description: "Focused units for natural, refreshed appearance.",
    },
    image: imgBotox,
    included: ["Assessment", "Unit mapping"],
    excluded: ["Dermal fillers"],
  },
  {
    id: "anti-aging-solutions",
    title: "Anti-aging Solutions",
    short:
      "Holistic protocols addressing texture, tone, firmness, and radiance.",
    overview: {
      title: "Age-Resilience Strategy",
      description: "Stacked modalities tailored to individual aging patterns.",
    },
    image: imgAntiAging,
    included: ["Multi-modality plan"],
    excluded: ["Surgical lifting"],
  },
  {
    id: "deep-peelings",
    title: "Deep Peelings",
    short: "Advanced controlled exfoliation for stubborn irregularities.",
    overview: {
      title: "Precision Medium / Deep Peels",
      description:
        "Applied by trained clinician with strict downtime guidance.",
    },
    image: imgDeepPeelings,
    included: ["Peel application", "After-care kit"],
    excluded: ["Unrelated meds"],
  },
  {
    id: "facials",
    title: "Facials",
    short: "Therapeutic facials combining actives & lymphatic flow support.",
    overview: {
      title: "Custom Corrective Facials",
      description:
        "Each session adapts exfoliation, hydration, sculpting, and barrier repair.",
    },
    image: imgFacials,
    included: ["Custom protocol"],
    excluded: ["Prescription meds"],
  },
  {
    id: "laser-hair-removal",
    title: "Laser Hair Removal",
    short: "Progressive hair reduction with selective photothermolysis.",
    overview: {
      title: "Selective Follicular Photothermolysis",
      description: "Energy parameters aligned to skin type and hair calibre.",
    },
    image: imgLaserHairRemoval,
    included: ["Patch test", "Session plan"],
    excluded: ["Electrolysis"],
  },
  {
    id: "laser-skin-therapy",
    title: "Laser Skin Therapy",
    short: "Tone, texture, and clarity improvements via calibrated light.",
    overview: {
      title: "Fractional & Toning Approaches",
      description: "Combines low‑fluence and fractional passes.",
    },
    image: imgLaserSkinTherapy,
    included: ["Laser passes"],
    excluded: ["Peels (separate)"],
  },
  {
    id: "mesotherapy",
    title: "Mesotherapy",
    short: "Micro‑dosed actives improving dermal nutrition & glow.",
    overview: {
      title: "Multi‑Micro Infusion",
      description: "Fine delivery of vitamins, peptides, and boosters.",
    },
    image: imgMesotherapy,
    included: ["Sterile actives"],
    excluded: ["PRP kit"],
  },
  {
    id: "microdermabrasion",
    title: "Microdermabrasion",
    short: "Mechanical resurfacing to refine texture and luminosity.",
    overview: {
      title: "Crystal / Diamond Precision Resurfacing",
      description: "Gentle epidermal renewal stimulating turnover.",
    },
    image: imgMicrodermabrasion,
    included: ["Exfoliation pass"],
    excluded: ["Chemical peel"],
  },
];

export function getExpandedService(id) {
  return servicesExpanded.find((s) => s.id === id);
}
