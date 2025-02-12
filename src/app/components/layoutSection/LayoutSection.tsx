import { rootImages } from '@/app/core/rootImages'
import { MobileMenu } from './MobileMenu';

export const LayoutSection = () => {
  return (
  <>
  <div className="bg-black" style={{height: '100vh', background: 'radial-gradient(circle at 1% 5%, #2183e8 5%, transparent 20%), radial-gradient(circle at 100% 100%, #2183e8 5%, transparent 20%)'  }}>
  <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 flex flex-row align-center items-center gap-x-2.5">
          <img className="h-12 w-auto" src={rootImages.logo} alt="Roma-Code" />
          <h3 className="text-white text-xl font-semibold">Roma Code</h3>
        </a>
      </div>
   
      <MobileMenu />
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#" className="text-base font-semibold text-white">About Me</a>
        <a href="#" className="text-base font-semibold text-white">Skills</a>
        <a href="#" className="text-base font-semibold text-white">Services</a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-base font-semibold text-white">Contact <span aria-hidden="true">&darr;</span></a>
      </div>
    </nav>
  </header>

  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      
      <div className="text-center">
        <h1 className="font-semibold tracking-tight text-bluetext text-4xl md:text-5xl lg:text-7xl font-poppins">
          Website Design
          <br />
          <span className="text-gray-100">and Development</span>
        </h1>
        <p className="mt-8 md:text-lg font-poppins text-pretty text-gray-100 text-lg">Boost your business with our web design and development services. We create attractive, easy-to-use pages that are optimized to convert visitors into customers and make your brand stand out online!</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-bluetext px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#1a6bbf] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">About Me</a>
          <a href="#" className="rounded-md bg-bluetext px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#1a6bbf] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contact Me<span aria-hidden="true">&darr;</span></a>
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
    </div>
  </div>
</div>
  </>
  )
}
