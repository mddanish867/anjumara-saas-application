
export default function UserDetails() {
  return (
    <div>
      <div className="bg-transparent mt-20 max-w-2xl overflow-hidden sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium">
            User database
        </h3>
        <p className="mt-1 max-w-2xl text-sm">
            Details and informations about user.
        </p>
    </div>
    <div className="border-t">
        <dl>
            <div className="bg-transparent px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium ">
                    Full name
                </dt>
                <dd className="mt-1 text-sm  sm:mt-0 sm:col-span-2">
                    Mickael Poulaz
                </dd>
            </div>
            <div className="bg-transparent px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium ">
                    Best techno
                </dt>
                <dd className="mt-1 text-sm  sm:mt-0 sm:col-span-2">
                    React JS
                </dd>
            </div>
            <div className="bg-transparent px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium ">
                    Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    m.poul@example.com
                </dd>
            </div>
            <div className="bg-transparent px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium ">
                    Salary
                </dt>
                <dd className="mt-1 text-sm  sm:mt-0 sm:col-span-2">
                    $10,000
                </dd>
            </div>
            <div className="bg-transparent px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium ">
                    About
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                </dd>
            </div>
        </dl>
    </div>
</div>
    </div>
  )
}


