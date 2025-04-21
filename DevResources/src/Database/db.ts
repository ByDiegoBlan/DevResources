type Resource = {
    id: `${string}-${string}-${string}-${string}-${string}`
    name: string,
    prevImage: string,
    url: string,
    category: string[]
}

export const resources: Resource[] = [
    {
        id: "1d2c9f24-5b2e-4f84-b5c7-48cb8c69985d",
        name: "Lucide React",
        prevImage: "/ResourcesIMG/LucideReact.png",
        url: "https://lucide.dev/",
        category: ["Icons","Frontend","React"]
    },
    {
        id: "9a3f1b9d-44b5-4c8e-b7f9-56e70878c9f4",
        name: "HeroIcons",
        prevImage: "/ResourcesIMG/HeroIcons.png",
        url: "https://heroicons.com/",
        category: ["Icons", "Frontend"]
    },
    {
        id: "9a3f1b9d-44b5-4c8e-b7f9-56e70878c9f4",
        name: "Paletas de colores",
        prevImage: "/ResourcesIMG/TiendaNube.png",
        url: "https://paletadecolores.com.mx/",
        category: ["Colors", "Frontend","UI"]
    }
];