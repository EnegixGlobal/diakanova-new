// Expanded services mock data
// Service-specific images
// Removed legacy service images now replaced by curated set
// New curated images (Service-Images-new)
import newAntiAging from "../../Images/Service-Images-new/Anti-aging.jpg";
import newDeepPeelings from "../../Images/Service-Images-new/Deep Peelings.jpg";
import newFacials from "../../Images/Service-Images-new/facials.jpg";
import newHairPrp from "../../Images/Service-Images-new/hair prp.jpg";
import newHairRegrowthLaser from "../../Images/Service-Images-new/hair regrowth laser.jpg";
import newKoreanSkin from "../../Images/Service-Images-new/Korean Skin Treatment.jpg";
import newPigmentation from "../../Images/Service-Images-new/pigmentation.jpg";
import newPsoriasis from "../../Images/Service-Images-new/psoriasis.jpg";
import newSkinTightening from "../../Images/Service-Images-new/skin tightening.jpg";
import newTineaInfection from "../../Images/Service-Images-new/tinea infection.jpg"; // placeholder for fungal / tinea related
import imgSkinAllergy from "../../Images/hemopathic-img/skin-allergy.jpg";
import imgPsoriasis from "../../Images/hemopathic-img/psoriasis.jpg";
import imgEczema from "../../Images/hemopathic-img/eczema.jpg";
import imgUrticaria from "../../Images/hemopathic-img/urticaria.jpg";
import imgFungal from "../../Images/hemopathic-img/fungal.jpg";
import imgScabies from "../../Images/hemopathic-img/scabies.jpg";
import imgVitiligo from "../../Images/hemopathic-img/vitiligo-white-spot.jpg";
import imgAlopecia from "../../Images/hemopathic-img/alopecia-areata.jpg";
// Additional imports for new services
// Legacy placeholder imports removed (korean facial, vampire facial, srf, hydrafacial)
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
  image: newPigmentation,
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
  image: newSkinTightening,
    included: ["Consult & mapping", "Energy session", "After-care"],
    excluded: ["Invasive surgery"],
  },
  {
    id: "hair-prp",
    title: "Hair PRP/GFC",
    short: "Concentrated platelet growth factors to revive follicles.",
    overview: {
      title: "Autologous PRP Therapy",
      description: "Platelet concentrate supports regeneration signalling.",
    },
  image: newHairPrp,
    included: ["PRP preparation", "Scalp application"],
    excluded: ["Hair transplant"],
  },
  // {
  //   id: "hair-gfc",
  //   title: "HAIR GFC",
  //   short: "Growth Factor Concentrate for amplified follicle stimulation.",
  //   overview: {
  //     title: "High-Purity GFC Infusion",
  //     description: "Refined growth factors in a controlled protocol.",
  //   },
  //   image: imgHairGFC,
  //   included: ["GFC kit", "Sterile application"],
  //   excluded: ["PRP (separate)"],
  // },
  {
    id: "hair-regrowth-laser",
    title: "Hair Regrowth Laser",
    short: "Low‑level laser therapy to energize dormant follicles.",
    overview: {
      title: "Photobiomodulation for Scalp Health",
      description: "LLLT improves cellular respiration and micro‑circulation.",
    },
  image: newHairRegrowthLaser,
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
  image: newKoreanSkin,
    included: ["Cleansing phases", "Essence infusion"],
    excluded: ["Injectables"],
  },
  // {
  //   id: "botox-treatment",
  //   title: "Botox Treatment",
  //   short:
  //     "Precision neuromodulator application for expression line softening.",
  //   overview: {
  //     title: "Targeted Dynamic Line Relaxation",
  //     description: "Focused units for natural, refreshed appearance.",
  //   },
  //   image: imgBotox,
  //   included: ["Assessment", "Unit mapping"],
  //   excluded: ["Dermal fillers"],
  // },
  {
    id: "anti-aging-solutions",
    title: "Anti-aging Solutions",
    short:
      "Holistic protocols addressing texture, tone, firmness, and radiance.",
    overview: {
      title: "Age-Resilience Strategy",
      description: "Stacked modalities tailored to individual aging patterns.",
    },
  image: newAntiAging,
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
  image: newDeepPeelings,
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
  image: newFacials,
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
  image: newSkinTightening, // placeholder (no dedicated laser hair removal image in new set)
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
    image: newAntiAging, // placeholder: legacy imgLaserSkinTherapy import removed with curated set
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
  image: newFacials, // placeholder (no mesotherapy specific image provided)
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
  image: newFacials, // placeholder (no microdermabrasion specific image provided)
    included: ["Exfoliation pass"],
    excluded: ["Chemical peel"],
  },
  {
    id: "skin-allergy",
    title: "Skin Allergy Treatment",
    short: "Comprehensive care for allergic skin reactions and sensitivities.",
    overview: {
      title: "Allergic Skin Reaction Management",
      description: "Diagnosis and treatment of various skin allergies including contact dermatitis, atopic dermatitis, and other allergic manifestations.",
    },
    image: imgSkinAllergy,
    included: ["Allergy assessment", "Topical treatments", "Lifestyle guidance"],
    excluded: ["Systemic medications"],
  },
  {
    id: "psoriasis",
    title: "Psoriasis Treatment",
    short: "Advanced therapies for psoriasis management and symptom relief.",
    overview: {
      title: "Psoriasis Care Protocol",
      description: "Comprehensive treatment approaches for psoriasis including topical therapies, light therapy, and supportive care for symptom management.",
    },
  image: newPsoriasis,
    included: ["Skin assessment", "Treatment planning", "Follow-up care"],
    excluded: ["Systemic immunosuppressants"],
  },
  {
    id: "eczema",
    title: "Eczema Treatment",
    short: "Gentle care for eczema-prone skin to reduce inflammation and itching.",
    overview: {
      title: "Eczema Management",
      description: "Specialized protocols for eczema treatment focusing on barrier repair, anti-inflammatory therapies, and moisturization strategies.",
    },
  image: newFacials, // placeholder (eczema specific image not in new set)
    included: ["Skin evaluation", "Barrier repair treatments", "Moisturizing regimen"],
    excluded: ["Steroid prescriptions"],
  },
  {
    id: "scales",
    title: "Scales Treatment",
    short: "Treatment for scaly skin conditions and exfoliation disorders.",
    overview: {
      title: "Scaly Skin Condition Care",
      description: "Targeted treatments for various scaling skin conditions including ichthyosis, xerosis, and other exfoliative disorders.",
    },
  image: newDeepPeelings, // placeholder: no dedicated 'scales' image in curated set (pending asset; legacy variable removed)
    included: ["Scalp/skin assessment", "Exfoliation therapy", "Hydration protocols"],
    excluded: ["Internal medications"],
  },
  {
    id: "urticaria",
    title: "Urticaria Treatment",
    short: "Management of hives and urticaria with anti-inflammatory approaches.",
    overview: {
      title: "Hives and Urticaria Care",
      description: "Comprehensive treatment for acute and chronic urticaria focusing on trigger identification and symptomatic relief.",
    },
  image: newFacials, // placeholder (urticaria image missing in new set)
    included: ["Trigger assessment", "Anti-inflammatory treatments", "Preventive measures"],
    excluded: ["Emergency epinephrine"],
  },
  {
    id: "fungal",
    title: "Fungal Infection Treatment",
    short: "Effective treatment for various fungal skin infections.",
    overview: {
      title: "Antifungal Therapy",
      description: "Targeted treatment protocols for fungal infections including ringworm, athlete's foot, and other mycotic skin conditions.",
    },
  image: newTineaInfection,
    included: ["Fungal culture/diagnosis", "Antifungal treatments", "Prevention guidance"],
    excluded: ["Oral antifungals"],
  },
  {
    id: "scabies",
    title: "Scabies Treatment",
    short: "Comprehensive treatment for scabies infestation and prevention.",
    overview: {
      title: "Scabies Eradication Protocol",
      description: "Complete treatment approach for scabies including topical therapies, environmental decontamination, and family treatment.",
    },
  image: newTineaInfection, // placeholder (scabies image missing)
    included: ["Diagnosis confirmation", "Topical treatment", "Environmental cleaning"],
    excluded: ["Oral medications"],
  },
  {
    id: "vitiligo-white-spot",
    title: "Vitiligo White Spot Treatment",
    short: "Repigmentation therapies for vitiligo and leukoderma.",
    overview: {
      title: "Vitiligo Management",
      description: "Advanced treatment options for vitiligo including phototherapy, topical treatments, and repigmentation strategies.",
    },
  image: newPigmentation, // placeholder (vitiligo not supplied; using pigmentation image)
    included: ["Skin evaluation", "Phototherapy sessions", "Topical treatments"],
    excluded: ["Surgical interventions"],
  },
  {
    id: "alopecia-areata",
    title: "Alopecia Areata Treatment",
    short: "Treatment for autoimmune hair loss conditions.",
    overview: {
      title: "Autoimmune Hair Loss Care",
      description: "Comprehensive approach to alopecia areata treatment including topical therapies, injections, and supportive care.",
    },
  image: newHairRegrowthLaser, // placeholder (alopecia specific not supplied)
    included: ["Scalp assessment", "Treatment planning", "Progress monitoring"],
    excluded: ["Systemic immunosuppressants"],
  },
  {
    id: "korean-facial",
    title: "Korean Facial",
    short: "Rejuvenating facial treatment inspired by Korean skincare routines.",
    overview: {
      title: "Korean Skincare Facial",
      description: "A multi-step facial treatment incorporating hydrating masks, exfoliation, and nourishing serums for glowing skin.",
    },
  image: newKoreanSkin,
    included: ["Deep cleansing", "Exfoliation", "Hydrating mask", "Serum application"],
    excluded: ["Chemical peels"],
  },
  {
    id: "vampire-facial",
    title: "Vampire Facial",
    short: "Platelet-rich plasma facial for skin rejuvenation.",
    overview: {
      title: "PRP Facial Therapy",
      description: "Utilizing your own platelet-rich plasma to stimulate collagen production and improve skin texture and tone.",
    },
  image: newAntiAging, // placeholder (vampire facial not supplied)
    included: ["Blood draw", "PRP preparation", "Facial application", "Post-care instructions"],
    excluded: ["Fillers or Botox"],
  },
  {
    id: "srf",
    title: "SRF Treatment",
    short: "Skin Rejuvenation Facial for anti-aging benefits.",
    overview: {
      title: "Advanced Skin Rejuvenation",
      description: "Non-invasive treatment combining microdermabrasion, chemical exfoliation, and LED therapy for youthful skin.",
    },
  image: newAntiAging, // placeholder (SRF not supplied)
    included: ["Microdermabrasion", "Chemical exfoliation", "LED therapy", "Moisturizing treatment"],
    excluded: ["Laser treatments"],
  },
  {
    id: "hydrafacial",
    title: "Hydrafacial",
    short: "Hydrating facial treatment for deep cleansing and nourishment.",
    overview: {
      title: "HydraFacial Therapy",
      description: "A multi-step facial that cleanses, exfoliates, and hydrates the skin using a patented vortex technology for a refreshed complexion.",
    },
  image: newFacials, // placeholder (hydrafacial not supplied separately)
    included: ["Deep cleansing", "Exfoliation", "Hydration infusion", "Antioxidant protection"],
    excluded: ["Chemical peels"],
  },
  {
    id: "microdermabrasion",
    title: "Microdermabrasion",
    short: "Gentle exfoliation to improve skin texture and tone.",
    overview: {
      title: "Microdermabrasion Treatment",
      description: "Non-invasive procedure that uses fine crystals to exfoliate the skin, reducing fine lines, acne scars, and improving overall skin texture.",
    },
  image: newFacials,
    included: ["Skin assessment", "Exfoliation treatment", "Moisturizing mask", "Sun protection advice"],
    excluded: ["Deep chemical peels"],
  },
  {
    id: "hair-gfc-therapy",
    title: "Hair GFC Therapy",
    short: "Growth Factor Concentrate therapy for hair restoration.",
    overview: {
      title: "Hair GFC Treatment",
      description: "Advanced therapy using growth factor concentrates to stimulate hair follicles, promote hair growth, and improve scalp health.",
    },
  image: newHairPrp, // placeholder (hair GFC therapy shares hair PRP visual)
    included: ["Scalp analysis", "GFC application", "Post-treatment care", "Progress monitoring"],
    excluded: ["Surgical hair transplants"],
  },
  {
    id: "regrowth",
    title: "Hair Regrowth",
    short: "Comprehensive solutions for hair regrowth and restoration.",
    overview: {
      title: "Hair Regrowth Treatments",
      description: "A range of therapies including PRP, laser treatments, and topical solutions to promote natural hair regrowth and prevent further loss.",
    },
  image: newHairRegrowthLaser,
    included: ["Scalp consultation", "Regrowth treatment plan", "Follow-up sessions", "Home care advice"],
    excluded: ["Hair transplant surgery"],
  },
  {
    id: "micro-needling-prp",
    title: "Micro Needling with PRP",
    short: "Collagen induction therapy combined with platelet-rich plasma.",
    overview: {
      title: "Micro Needling PRP Treatment",
      description: "Microneedling creates micro-injuries to stimulate collagen, enhanced with PRP for faster healing and better results in acne scar reduction.",
    },
  image: newFacials, // placeholder for micro needling with prp (no direct image)
    included: ["Skin assessment", "Microneedling session", "PRP application", "Post-care instructions"],
    excluded: ["Laser treatments"],
  },
  {
    id: "mnrf",
    title: "MNRF Treatment",
    short: "Microneedling Radiofrequency for skin tightening and scar reduction.",
    overview: {
      title: "Microneedling RF Therapy",
      description: "Combines microneedling with radiofrequency energy to deliver heat to deeper skin layers, promoting collagen production and improving acne scars.",
    },
  image: newAntiAging, // placeholder for MNRF
    included: ["Consultation", "RF microneedling session", "Cooling and soothing", "Recovery guidance"],
    excluded: ["Surgical procedures"],
  },
  {
    id: "chemical-peel",
    title: "Chemical Peel",
    short: "Exfoliating treatment to improve skin texture and reduce acne scars.",
    overview: {
      title: "Chemical Peel for Acne Scars",
      description: "Application of chemical solutions to remove damaged skin layers, revealing smoother, healthier skin underneath and reducing scar appearance.",
    },
  image: newDeepPeelings,
    included: ["Skin type assessment", "Peel application", "Neutralization", "Aftercare products"],
    excluded: ["Deep laser resurfacing"],
  },
  {
    id: "laser-hair-removal",
    title: "Laser Hair Removal",
    short: "Permanent hair reduction using advanced laser technology.",
    overview: {
      title: "Laser Hair Removal Treatment",
      description: "Safe and effective laser technology targets hair follicles to reduce unwanted hair growth, providing long-lasting smooth skin.",
    },
  image: newSkinTightening,
    included: ["Consultation", "Laser sessions", "Skin cooling", "Post-treatment care"],
    excluded: ["Waxing or shaving immediately before"],
  },
];

