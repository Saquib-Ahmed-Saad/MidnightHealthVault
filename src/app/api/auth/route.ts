import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password, userType } = await request.json()
    
    if (!email || !password || !userType) {
      return NextResponse.json({
        success: false,
        message: 'Email, password, and user type are required'
      }, { status: 400 })
    }

    // Simulate authentication
    if (userType === 'patient' || userType === 'doctor') {
      const mockUser = {
        id: `${userType}_${Date.now()}`,
        email,
        userType,
        name: userType === 'patient' ? 'John Doe' : 'Dr. Jane Smith',
        isVerified: userType === 'doctor', // Doctors need verification
        sessionToken: `token_${Math.random().toString(36)}`
      }

      return NextResponse.json({
        success: true,
        user: mockUser,
        message: 'Authentication successful'
      })
    }

    return NextResponse.json({
      success: false,
      message: 'Invalid credentials'
    }, { status: 401 })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Authentication failed'
    }, { status: 500 })
  }
}