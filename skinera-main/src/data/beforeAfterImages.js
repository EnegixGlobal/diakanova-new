// Mapping for Before & After images located in Images/underService
// Import each so Vite bundles them and we can reference reliably.
// Filenames observed: antiaging.jpg, botox.jpg, facial.jpg, hair GFC.jpg, hair rgrowth lazer.jpg,
// korean.jpg, pelling-deep.jpg, pigmentaion.jpg, skin-titining.jpg
// We map these to service IDs used in routes.

import antiAging from "../../Images/underService/antiaging.jpg";
import botox from "../../Images/underService/botox.jpg";
import facial from "../../Images/underService/facial.jpg";
import hairGfc from "../../Images/underService/hair GFC.jpg";
import hairRegrowthLaser from "../../Images/underService/hair rgrowth lazer.jpg";
import korean from "../../Images/underService/korean.jpg";
import deepPeel from "../../Images/underService/pelling-deep.jpg";
import pigmentation from "../../Images/underService/pigmentaion.jpg";
import skinTightening from "../../Images/underService/skin-titining.jpg";

// Re-use closest images as placeholders for services without dedicated before/after assets yet
const laserHairRemoval = skinTightening; // placeholder
const laserSkinTherapy = pigmentation; // placeholder
const mesotherapy = facial; // placeholder
const microdermabrasion = deepPeel; // placeholder

// Service ID to image mapping (keys correspond to service IDs used in menu/routes)
export const beforeAfterImages = {
  // Primary anti-aging slug (older) and expanded service slug
  "anti-aging": antiAging,
  "anti-aging-solutions": antiAging,
  "botox-treatment": botox,
  facials: facial,
  "hair-prp": hairGfc, // hair PRP/GFC therapy
  "hair-gfc-therapy": hairGfc,
  regrowth: hairRegrowthLaser,
  "hair-regrowth-laser": hairRegrowthLaser,
  "korean-facial": korean,
  "korean-skin-treatment": korean,
  "deep-peelings": deepPeel,
  "chemical-peel": deepPeel,
  "pigmentation-solutions": pigmentation,
  "pigmentation-treatments": pigmentation,
  "skin-tightening": skinTightening,
  "stretch-marks": skinTightening,
  "laser-hair-removal": laserHairRemoval,
  "laser-skin-therapy": laserSkinTherapy,
  mesotherapy: mesotherapy,
  microdermabrasion: microdermabrasion,
  // Additional acne / rejuvenation service aliases
  "micro-needling-prp": facial,
  mnrf: facial,
  hydrafacial: facial,
  srf: facial,
  "vampire-facial": facial,
};

export function getBeforeAfterImage(id) {
  if (!id) return undefined;
  if (beforeAfterImages[id]) return beforeAfterImages[id];
  // Fallback heuristic: try stripping common suffixes / plurals
  const variants = [];
  if (id.endsWith("-solutions")) variants.push(id.replace(/-solutions$/, ""));
  if (id.endsWith("-treatment")) variants.push(id.replace(/-treatment$/, ""));
  if (id.endsWith("-treatments")) variants.push(id.replace(/-treatments$/, ""));
  if (id.endsWith("-therapy")) variants.push(id.replace(/-therapy$/, ""));
  // singular/plural basic
  if (id.endsWith("s")) variants.push(id.slice(0, -1));
  for (const v of variants) {
    if (beforeAfterImages[v]) return beforeAfterImages[v];
  }
  return undefined;
}
