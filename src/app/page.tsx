import Image from 'next/image'
import Link from 'next/link'
import { Shield, FileText, Users, Lock, Verified, HeartHandshake } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Section */}
        <div className="glass-effect rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-blue-300 mr-4" />
            <h1 className="text-5xl font-bold text-white">
              MidnightHealthVault
            </h1>
          </div>
          <p className="text-xl text-gray-200 mb-4 font-semibold">
            Operation Midnight
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Safely and securely pass medical records without revealing too much information. 
            This platform verifies the records being sent, allowing for a sense of trust between patients and doctors.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="glass-effect rounded-xl p-6">
            <Lock className="h-12 w-12 text-blue-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Secure & Private</h3>
            <p className="text-gray-300">
              Advanced encryption ensures your medical records remain confidential 
              while sharing only necessary information.
            </p>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <Verified className="h-12 w-12 text-green-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Verified Records</h3>
            <p className="text-gray-300">
              Built-in verification system ensures the authenticity and integrity 
              of all medical records shared on the platform.
            </p>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <HeartHandshake className="h-12 w-12 text-pink-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Trust Building</h3>
            <p className="text-gray-300">
              Create meaningful connections between patients and healthcare providers 
              through transparent and secure record sharing.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass-effect rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Get Started Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/patient"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <Users className="h-5 w-5 mr-2" />
              Patient Portal
            </Link>
            <Link 
              href="/doctor"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <FileText className="h-5 w-5 mr-2" />
              Doctor Portal
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}