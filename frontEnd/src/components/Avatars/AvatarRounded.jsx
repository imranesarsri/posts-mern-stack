export default function AvatarRounded(params) {
    return (
        <img
            alt={params.alt}
            src={params.src}
            className="rounded-full h-10 w-10 object-cover"
            data-testid="flowbite-avatar-img"
        />
    );
}
