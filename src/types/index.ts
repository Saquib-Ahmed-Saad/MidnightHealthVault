export interface MedicalRecord {
  id: string
  title: string
  type: 'blood_test' | 'xray' | 'mri' | 'prescription' | 'lab_report' | 'other'
  uploadDate: string
  patientId: string
  isVerified: boolean
  encryptedData: string
  sharedWith: string[]
  fileUrl?: string
  metadata: {
    size: number
    format: string
    checksum: string
  }
}

export interface Patient {
  id: string
  name: string
  email: string
  dateOfBirth: string
  records: MedicalRecord[]
  sharedDoctors: string[]
}

export interface Doctor {
  id: string
  name: string
  email: string
  specialization: string
  licenseNumber: string
  isVerified: boolean
  patients: string[]
  accessRequests: AccessRequest[]
}

export interface AccessRequest {
  id: string
  patientId: string
  doctorId: string
  recordIds: string[]
  requestDate: string
  status: 'pending' | 'approved' | 'denied'
  expiryDate: string
  purpose: string
}

export interface ShareSession {
  id: string
  patientId: string
  doctorId: string
  recordIds: string[]
  createdAt: string
  expiresAt: string
  isActive: boolean
}

export interface VerificationResult {
  isValid: boolean
  verificationDate: string
  verifiedBy: string
  confidence: number
  issues?: string[]
}