
export default function ContainerPosts(params) {
    return (
        <div className="w-full flex flex-col lg:flex-row md:w-2/3 lg:w-5/6 mx-auto px-5 sm:px-10 py-5 md:px-0">
            {params.children}
        </div>
    )
}
