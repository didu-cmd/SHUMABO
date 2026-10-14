export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Products' | 'Inquiries' | 'Shipping & Logistics' | 'Commercial Terms';
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Products',
    question: 'Which agricultural products can I inquire about with Shumabo?',
    answer:
      'We handle commercial inquiries for prime Ethiopian export commodities, focusing on specialty and commercial green Arabica coffee (Yirgacheffe, Sidamo, Guji, Limu, Djimmah), Humera and Wollega white sesame seeds, Ethiopian grains (including teff), and pulses such as white pea beans and red kidney beans. If you have requirements for other Ethiopian agricultural goods, you can submit a custom sourcing inquiry.'
  },
  {
    id: 'faq-2',
    category: 'Inquiries',
    question: 'How do I request a formal commercial quotation?',
    answer:
      'Submit your detailed requirements via our Request a Quote form or by emailing our trading department. To prepare an accurate quotation, we require your target product category, required grade or specifications, estimated quantity (in metric tons or containers), destination port, packaging preferences, and target shipment timeframe.'
  },
  {
    id: 'faq-3',
    category: 'Inquiries',
    question: 'What information should I include in my initial inquiry?',
    answer:
      'Providing specific commercial details speeds up review significantly: (1) Exact commodity and desired grade or processing method, (2) Quantity in metric tons or full container loads (FCL), (3) Destination country and port of discharge, (4) Packaging preference (e.g., 60kg GrainPro jute bags or 50kg PP bags), and (5) Preferred trade terms (FOB Djibouti, CIF, or CFR).'
  },
  {
    id: 'faq-4',
    category: 'Inquiries',
    question: 'Can I submit a bulk-order or multi-container inquiry?',
    answer:
      'Yes. Our trade coordination is built specifically for commercial wholesalers, importers, roasters, food manufacturers, and institutional procurement teams. Standard minimum order quantities are typically one 20ft full container load (FCL), but we regularly coordinate multi-container contracts across shipping schedules.'
  },
  {
    id: 'faq-5',
    category: 'Shipping & Logistics',
    question: 'Can I specify a destination country and preferred delivery port?',
    answer:
      'Yes. Ethiopian agricultural commodities depart via the Port of Djibouti through established sea shipping corridors. You can specify any major commercial seaport worldwide (such as Antwerp, Hamburg, Rotterdam, Jebel Ali, Jeddah, Singapore, Shanghai, Houston, etc.). We quote freight costs transparently based on prevailing carrier rates.'
  },
  {
    id: 'faq-6',
    category: 'Commercial Terms',
    question: 'How are product grades and specifications confirmed prior to shipment?',
    answer:
      'Specifications are agreed upon formally in the commercial contract. Prior to loading, commodities undergo statutory inspection in Ethiopia (such as Ethiopian Coffee & Tea Authority for coffee, or authorized pre-shipment quality inspectors like SGS or Bureau Veritas upon buyer agreement). Inspection certificates confirming moisture, purity, and grade are furnished with export shipping documents.'
  },
  {
    id: 'faq-7',
    category: 'Shipping & Logistics',
    question: 'How are packaging and container stuffing arranged?',
    answer:
      'Packaging options depend on the commodity: green coffee is typically packed in 60kg natural jute bags with hermetic GrainPro inner liners; sesame seeds and pulses in 50kg or 25kg new polypropylene (PP) bags; and bulk grains in lined containers or big bags. Buyer stenciling, batch codes, and custom labels can be arranged during contract finalization.'
  },
  {
    id: 'faq-8',
    category: 'Commercial Terms',
    question: 'Which official trade documents are provided for an export transaction?',
    answer:
      'Standard export documentation packages include: Commercial Invoice, Packing List, Full Set Clean on Board Ocean Bills of Lading (B/L), Certificate of Origin issued by the Ethiopian Chamber of Commerce, Phytosanitary Certificate from the Ministry of Agriculture, Quality & Weight Certificate, and Fumigation Certificate. Additional destination-specific certificates (such as legalization or specific laboratory analyses) are clarified during initial discussions.'
  },
  {
    id: 'faq-9',
    category: 'Commercial Terms',
    question: 'How do we discuss payment and trade terms?',
    answer:
      'We transact on internationally recognized trade terms (Incoterms 2020), primarily FOB Djibouti, CFR, or CIF destination port. Payment instruments are agreed based on transaction volume, buyer banking credentials, and commercial policy, commonly structured around Irrevocable Letters of Credit (L/C at sight) opened with top-tier international correspondent banks or agreed commercial cash-against-documents (CAD) structures.'
  }
];
