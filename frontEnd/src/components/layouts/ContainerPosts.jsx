
export default function ContainerPosts(params) {
    return (
        <div className="mx-auto lg:grid lg:grid-cols-3 lg:gap-10 px-5 md:px-0 ms:w-10/12 md:w-5/6 py-10">
            {params.children}
        </div>
    )
}