export function getExpandedService(id) {
  return servicesExpanded.find((s) => s.id === id);
}

/*
Placeholder Image Mapping Notes:
The curated folder `Images/Service-Images-new` currently includes:
  - Anti-aging.jpg
  - Deep Peelings.jpg
  - facials.jpg
  - hair prp.jpg
  - hair regrowth laser.jpg
  - Korean Skin Treatment.jpg
  - pigmentation.jpg
  - psoriasis.jpg
  - skin tightening.jpg
  - tinea infection.jpg

Applied Mapping:
  pigmentation-solutions -> pigmentation.jpg
  skin-tightening -> skin tightening.jpg
  hair-prp / hair-gfc-therapy -> hair prp.jpg (shared visual)
  hair-regrowth-laser / regrowth -> hair regrowth laser.jpg
  korean-skin-treatment / korean-facial -> Korean Skin Treatment.jpg
  anti-aging-solutions / vampire-facial / srf -> Anti-aging.jpg (shared anti-aging category)
  deep-peelings / chemical-peel -> Deep Peelings.jpg
  facials / hydrafacial / microdermabrasion / mesotherapy / micro-needling-prp / mnrf -> facials.jpg (general facial placeholder; replace with specific assets when available)
  laser-hair-removal -> skin tightening.jpg (temporary until dedicated laser hair removal image is added to new set)
  laser-skin-therapy -> Anti-aging.jpg (temporary aesthetic match)
  psoriasis -> psoriasis.jpg
  fungal / scabies / tinea-related -> tinea infection.jpg
  eczema / urticaria / vitiligo-white-spot -> pigmentation.jpg or facials.jpg proxies (see code for exact choices)
  alopecia-areata -> hair regrowth laser.jpg

Next Steps (if assets provided later):
  - Add distinct images for hydrafacial, microdermabrasion, mesotherapy, vampire-facial, srf, laser-hair-removal, eczema, urticaria, vitiligo, alopecia, scabies, fungal.
  - Replace placeholder assignments in this file and update any related marketing copy if imagery changes category emphasis.
*/
