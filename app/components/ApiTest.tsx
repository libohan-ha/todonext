'use client'

import { useState } from 'react'

export default function ApiTest() {
  const [result, setResult] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const testApi = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data`)
      const data = await res.json()
      setResult(JSON.stringify(data, null, 2))
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch data')
      setResult('')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-xl mx-auto">
      <button 
        onClick={testApi}
        disabled={isLoading}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed
                 font-medium text-lg shadow-sm"
      >
        {isLoading ? 'Testing...' : 'Test Flask API'}
      </button>
      
      {error && (
        <div className="w-full p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          {error}
        </div>
      )}
      
      {result && (
        <div className="w-full">
          <h2 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">
            API Response:
          </h2>
          <pre className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-auto 
                        border border-gray-200 dark:border-gray-700">
            {result}
          </pre>
        </div>
      )}
    </div>
  )
} 