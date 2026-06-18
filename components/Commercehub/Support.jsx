const Support = () => {
  return (
    <div className='bg-[#F0F0F0]  md:h-[450px] drop-shadow-lg p-5 md:p-20 flex flex-col md:flex-row justify-between items-center rounded-md w-full'>
        <div className='w-full md:w-[500px] bg-[#F0F0F0]'>
            <h2 className='text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#32C2C8] to-[#2E0965] bg-[#F0F0F0] mb-10'>Expert Support:</h2>
            <p className='text-xl bg-[#F0F0F0]'> Navigating multichannel integration can be complex, but with TechFinna, you’re never alone. Our experts provide dedicated support to ensure a smooth transition and ongoing operation.</p>
        </div>
        <div>
            <img className=' block h-[350px] bg-[#F0F0F0]' src="\images\support.png" alt="support" />
        </div>
    </div>
  )
}

export default Support