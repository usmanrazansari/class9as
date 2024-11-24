const HeroSection = () => {
  return (
    <main className="flex flex-col gap-8 mx-10 my-8">
      
      <div className="flex gap-8">
        <div className="w-1/2 bg-orange-950 h-96 rounded-lg shadow-lg p-6">
          
        </div>
        <div className="w-1/2 bg-purple-950 h-96 rounded-lg shadow-lg p-6">
          
        </div>
      </div>

    
      <div className="flex gap-8">
        <div className="w-1/3 bg-blue-950 h-80 rounded-lg shadow-lg p-6">
          
        </div>
        <div className="w-1/3 bg-green-950 h-80 rounded-lg shadow-lg p-6">
          
        </div>
        <div className="w-1/3 bg-red-950 h-80 rounded-lg shadow-lg p-6">
          
        </div>
      </div>
    </main>
  )
}

export default HeroSection