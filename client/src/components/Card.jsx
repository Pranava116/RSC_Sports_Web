import React from 'react'

function Card() {
  return (
    <div class=" my-20 max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    <div class="p-6">
        <h2 class="text-2xl font-semibold text-gray-800">Card Title</h2>
        <p class="mt-4 text-gray-600">This is a simple card component built with Tailwind CSS. It includes an image, a title, some content, and a button.</p>
        <button class="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Button
        </button>
    </div>
</div>

  )
}

export default Card
