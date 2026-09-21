import { AnatomyHotspot, ShoeSizeStock, GalleryItem } from '../types';

export const SHOE_DATA = {
  name: "Air Jordan 1 Retro High OG",
  nickname: "Love Letter",
  styleCode: "DZ5485-201",
  colorway: "Shadow Brown / Soft Pearl / Light British Tan / Team Red / Sail",
  pricePHP: 9895,
  priceUSD: 185,
  releaseYear: 1985,
  releaseDate: "August 1, 2026",
  headline: "BORN ON COURT. MADE TO BE REMEMBERED.",
  subheadline: "A pure expression of basketball heritage, leather engineering, and Michael Jordan's enduring passion. The Air Jordan 1 Retro High OG 'Love Letter' redefines what it means to elevate timeless greatness.",
  shortDescription: "Crafted in rich Shadow Brown nubuck with Soft Pearl tumbled leather and aged Sail cupsole, paying homage to Michael Jordan's heartfelt farewell letter to the game: 'Much Love and Respect.'",
  
  // Specifications matching the 5-metric bar in Image 2
  metrics: [
    { value: "1985", label: "ORIGINAL DEBUT", sub: "COURT ICON" },
    { value: "AIR-SOLE", label: "ENCAPSULATED", sub: "HEEL CUSHION" },
    { value: "DZ5485-201", label: "STYLE CODE", sub: "VERIFIED AUTHENTIC" },
    { value: "NUBUCK & SUEDE", label: "PREMIUM LEATHER", sub: "PATINA READY" },
    { value: "TEAM RED", label: "OUTSOLE TRACTION", sub: "CLASSIC PIVOT" },
  ],

  // Exploded anatomy directly from Image 1
  explodedParts: [
    {
      id: "padding-collar",
      name: "PADDING & COLLAR",
      summary: "Provides ankle support and comfort.",
      details: "Anatomically sculpted collar lined with soft-touch micro-textile for zero heel slippage, enhanced by blind-embossed interior details.",
      position: { x: 75, y: 12 },
      color: "Deep Obsidian Black"
    },
    {
      id: "ankle-overlay",
      name: "ANKLE OVERLAY",
      summary: "Premium nubuck leather with Air Jordan wings logo.",
      details: "Cut from full-grain Light British Tan nubuck, precision debossed with the historic 1985 Wings insignia and Michael Jordan's 'Much Love and Respect' tribute on the interior flap.",
      position: { x: 78, y: 24 },
      color: "Light British Tan Nubuck"
    },
    {
      id: "upper",
      name: "UPPER",
      summary: "Combination of premium leather and suede for durability and style.",
      details: "Tumbled Soft Pearl leather side panels meet rich Shadow Brown suede overlays, meticulously stitched with tonal nylon thread that matures with character over time.",
      position: { x: 74, y: 36 },
      color: "Shadow Brown Suede & Soft Pearl"
    },
    {
      id: "swoosh",
      name: "SWOOSH",
      summary: "Iconic Nike Swoosh in premium leather.",
      details: "A timeless archetype rendered in supple black full-grain leather, cleanly topstitched along the lateral and medial quarter panels.",
      position: { x: 72, y: 48 },
      color: "Obsidian Black Leather"
    },
    {
      id: "toe-box",
      name: "TOE BOX",
      summary: "Perforated leather for breathability.",
      details: "Heritage 22-hole micro-perforated toe box in Soft Pearl cowhide framed by velvety Shadow Brown suede mudguard, engineered for temperature management.",
      position: { x: 22, y: 38 },
      color: "Soft Pearl Perforated Leather"
    },
    {
      id: "insole",
      name: "INSOLE",
      summary: "Cushioned insole for all-day comfort.",
      details: "Molded EVA open-cell foam footbed wrapped in sweat-wicking textile with contrasting white Jumpman print on the heel landing area.",
      position: { x: 26, y: 55 },
      color: "Black EVA Foam with White Jumpman"
    },
    {
      id: "strobel-board",
      name: "STROBEL BOARD",
      summary: "Adds structure and stability to the shoe.",
      details: "High-tensile non-woven cellulose strobel stitched around the bottom perimeter, bridging the upper to the cupsole with structural rigidity.",
      position: { x: 76, y: 64 },
      color: "Natural White Bonded Fiber"
    },
    {
      id: "midsole",
      name: "MIDSOLE",
      summary: "Provides cushioning and shock absorption.",
      details: "Vintage-tinted Sail textured rubber cupsole housing an encapsulated nitrogen-pressurized Nike Air-Sole unit embedded directly under the calcaneus heel.",
      position: { x: 24, y: 73 },
      color: "Vintage Sail Rubber (Air Encapsulated)"
    },
    {
      id: "outsole",
      name: "OUTSOLE",
      summary: "Durable rubber with classic traction pattern for grip and stability.",
      details: "Solid Team Red carbon rubber outsole molded with Peter Moore's 1985 multi-directional herringbone pivot circle pattern and deep flex grooves.",
      position: { x: 78, y: 84 },
      color: "Team Red High-Traction Rubber"
    },
  ] as (AnatomyHotspot & { name: string; summary: string; details: string; color: string })[],

  // Shoe Sizes for Nike PH stock
  sizes: [
    { usSize: "US 7.0", ukSize: "UK 6.0", euSize: "EU 40.0", cm: "25.0 cm", available: true, stockCount: 3 },
    { usSize: "US 7.5", ukSize: "UK 6.5", euSize: "EU 40.5", cm: "25.5 cm", available: true, stockCount: 2 },
    { usSize: "US 8.0", ukSize: "UK 7.0", euSize: "EU 41.0", cm: "26.0 cm", available: true, stockCount: 5 },
    { usSize: "US 8.5", ukSize: "UK 7.5", euSize: "EU 42.0", cm: "26.5 cm", available: true, stockCount: 4 },
    { usSize: "US 9.0", ukSize: "UK 8.0", euSize: "EU 42.5", cm: "27.0 cm", available: true, stockCount: 8 },
    { usSize: "US 9.5", ukSize: "UK 8.5", euSize: "EU 43.0", cm: "27.5 cm", available: true, stockCount: 6 },
    { usSize: "US 10.0", ukSize: "UK 9.0", euSize: "EU 44.0", cm: "28.0 cm", available: true, stockCount: 7 },
    { usSize: "US 10.5", ukSize: "UK 9.5", euSize: "EU 44.5", cm: "28.5 cm", available: true, stockCount: 3 },
    { usSize: "US 11.0", ukSize: "UK 10.0", euSize: "EU 45.0", cm: "29.0 cm", available: true, stockCount: 4 },
    { usSize: "US 11.5", ukSize: "UK 10.5", euSize: "EU 45.5", cm: "29.5 cm", available: true, stockCount: 1 },
    { usSize: "US 12.0", ukSize: "UK 11.0", euSize: "EU 46.0", cm: "30.0 cm", available: true, stockCount: 2 },
    { usSize: "US 13.0", ukSize: "UK 12.0", euSize: "EU 47.5", cm: "31.0 cm", available: false, stockCount: 0 },
  ] as ShoeSizeStock[],

  gallery: [
    {
      id: "court-heritage",
      title: "THE SUNSET ASPHALT",
      subtitle: "Heritage Meets Horizon",
      tag: "THE ATMOSPHERE",
      image: "./images/side-profile.jpg",
    },
    {
      id: "collector-vault",
      title: "THE COLLECTOR VAULT",
      subtitle: "Curated Luggage & Collector Box",
      tag: "THE ARTIFACT",
      image: "./images/lifestyle-box.jpg",
    },
    {
      id: "craft-macro",
      title: "PATINA OBSESSION",
      subtitle: "Shadow Brown Nubuck Mastery",
      tag: "THE DETAIL",
      image: "./images/craft-detail.jpg",
    }
  ] as GalleryItem[],
};
