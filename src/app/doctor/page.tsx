import Link from 'next/link'
import { FileSearch, Users, Verified, ArrowLeft, Eye, Download, Shield, CheckCircle } from 'lucide-react'

export default function DoctorPortal() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/" className="mr-4">
            <ArrowLeft className="h-6 w-6 text-white hover:text-blue-300 transition-colors" />
          </Link>
          <h1 className="text-4xl font-bold text-white">Doctor Portal</h1>
        </div>

        {/* Welcome Section */}
        <div className="glass-effect rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Healthcare Provider Dashboard</h2>
          <p className="text-gray-300">
            Access verified patient records securely. All records are authenticated and encrypted,
            ensuring you receive accurate medical information while respecting patient privacy.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glass-effect rounded-xl p-6 text-center">
            <Users className="h-12 w-12 text-blue-300 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white">24</h3>
            <p className="text-gray-300">Active Patients</p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center">
            <Verified className="h-12 w-12 text-green-300 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white">156</h3>
            <p className="text-gray-300">Verified Records</p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center">
            <Shield className="h-12 w-12 text-yellow-300 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white">100%</h3>
            <p className="text-gray-300">Security Rate</p>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass-effect rounded-xl p-6">
            <FileSearch className="h-12 w-12 text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Request Patient Records</h3>
            <p className="text-gray-300 mb-4">
              Request access to specific patient records with their consent.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full">
              Request Records
            </button>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <Users className="h-12 w-12 text-green-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Manage Patients</h3>
            <p className="text-gray-300 mb-4">
              View and manage your patient relationships and record access.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full">
              View Patients
            </button>
          </div>
        </div>

        {/* Recent Shared Records */}
        <div className="glass-effect rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Recently Shared Records</h3>
          
          <div className="space-y-4">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-2 mr-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">John D. - Blood Test Results</h4>
                    <p className="text-gray-400 text-sm">Shared: March 15, 2024 • Verified ✓</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-300 hover:text-blue-200 p-2">
                    <Eye className="h-5 w-5" />
                  </button>
                  <button className="text-green-300 hover:text-green-200 p-2">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-2 mr-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Sarah M. - MRI Scan Report</h4>
                    <p className="text-gray-400 text-sm">Shared: March 12, 2024 • Verified ✓</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-300 hover:text-blue-200 p-2">
                    <Eye className="h-5 w-5" />
                  </button>
                  <button className="text-green-300 hover:text-green-200 p-2">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-2 mr-3">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Michael R. - Prescription History</h4>
                    <p className="text-gray-400 text-sm">Shared: March 10, 2024 • Pending Verification</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-400 p-2 cursor-not-allowed">
                    <Eye className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 p-2 cursor-not-allowed">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Info */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Verified className="h-6 w-6 text-green-300 mr-2" />
            <h3 className="text-xl font-semibold text-white">Record Verification System</h3>
          </div>
          <ul className="text-gray-300 space-y-2">
            <li>• All records undergo automated authenticity verification</li>
            <li>• Digital signatures ensure document integrity</li>
            <li>• Patient consent is verified before any record access</li>
            <li>• Complete audit trail for compliance and security</li>
            <li>• Only verified records are available for medical decision making</li>
          </ul>
        </div>
      </div>
    </main>
  )
}