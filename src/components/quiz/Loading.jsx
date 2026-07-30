import React from 'react'

const Loading = () => {
  return (
    <div className="flex h-full items-center justify-center py-20">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">
                Loading Questions...
            </h2>
            <p className="mt-2 text-slate-500">
                Preparing your quiz.
            </p>
        </div>
    </div>
  )
}

export default Loading