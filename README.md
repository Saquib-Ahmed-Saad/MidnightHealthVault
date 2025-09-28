# MidnightHealthVault - Operation Midnight

This is our Midnight application, Code Name: Operation Midnight. Users can use this to safely and securely pass medical records without revealing too much information. This website also verifies the records being sent allowing for a sense of trust between patients and doctors.

## 🔒 Key Features

- **Secure Medical Record Storage**: Advanced encryption ensures patient data remains confidential
- **Privacy-First Sharing**: Share only necessary information with healthcare providers
- **Record Verification**: Built-in verification system ensures authenticity and integrity
- **Trust Building**: Creates transparent and secure connections between patients and doctors
- **Role-Based Access**: Separate portals for patients and healthcare providers
- **Audit Trail**: Complete logging of all access and sharing activities

## 🌟 Core Functionality

### For Patients
- Upload medical records securely
- Control what information is shared and with whom
- Track who has accessed their records
- Verify the authenticity of their documents

### For Doctors
- Request access to patient records with consent
- View verified medical records
- Download authenticated documents
- Manage patient relationships

## 🛠 Technology Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom midnight theme
- **Icons**: Lucide React
- **Security**: Custom encryption and verification utilities
- **API**: Next.js API routes for secure operations

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── records/       # Medical records CRUD
│   │   └── verify/        # Record verification
│   ├── doctor/            # Doctor portal
│   ├── patient/           # Patient portal
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
├── lib/                   # Utility libraries
│   └── security.ts        # Security and encryption utilities
└── types/                 # TypeScript type definitions
```

## 🔐 Security Features

### Encryption
- All medical records are encrypted before storage
- Multiple layers of security for data protection
- Secure transmission protocols

### Verification
- Digital signatures ensure document integrity
- Automated authenticity verification
- Checksum validation for file integrity

### Privacy Controls
- Role-based access control
- Granular permission system
- Privacy-filtered data sharing

### Audit & Compliance
- Complete audit trail for all operations
- Compliance with healthcare data regulations
- Secure logging and monitoring

## 🏥 User Roles

### Patients
- Upload and manage medical records
- Share records selectively with doctors
- Monitor access to their data
- Maintain privacy control

### Healthcare Providers
- Request access to patient records
- View verified medical documents
- Manage patient relationships
- Access audit trails

## 🔧 API Endpoints

- `GET /api/records` - Retrieve medical records
- `POST /api/records` - Upload new medical record
- `POST /api/verify` - Verify record authenticity
- `POST /api/auth` - User authentication

## 🎨 UI Features

- **Midnight Theme**: Custom dark blue gradient design
- **Glass Effect**: Modern glassmorphism styling
- **Responsive Design**: Works on all device sizes
- **Accessibility**: Built with accessibility in mind
- **Icons**: Lucide React icons for consistent UI

## 📱 Screenshots

### Homepage
![Homepage](https://github.com/user-attachments/assets/0d31a5ee-f538-48c0-a757-c00ed2dae52c)

### Patient Portal
![Patient Portal](https://github.com/user-attachments/assets/13c069c5-b8b8-4f76-91ff-ac04da7238d4)

### Doctor Portal
![Doctor Portal](https://github.com/user-attachments/assets/5269d3d3-3e83-4504-8f68-86af269c383a)

## 🚀 Deployment

The easiest way to deploy the Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 🛡 Security Notice

This application is designed for secure handling of medical records. Always ensure proper security measures are in place when deploying to production, including:

- HTTPS/SSL certificates
- Proper database security
- Real encryption implementations
- Compliance with healthcare regulations (HIPAA, etc.)
- Regular security audits
