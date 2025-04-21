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
    },
    {
        id: "a1b2c3d4-e5f6-7890-abcd-1234567890aa",
        name:"Excalidraw",
        prevImage:"/ResourcesIMG/Excalidraw.png",
        url:"https://excalidraw.com/",
        category:["Desing,UI"]
    },
        {
        id: "fc1d7c2a-1e4a-4f22-a63c-0f65412a1b01",
        name: "Bento Grid",
        prevImage: "/ResourcesIMG/bentogrid.png",
        url: "https://bentogrids.com/",
        category: ["Layout", "Frontend", "UI"]
    },
    {
        id: "8a927b43-5cd4-4b3a-8616-ea5cfa809c55",
        name: "UI colors",
        prevImage: "/ResourcesIMG/uicolors.png",
        url: "https://uicolors.app/",
        category: ["Colors", "Frontend", "UI"]
    },
    {
        id: "3bcf0df6-9a2a-4c89-a909-b8b91c0f28f6",
        name: "StorySet",
        prevImage: "/ResourcesIMG/storyset.png",
        url: "https://storyset.com/",
        category: ["Illustrations", "Frontend", "UI"]
    }
];