import { ProductSpecification } from '../types';

export const productsData: ProductSpecification[] = [
  // COFFEE SECTION
  {
    id: 'yirgacheffe-washed-grade1',
    category: 'Coffee',
    name: 'Yirgacheffe Washed Grade 1 & 2',
    botanicalName: 'Coffea arabica var. heirloom',
    gradeTier: 'Specialty Q1 / Q2 Micro-Lots & Full Containers',
    tagline: 'World-renowned floral jasmine aromatics, citrus bergamot notes, and tea-like elegance.',
    description:
      'Grown at extreme high altitudes in the Gedeo zone of southern Ethiopia, Yirgacheffe washed green coffee is considered the global gold standard of clean, aromatic Arabica. Cherries undergo wet fermentation, fresh mountain water washing, and gentle solar drying on raised African bamboo beds.',
    image: '/images/coffee_ethiopian_export_1791911711943.jpg',
    originRegions: ['Yirgacheffe', 'Konga', 'Kochere', 'Wenago', 'Gedeo Zone'],
    altitude: '1,900m – 2,200m ASL',
    flavorOrProfile: 'Jasmine blossom, bergamot, Meyer lemon, stone peach, silky tea body',
    harvestSeason: 'Oct – Dec (Harvest) · Jan – Jul (Peak Export Shipment)',
    keySpecs: [
      { label: 'Export Grade', value: 'Grade 1 (0–3 defects) & Grade 2 (4–12 defects)' },
      { label: 'Processing', value: '100% Fully Washed on raised beds' },
      { label: 'Moisture Content', value: '10.2% – 11.4% (Max 11.5%)' },
      { label: 'Screen Sizing', value: 'Screen 14+ / 15+ (90%+ retention)' },
      { label: 'Water Activity (aw)', value: '0.54 – 0.58' },
      { label: 'Crop Year', value: 'Current harvest season' }
    ],
    packagingOptions: [
      '60 kg natural jute bags with hermetic GrainPro protective inner liners',
      '30 kg vacuum-sealed boutique cartons for micro-lots',
      'Buyer custom logo and lot marking stencils'
    ],
    minOrderQuantity: '1 x 20ft FCL (~19.2 MT / 320 bags) or LCL air/sea consolidated lots',
    containerLoad20ft: '320 bags / 19.2 Metric Tons net',
    commercialNotes:
      'Available in full container loads (FCL) or split container lots with Guji/Sidamo. Cupping scores typically range between 86.0 and 89.5 points on SCA scale. Official ECTA cupping certificate provided.'
  },
  {
    id: 'guji-sidamo-natural-grade1',
    category: 'Coffee',
    name: 'Sidama & Guji Sun-Dried Natural Grade 1',
    botanicalName: 'Coffea arabica var. heirloom',
    gradeTier: 'Specialty Natural Single-Origin',
    tagline: 'Intense ripe berry sweetness, dried blueberry aromas, and rich velvety body.',
    description:
      'Sourced from the forested mountain ridges of Guji and Sidama, these cherries are dried whole with their sweet fruit pulp intact under intense equatorial sun for 18 to 25 days. The result is a cup brimming with jammy fruit complexity, wild strawberry, and heavy chocolate undertones.',
    image: '/images/services_coffee_cupping_1791914146177.jpg',
    originRegions: ['Guji (Uraga, Hambela, Shakiso)', 'Sidama (Bensa, Aleta Wondo)'],
    altitude: '1,850m – 2,250m ASL',
    flavorOrProfile: 'Wild blueberry, ripe strawberry jam, milk chocolate, lavender, honey finish',
    harvestSeason: 'Nov – Jan (Harvest) · Feb – Aug (Export Shipping)',
    keySpecs: [
      { label: 'Export Grade', value: 'Grade 1 & Grade 3 Natural' },
      { label: 'Processing', value: 'Whole cherry sun-dried on raised African beds' },
      { label: 'Moisture Content', value: '10.5% – 11.5%' },
      { label: 'Screen Sizing', value: 'Screen 14+ / 15+' },
      { label: 'Defect Tolerance', value: 'Specialty export standard strictly hand-sorted' },
      { label: 'Sensory Score', value: 'SCA 86.5 – 88.5+ points' }
    ],
    packagingOptions: [
      '60 kg standard jute bags with GrainPro hermetic liner',
      'Specialty export mark stenciling'
    ],
    minOrderQuantity: '1 x 20ft FCL (~19.2 MT / 320 bags) or mixed origin palletized lots',
    containerLoad20ft: '320 bags / 19.2 Metric Tons net',
    commercialNotes:
      'Guji Naturals have achieved top honors in international barista competitions. Quotations provided on FOB Djibouti or CIF destination port basis with pre-shipment cupping sample approval.'
  },
  {
    id: 'limu-djimmah-commercial-grade',
    category: 'Coffee',
    name: 'Limu Washed & Djimmah Commercial Grade 4/5',
    botanicalName: 'Coffea arabica',
    gradeTier: 'Commercial Wholesale Volume Export',
    tagline: 'Consistent sweet cocoa balance and low acidity ideal for commercial roasters and espresso blends.',
    description:
      'Representing the backbone of Western Ethiopian coffee trade, Limu and Djimmah coffees offer exceptional value for commercial roasters, supermarket private labels, and espresso blend bases. Limu yields a mild, balanced sweet cup with low acidity, while Djimmah offers heavy body and earthy cocoa complexity.',
    image: '/images/coffee_ethiopian_export_1791911711943.jpg',
    originRegions: ['Limu Kossa', 'Jimma / Djimmah', 'Kaffa Biosphere Reserve'],
    altitude: '1,450m – 1,850m ASL',
    flavorOrProfile: 'Dark chocolate, roasted hazelnut, caramelized sugar, mild stone fruit',
    harvestSeason: 'Oct – Jan (Harvest) · Year-Round Export Supply',
    keySpecs: [
      { label: 'Export Grade', value: 'Limu Washed Gr. 2/3 & Djimmah Natural Gr. 4/5' },
      { label: 'Processing', value: 'Washed and Dry Natural available' },
      { label: 'Moisture Content', value: 'Max 12.0%' },
      { label: 'Foreign Matter', value: 'Under ECX commercial export standards' },
      { label: 'Volume Availability', value: 'High capacity for multi-container contracts' }
    ],
    packagingOptions: [
      '60 kg standard jute export bags',
      'Container bulk liners on request for industrial roasters'
    ],
    minOrderQuantity: '1 x 20ft FCL (19.2 MT) to 10+ container contracts',
    containerLoad20ft: '320 bags / 19.2 Metric Tons net',
    commercialNotes:
      'Priced competitively against international C-market benchmark differentials. Multi-container shipments coordinated across monthly delivery schedules.'
  },

  // SESAME SEEDS SECTION
  {
    id: 'whitish-humera-sesame',
    category: 'Sesame',
    name: 'Whitish Humera Sesame Seeds (Sortexed 99.5%)',
    botanicalName: 'Sesamum indicum var. Humera',
    gradeTier: 'Premium Confectionery & Tahini Grade',
    tagline: 'High natural oil yield, sweet nutty aroma, and uniform white color for global processors.',
    description:
      'Grown in the semi-arid, fertile black soils of Northwestern Ethiopia (Tigray & Amhara), Humera sesame seeds are renowned worldwide as the premier raw ingredient for high-grade tahini, halva, bakery coatings, and confectionery paste. Prized for its uniform whitish hue and naturally sweet taste.',
    image: '/images/sesame_seeds_export_1791911711194.jpg',
    originRegions: ['Humera', 'Gondar', 'Metema', 'Tigray / Amhara Border'],
    altitude: '550m – 800m Lowland Basins',
    flavorOrProfile: 'Sweet nutty aroma, no bitter astringency, rich oil mouthfeel',
    harvestSeason: 'Oct – Dec (Harvest) · Nov – Jun (Peak Export)',
    keySpecs: [
      { label: 'Purity Level', value: 'Min. 99.5% optical sortexed / 99.0% machine cleaned' },
      { label: 'Natural Oil Content', value: 'Min. 50.0% – 52.5%' },
      { label: 'Moisture Content', value: 'Max. 5.5% – 6.0%' },
      { label: 'Free Fatty Acids (FFA)', value: 'Max. 1.5% (typically < 1.0% at harvest)' },
      { label: 'Admixture', value: 'Max. 0.5% (sortex dependent)' },
      { label: 'Color Uniformity', value: 'Whitish / Creamy White (99%+)' }
    ],
    packagingOptions: [
      '50 kg new multi-wall woven polypropylene (PP) bags',
      '25 kg export bags with buyer company stenciling',
      '1,000 kg big bags (Jumbo tote bags)'
    ],
    minOrderQuantity: '1 x 20ft FCL (~19.0 Metric Tons / 380 bags)',
    containerLoad20ft: '380 bags / 19 Metric Tons net',
    commercialNotes:
      'Humera sesame commands a premium over standard oilseeds due to its confectionery taste. Quotations issued on FOB Djibouti or CIF destination port basis with pre-shipment surveyor certificates.'
  },
  {
    id: 'wollega-natural-sesame',
    category: 'Sesame',
    name: 'Wollega Natural Sesame Seeds (High Oil Grade)',
    botanicalName: 'Sesamum indicum var. Wollega',
    gradeTier: 'Industrial Edible Oil Crushing Grade',
    tagline: 'Exceptional oil content exceeding 52% tailored for seed crushers and industrial extraction.',
    description:
      'Cultivated across Western Ethiopia in the Wollega growing zones, this variety features a slightly brownish to mixed-white color profile but delivers superior natural oil yields (>52% to 54%). Highly sought after by commercial oilseed mills in the Middle East, East Asia, and Europe for cooking oil production.',
    image: '/images/sesame_seeds_export_1791911711194.jpg',
    originRegions: ['Wollega', 'Nekemte', 'Bako Basin', 'Oromia'],
    altitude: '1,200m – 1,700m ASL',
    flavorOrProfile: 'Nutty, high-density seed with rich lipid concentration',
    harvestSeason: 'Nov – Jan (Harvest) · Dec – Jul (Export)',
    keySpecs: [
      { label: 'Purity Level', value: 'Min. 98.5% – 99.0% machine cleaned' },
      { label: 'Natural Oil Content', value: 'Min. 52.0% – 54.0% (Superior Yield)' },
      { label: 'Moisture Content', value: 'Max. 6.0%' },
      { label: 'Free Fatty Acids (FFA)', value: 'Max. 2.0%' },
      { label: 'Admixture', value: 'Max. 1.0%' }
    ],
    packagingOptions: [
      '50 kg new double-stitched polypropylene bags',
      'Bulk container liner loading'
    ],
    minOrderQuantity: '1 x 20ft FCL (~19 MT) to multi-container contracts (500+ MT)',
    containerLoad20ft: '380 bags / 19 Metric Tons net',
    commercialNotes:
      'Volume discounts available for multi-container edible oil contracts. Certified by independent surveyors (SGS / Bureau Veritas) prior to sealing.'
  },

  // GRAINS & TEFF SECTION
  {
    id: 'ethiopian-ivory-white-teff',
    category: 'Grains',
    name: 'Highland Ivory / Magna White Teff',
    botanicalName: 'Eragrostis tef (Magna White)',
    gradeTier: 'Food-Grade Certified Ancient Supergrain',
    tagline: '100% naturally gluten-free, dense in iron, calcium, and amino acids for health food producers.',
    description:
      'Ethiopia is the biological motherland of teff, the world’s smallest grain possessing extraordinary nutritional density. Magna White Teff is the highest-value cultivar, yielding a mild, sweet, slightly nutty flour used globally in gluten-free baking, nutritious pastas, infant cereals, and traditional injera flatbreads.',
    image: '/images/grains_teff_export_1791911711536.jpg',
    originRegions: ['East Shewa (Ada’a / Bishoftu)', 'Gojjam', 'Arsi Plateau'],
    altitude: '1,800m – 2,400m Highland Plateau',
    flavorOrProfile: 'Mild, sweet, pleasant nutty finish, 100% naturally gluten-free',
    harvestSeason: 'Nov – Feb (Harvest) · Jan – Sep (Export Season)',
    keySpecs: [
      { label: 'Gluten Status', value: 'Naturally 100% Gluten-Free' },
      { label: 'Purity Standard', value: 'Min. 99.0% optical sortexed & air-aspirated' },
      { label: 'Moisture Level', value: 'Max. 11.0%' },
      { label: 'Foreign Matter', value: 'Max. 0.5%' },
      { label: 'Protein Content', value: '11.0% – 13.5% dry basis' },
      { label: 'Iron & Mineral Density', value: 'High bioavailability iron, magnesium, calcium' }
    ],
    packagingOptions: [
      '25 kg & 50 kg food-grade PP bags with moisture barrier',
      'Multi-ply kraft paper bags for direct flour mills',
      '1,000 kg bulk bags'
    ],
    minOrderQuantity: '1 x 20ft FCL (~20.0 Metric Tons / 400 bags)',
    containerLoad20ft: '400 bags / 20 Metric Tons net',
    commercialNotes:
      'Exported in compliance with Ethiopian Ministry of Trade agricultural export directives. Full phytosanitary certification and heavy metal laboratory analysis provided.'
  },
  {
    id: 'ethiopian-brown-red-teff',
    category: 'Grains',
    name: 'Brown & Sergedda Red Highland Teff',
    botanicalName: 'Eragrostis tef (Rubicund)',
    gradeTier: 'Whole-Grain Dietary Supergrain',
    tagline: 'Rich in dietary fiber, prebiotic compounds, and bold rustic flavor profile.',
    description:
      'Red and brown teff grains contain concentrated polyphenol antioxidants and higher mineral iron contents than white cultivars. Ideal for specialty gluten-free whole-grain bread manufacturers, health porridge formulations, and functional nutrition brands seeking unrefined ancient grain provenance.',
    image: '/images/grains_teff_export_1791911711536.jpg',
    originRegions: ['Gojjam', 'North Shewa', 'Bale Highlands'],
    altitude: '1,900m – 2,500m ASL',
    flavorOrProfile: 'Earthy, rich whole-grain aroma with cocoa and hazelnut undertones',
    harvestSeason: 'Nov – Jan (Harvest) · Year-Round Export',
    keySpecs: [
      { label: 'Purity Level', value: 'Min. 98.8% machine cleaned' },
      { label: 'Moisture Content', value: 'Max. 11.0%' },
      { label: 'Dietary Fiber', value: 'High prebiotic resistant starch' },
      { label: 'Damaged Grains', value: 'Max. 1.0%' }
    ],
    packagingOptions: [
      '25 kg & 50 kg food-grade woven polypropylene bags',
      'Custom labeled retail distributor sacks'
    ],
    minOrderQuantity: '1 x 20ft FCL (~20 MT)',
    containerLoad20ft: '400 bags / 20 Metric Tons net',
    commercialNotes:
      'Popular with European and North American specialized organic distributors and dietary health manufacturers.'
  },

  // PULSES & COMMODITIES SECTION
  {
    id: 'white-pea-beans-canning',
    category: 'Commodities',
    name: 'White Pea Beans (Canning Quality Navy Beans)',
    botanicalName: 'Phaseolus vulgaris var. White Pea',
    gradeTier: 'Grade 1 / Grade 2 International Canning Quality',
    tagline: 'Uniform seed caliber, high protein, and optimal water absorption for food canners.',
    description:
      'Grown throughout the Great Rift Valley, Ethiopian White Pea Beans (known globally as navy beans or haricot beans) are in strong international demand by commercial canning corporations for baked bean production, retail packaging, and institutional catering.',
    image: '/images/commodities_pulses_export_1791911711658.jpg',
    originRegions: ['Rift Valley (Hawassa, Ziway, Shashemene)', 'Gondar'],
    altitude: '1,500m – 1,900m ASL',
    flavorOrProfile: 'Smooth skin, creamy texture, neutral clean legume flavor',
    harvestSeason: 'Oct – Dec (Harvest) · Year-Round Export Dispatch',
    keySpecs: [
      { label: 'Seed Count', value: '500 – 600 seeds per 100g (Uniform grading)' },
      { label: 'Purity Standard', value: 'Min. 99.0% machine cleaned & sortexed' },
      { label: 'Moisture Content', value: 'Max. 12.0%' },
      { label: 'Defects / Discolored', value: 'Max. 1.5% – 2.0%' },
      { label: 'Cooking & Hydration', value: 'Rapid even water absorption for commercial retorting' }
    ],
    packagingOptions: [
      '50 kg new woven polypropylene bags with export stencils',
      '25 kg polypropylene bags',
      'Container bulk liners'
    ],
    minOrderQuantity: '1 x 20ft FCL (~24.0 Metric Tons / 480 bags)',
    containerLoad20ft: '480 bags / 24 Metric Tons net',
    commercialNotes:
      'Tested for canning hydration indices and split defect counts prior to dispatch. Pre-shipment fumigation certificate and SGS quality certificate supplied.'
  },
  {
    id: 'red-kidney-beans-export',
    category: 'Commodities',
    name: 'Dark Red Kidney Beans (Export Sortexed)',
    botanicalName: 'Phaseolus vulgaris var. Red Kidney',
    gradeTier: 'Premium Wholesale Food Grade',
    tagline: 'Lustrous deep red color, large uniform caliber, and firm texture for packaging.',
    description:
      'Highland Ethiopian red kidney beans are prized for their firm seed coat that resists splitting during thermal food processing. Used by international bean canners, dry-pack grocery distributors, and frozen entree manufacturers across Europe, the Middle East, and Asia.',
    image: '/images/commodities_pulses_export_1791911711658.jpg',
    originRegions: ['Hawassa', 'Arsi Negelle', 'Gojjam', 'Wolaita'],
    altitude: '1,600m – 2,100m ASL',
    flavorOrProfile: 'Dense hearty texture, mineral-rich earthy legume taste',
    harvestSeason: 'Nov – Jan (Harvest) · Dec – Aug (Export)',
    keySpecs: [
      { label: 'Purity Level', value: 'Min. 99.0% sortexed' },
      { label: 'Count per 100g', value: '200 – 240 seeds per 100g' },
      { label: 'Moisture Content', value: 'Max. 12.0%' },
      { label: 'Foreign Matter', value: 'Max. 0.5%' },
      { label: 'Split & Broken', value: 'Max. 1.0%' }
    ],
    packagingOptions: [
      '50 kg new PP bags',
      '25 kg PP bags with moisture inner bag'
    ],
    minOrderQuantity: '1 x 20ft FCL (~24 Metric Tons)',
    containerLoad20ft: '480 bags / 24 Metric Tons net',
    commercialNotes:
      'Popular export commodity to the Middle East, Southern Europe, and Latin America. Inspected for color uniformity and split rates.'
  },
  {
    id: 'ethiopian-desi-kabuli-chickpeas',
    category: 'Commodities',
    name: 'Highland Chickpeas (Desi & Kabuli Types)',
    botanicalName: 'Cicer arietinum',
    gradeTier: 'Commercial Wholesale Food Sourcing',
    tagline: 'Protein-dense legumes selected for hummus manufacturing, milling, and canning.',
    description:
      'Cultivated in the heavy highland vertisols of Central and Northern Ethiopia. We coordinate export shipments of both smaller Desi chickpeas (high fiber, ideal for flour and splitting) and larger Kabuli chickpeas (ideal for whole canning, snack roasting, and smooth hummus formulations).',
    image: '/images/commodities_pulses_export_1791911711658.jpg',
    originRegions: ['Gondar', 'Gojjam', 'Shewa Plateau'],
    altitude: '1,700m – 2,300m ASL',
    flavorOrProfile: 'Rich nutty flavor, firm seed structure',
    harvestSeason: 'Nov – Jan (Harvest) · Year-Round Dispatch',
    keySpecs: [
      { label: 'Purity Standard', value: 'Min. 98.5% – 99.0%' },
      { label: 'Moisture Level', value: 'Max. 11.5%' },
      { label: 'Size (Kabuli)', value: '7mm – 8mm caliber' },
      { label: 'Weevil Damage', value: 'Max. 0.5% (certified pest-free)' }
    ],
    packagingOptions: [
      '50 kg new woven polypropylene bags',
      'Big bags (1 Metric Ton)'
    ],
    minOrderQuantity: '1 x 20ft FCL (~24 Metric Tons)',
    containerLoad20ft: '480 bags / 24 Metric Tons net',
    commercialNotes:
      'Statutory phytosanitary certificate and pre-shipment container fumigation strictly administered prior to seal affixation.'
  },
  {
    id: 'green-mung-beans-ethiopia',
    category: 'Commodities',
    name: 'Green Mung Beans (Grade 1 Sprounding & Food Grade)',
    botanicalName: 'Vigna radiata',
    gradeTier: 'High Germination Sprouting & Food Grade',
    tagline: 'Vibrant green luster, uniform sizing, and superior germination rates for sprouts and milling.',
    description:
      'Grown in the lowlands and river valleys of Ethiopia, our Grade 1 Green Mung Beans feature an intense emerald green luster, high protein concentration, and rigorous sorting. In high demand in Asian and Middle Eastern markets for fresh bean sprout production, cellophane noodles, and plant-based protein isolates.',
    image: '/images/commodities_pulses_export_1791911711658.jpg',
    originRegions: ['Rift Valley', 'Gambella', 'Metema Lowlands'],
    altitude: '600m – 1,200m Lowland Valleys',
    flavorOrProfile: 'Clean, sweet, crisp vegetal profile',
    harvestSeason: 'Oct – Dec (Harvest) · Dec – Jun (Export)',
    keySpecs: [
      { label: 'Purity Level', value: 'Min. 99.0% optical sortexed' },
      { label: 'Germination Capacity', value: 'Min. 95.0% (for sprouting grade)' },
      { label: 'Moisture Content', value: 'Max. 11.0%' },
      { label: 'Seed Diameter', value: '3.2mm – 3.8mm uniform caliber' }
    ],
    packagingOptions: [
      '25 kg & 50 kg new woven PP bags with buyer stencil',
      'Vacuum-sealed palletized bags upon request'
    ],
    minOrderQuantity: '1 x 20ft FCL (~24 Metric Tons)',
    containerLoad20ft: '480 bags / 24 Metric Tons net',
    commercialNotes:
      'Each export lot tested for germination capacity and residual moisture to guarantee peak quality upon arrival at destination ports.'
  }
];
