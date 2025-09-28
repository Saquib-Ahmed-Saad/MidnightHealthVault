import Link from 'next/link'
import { Upload, FileText, Shield, ArrowLeft, Eye, Share2, Lock } from 'lucide-react'

export default function PatientPortal() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/" className="mr-4">
            <ArrowLeft className="h-6 w-6 text-white hover:text-blue-300 transition-colors" />
          </Link>
          <h1 className="text-4xl font-bold text-white">Patient Portal</h1>
        </div>

        {/* Welcome Section */}
        <div className="glass-effect rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Welcome to Your Secure Health Vault</h2>
          <p className="text-gray-300">
            Manage your medical records safely and share them securely with healthcare providers.
            Your privacy is our priority - only necessary information is shared.
          </p>
        </div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass-effect rounded-xl p-6">
            <Upload className="h-12 w-12 text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Upload Records</h3>
            <p className="text-gray-300 mb-4">
              Securely upload your medical documents, test results, and health records.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full">
              Upload New Record
            </button>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <Share2 className="h-12 w-12 text-green-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Share Records</h3>
            <p className="text-gray-300 mb-4">
              Share specific records with doctors while maintaining your privacy.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full">
              Share with Doctor
            </button>
          </div>
        </div>

        {/* My Records Section */}
        <div className="glass-effect rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-semibold text-white mb-6">My Medical Records</h3>
          
          {/* Sample Records */}
          <div className="space-y-4">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-blue-300 mr-3" />
                <div>
                  <h4 className="text-white font-semibold">Blood Test Results</h4>
                  <p className="text-gray-400 text-sm">Uploaded: March 15, 2024</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-300 hover:text-blue-200 p-2">
                  <Eye className="h-5 w-5" />
                </button>
                <button className="text-green-300 hover:text-green-200 p-2">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-blue-300 mr-3" />
                <div>
                  <h4 className="text-white font-semibold">X-Ray Report</h4>
                  <p className="text-gray-400 text-sm">Uploaded: March 10, 2024</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-300 hover:text-blue-200 p-2">
                  <Eye className="h-5 w-5" />
                </button>
                <button className="text-green-300 hover:text-green-200 p-2">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Security Info */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Lock className="h-6 w-6 text-yellow-300 mr-2" />
            <h3 className="text-xl font-semibold text-white">Security & Privacy</h3>
          </div>
          <ul className="text-gray-300 space-y-2">
            <li>• All records are encrypted with military-grade security</li>
            <li>• You control what information is shared and with whom</li>
            <li>• Records are verified for authenticity before sharing</li>
            <li>• Full audit trail of all access and sharing activities</li>
          </ul>
        </div>
      </div>
    </main>
  )
}