import ApiTest from './components/ApiTest'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 
                    dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <main className="max-w-3xl mx-auto space-y-10">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
              NextJS + Flask Integration
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Test the connection between your NextJS frontend and Flask backend
            </p>
          </header>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <ApiTest />
          </div>
        </main>
      </div>
    </div>
  )
}
