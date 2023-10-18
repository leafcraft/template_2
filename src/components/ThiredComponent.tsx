import React from 'react'

const ThiredComponent = () => {
  return (
    <div><section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
  <div className="text-black mb-4">
    <h2 className="text-lg font-semibold mb-2">Small Header</h2>
    <h1 className="text-3xl font-medium mb-2">Title</h1>
    <p className="text-base text-gray-600">Subtitle</p>
  </div>
  <div className="flex items-center mb-4">
    <button className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded">
      Explore
    </button>
  </div>
  <div className="grid grid-cols-3 gap-4">
    <div className="bg-gray-200 p-4">
      <img src="image1.jpg" alt="Image 1" className="w-full h-auto" />
      <p className="text-sm text-gray-600 mt-2">Description for Image 1</p>
    </div>
    <div className="bg-gray-200 p-4">
      <img src="image2.jpg" alt="Image 2" className="w-full h-auto" />
      <p className="text-sm text-gray-600 mt-2">Description for Image 2</p>
    </div>
    <div className="bg-gray-200 p-4">
      <img src="image3.jpg" alt="Image 3" className="w-full h-auto" />
      <p className="text-sm text-gray-600 mt-2">Description for Image 3</p>
    </div>
  </div>
</div>

        <div className="lg:w-1/2 w-full lg:h-auto h-64 lg:mt-0 mt-10 object-cover object-center rounded overflow-hidden">
          <img alt="ecommerce" src="https://dummyimage.com/400x400" className="w-full h-full object-cover object-center rounded" />
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default ThiredComponent