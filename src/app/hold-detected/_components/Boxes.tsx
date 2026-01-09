import React from 'react'

const Boxes = () => {
    return (
        <div className="w-full max-w-[900px] border border-orange-300 rounded-xl p-8 md:p-10 flex gap-6 cursor-pointer mx-auto shadow-lg">
            {/* Icon */}
            <span className="text-4xl md:text-5xl self-start">📙</span>

            {/* Content */}
            <div className="flex flex-col">
                <h4 className="font-semibold text-lg md:text-xl">
                    The Great Gatsby
                </h4>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-2">
                    Barcode: 30001234567891

                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-2">
                    Reserved for: Jane Smith

                </p>
                <p className="text-orange-500 text-3xl md:text-4xl font-bold mt-4">
                  📚 On Hold
                </p>
            </div>
        </div>
    )
}

export default Boxes
