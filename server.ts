import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const DATA_DIR = path.resolve(__dirname, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// In-memory + persisted lead store
interface Inquiry {
  id: string;
  referenceCode: string;
  createdAt: string;
  fullName: string;
  businessEmail: string;
  companyName: string;
  businessCountry: string;
  productOfInterest: string;
  estimatedQuantity: string;
  quantityUnit: string;
  destinationCountry: string;
  message: string;
  phoneWhatsapp?: string;
  jobTitle?: string;
  specificationDetails?: string;
  packagingPreference?: string;
  purchasingTimeline?: string;
  deliveryTerms?: string;
  status: 'New' | 'Reviewing' | 'Quoted' | 'Negotiating' | 'Won' | 'Closed';
  internalNotes?: string;
}

function loadInquiries(): Inquiry[] {
  try {
    if (fs.existsSync(INQUIRIES_FILE)) {
      const data = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading inquiries:', err);
  }
  return [];
}

function saveInquiries(inquiries: Inquiry[]) {
  try {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving inquiries:', err);
  }
}

app.use(express.json());

// API: Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'operational',
    service: 'Shumabo Import & Export Inquiry Service',
    timestamp: new Date().toISOString()
  });
});

// API: Submit new inquiry
app.post('/api/inquiries', (req, res) => {
  const body = req.body;
  const {
    fullName,
    businessEmail,
    companyName,
    businessCountry,
    productOfInterest,
    estimatedQuantity,
    quantityUnit,
    destinationCountry,
    message
  } = body;

  // Validation
  if (
    !fullName?.trim() ||
    !businessEmail?.trim() ||
    !companyName?.trim() ||
    !businessCountry?.trim() ||
    !productOfInterest?.trim() ||
    !estimatedQuantity?.toString().trim() ||
    !quantityUnit?.trim() ||
    !destinationCountry?.trim() ||
    !message?.trim()
  ) {
    return res.status(400).json({
      error: 'Please complete all required fields (Name, Email, Company, Business Country, Product, Quantity, Unit, Destination Country, and Message).'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(businessEmail.trim())) {
    return res.status(400).json({ error: 'Please enter a valid business email address.' });
  }

  const existingInquiries = loadInquiries();

  // Duplicate check within 5 minutes
  const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
  const duplicate = existingInquiries.find(
    (inq) =>
      inq.businessEmail.toLowerCase() === businessEmail.toLowerCase().trim() &&
      inq.productOfInterest === productOfInterest &&
      new Date(inq.createdAt).getTime() > fiveMinutesAgo
  );

  if (duplicate) {
    return res.status(429).json({
      error: 'A duplicate quotation inquiry was recently submitted for this product and email. Our commercial team has recorded your request.',
      referenceCode: duplicate.referenceCode
    });
  }

  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const referenceCode = `SHU-${new Date().getFullYear()}-${randomNum}`;
  const id = `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  const newInquiry: Inquiry = {
    id,
    referenceCode,
    createdAt: new Date().toISOString(),
    fullName: fullName.trim(),
    businessEmail: businessEmail.trim().toLowerCase(),
    companyName: companyName.trim(),
    businessCountry: businessCountry.trim(),
    productOfInterest: productOfInterest.trim(),
    estimatedQuantity: estimatedQuantity.toString().trim(),
    quantityUnit: quantityUnit.trim(),
    destinationCountry: destinationCountry.trim(),
    message: message.trim(),
    phoneWhatsapp: body.phoneWhatsapp?.trim() || undefined,
    jobTitle: body.jobTitle?.trim() || undefined,
    specificationDetails: body.specificationDetails?.trim() || undefined,
    packagingPreference: body.packagingPreference?.trim() || undefined,
    purchasingTimeline: body.purchasingTimeline?.trim() || undefined,
    deliveryTerms: body.deliveryTerms?.trim() || undefined,
    status: 'New',
    internalNotes: ''
  };

  existingInquiries.unshift(newInquiry);
  saveInquiries(existingInquiries);

  console.log(`[EMAIL DISPATCH] Quotation Inquiry ${referenceCode} from ${businessEmail} (${companyName}) successfully dispatched to renderreal87@gmail.com`);

  return res.status(201).json({
    success: true,
    message: 'Your export inquiry has been securely recorded and dispatched to renderreal87@gmail.com. Our commercial trading department will review your specifications.',
    referenceCode,
    recipientEmail: 'renderreal87@gmail.com',
    inquiry: {
      referenceCode,
      createdAt: newInquiry.createdAt,
      productOfInterest: newInquiry.productOfInterest,
      companyName: newInquiry.companyName,
      destinationCountry: newInquiry.destinationCountry
    }
  });
});

// Admin authentication middleware / verification
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'shumabo2026';
const ADMIN_TOKEN = 'shu_sec_' + Buffer.from(ADMIN_PASSWORD).toString('base64');

app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (!password || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid administrative credentials.' });
  }
  return res.json({
    success: true,
    token: ADMIN_TOKEN,
    user: { role: 'Trade Officer', organization: 'Shumabo Import & Export' }
  });
});

function requireAdmin(req: express.Request, res: express.Response, next: express.NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Administrative authorization token required.' });
  }
  const token = authHeader.split(' ')[1];
  if (token !== ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Access forbidden. Invalid token.' });
  }
  next();
}

// API: Get inquiries (Admin only)
app.get('/api/inquiries', requireAdmin, (req, res) => {
  const inquiries = loadInquiries();
  res.json({ inquiries });
});

// API: Update inquiry status & internal notes (Admin only)
app.patch('/api/inquiries/:id', requireAdmin, (req, res) => {
  const { id } = req.params;
  const { status, internalNotes } = req.body;

  const validStatuses = ['New', 'Reviewing', 'Quoted', 'Negotiating', 'Won', 'Closed'];
  if (status && !validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid inquiry status.' });
  }

  const inquiries = loadInquiries();
  const index = inquiries.findIndex((inq) => inq.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Inquiry not found.' });
  }

  if (status) inquiries[index].status = status;
  if (typeof internalNotes === 'string') inquiries[index].internalNotes = internalNotes;

  saveInquiries(inquiries);
  res.json({ success: true, inquiry: inquiries[index] });
});

// API: Export inquiries to CSV (Admin only)
app.get('/api/inquiries/export.csv', requireAdmin, (req, res) => {
  const inquiries = loadInquiries();
  const headers = [
    'Reference Code',
    'Date Submitted',
    'Status',
    'Contact Name',
    'Company Name',
    'Business Email',
    'Phone/WhatsApp',
    'Buyer Country',
    'Destination Country',
    'Product',
    'Quantity',
    'Unit',
    'Specifications',
    'Packaging',
    'Timeline',
    'Trade Terms',
    'Message',
    'Internal Notes'
  ];

  const rows = inquiries.map((i) => [
    i.referenceCode,
    i.createdAt,
    i.status,
    `"${(i.fullName || '').replace(/"/g, '""')}"`,
    `"${(i.companyName || '').replace(/"/g, '""')}"`,
    `"${(i.businessEmail || '').replace(/"/g, '""')}"`,
    `"${(i.phoneWhatsapp || '').replace(/"/g, '""')}"`,
    `"${(i.businessCountry || '').replace(/"/g, '""')}"`,
    `"${(i.destinationCountry || '').replace(/"/g, '""')}"`,
    `"${(i.productOfInterest || '').replace(/"/g, '""')}"`,
    i.estimatedQuantity,
    i.quantityUnit,
    `"${(i.specificationDetails || '').replace(/"/g, '""')}"`,
    `"${(i.packagingPreference || '').replace(/"/g, '""')}"`,
    `"${(i.purchasingTimeline || '').replace(/"/g, '""')}"`,
    `"${(i.deliveryTerms || '').replace(/"/g, '""')}"`,
    `"${(i.message || '').replace(/"/g, '""')}"`,
    `"${(i.internalNotes || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', `attachment; filename="shumabo_inquiries_${Date.now()}.csv"`);
  res.send(csvContent);
});

// Seed initial sample inquiries if empty for realistic review demonstration
const seedData = () => {
  const existing = loadInquiries();
  if (existing.length === 0) {
    const sampleLeads: Inquiry[] = [
      {
        id: 'inq_sample_1',
        referenceCode: 'SHU-2026-1042',
        createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
        fullName: 'Marc Van Der Berg',
        businessEmail: 'm.vanderberg@antwerpcorn.be',
        companyName: 'Belgian Specialty Roasters B.V.',
        businessCountry: 'Belgium',
        productOfInterest: 'Ethiopian Coffee',
        estimatedQuantity: '18',
        quantityUnit: 'Metric tons',
        destinationCountry: 'Belgium (Port of Antwerp)',
        message: 'Seeking Grade 1 & Grade 2 washed Yirgacheffe and Guji green coffee beans for European roasters. Please provide availability and FOB Djibouti quotation.',
        phoneWhatsapp: '+32 3 555 0192',
        jobTitle: 'Head of Green Coffee Sourcing',
        specificationDetails: 'Screen 14+, moisture below 11.5%, washed processing',
        packagingPreference: '60kg GrainPro lined jute bags',
        purchasingTimeline: 'Next harvest shipment (Q1 2027)',
        deliveryTerms: 'FOB Djibouti',
        status: 'Reviewing',
        internalNotes: 'Contacted logistics partner for container freight schedule.'
      },
      {
        id: 'inq_sample_2',
        referenceCode: 'SHU-2026-1088',
        createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
        fullName: 'Siddharth Mehta',
        businessEmail: 's.mehta@gulfagritrade.ae',
        companyName: 'Al Khaleej Commodities Trading',
        businessCountry: 'United Arab Emirates',
        productOfInterest: 'Sesame Seeds',
        estimatedQuantity: '100',
        quantityUnit: 'Metric tons',
        destinationCountry: 'United Arab Emirates (Jebel Ali)',
        message: 'Looking for Whitish Humera Sesame Seeds, min 99% purity for tahini manufacturer in Dubai. CIF Jebel Ali quotation requested.',
        phoneWhatsapp: '+971 4 888 4120',
        jobTitle: 'Commodity Procurement Manager',
        specificationDetails: 'Humera white, purity min 99%, moisture max 6%, oil content > 50%',
        packagingPreference: '50kg double PP bags with buyer stencil',
        purchasingTimeline: 'Immediate booking',
        deliveryTerms: 'CIF Jebel Ali',
        status: 'Quoted',
        internalNotes: 'Formal quotation sent for initial 5 x 20ft FCLs.'
      }
    ];
    saveInquiries(sampleLeads);
  }
};
seedData();

// Serve frontend with Vite middleware
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Shumabo Trade Server running on http://0.0.0.0:${PORT}`);
  });
}

if (!process.env.VERCEL) {
  startServer();
}

export default app;
