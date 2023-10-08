import { Product } from "@/types/Product";

export const products: Product[] = [
    {
        id: 1,
        title: 'Tijolo',
        sellerId: 1,
        seller: 'Casa e construção',
        shortDescription: 'Tijolo para construção de casas',
        imgUrls: [
            '/products/tijolo.png',
            '/products/tijolos2.png',
        ],
        imgAlt: 'tijolo'
    },
    {
        id: 2,
        title: 'Disco Serra',
        sellerId: 1,
        seller: 'Casa e construção',
        shortDescription: 'Disco de serra para cortar madeira 200m',
        imgUrls: [
            '/products/disco-serra.png',
        ],
        imgAlt: 'disco de serra para madeira'
    },
    {
        id: 3,
        title: 'Pastilha azul',
        sellerId: 2,
        seller: 'Casa das pastilhas',
        shortDescription: 'Pastilha azul para parede de cozinha ou banheiro',
        imgUrls: [
            '/products/pastilha-azul.png',
            '/products/pastilha-azul-inclinado.png',
        ],
        imgAlt: 'Pastilha azul para parede'
    },
    {
        id: 4,
        title: 'Pastilha cinza',
        sellerId: 2,
        seller: 'Casa das pastilhas',
        shortDescription: 'Pastilha cinza para parede de cozinha ou banheiro',
        imgUrls: [
            '/products/pastilha-cinza.png',
            '/products/pastilha-cinza-inclinado.png',
        ],
        imgAlt: 'Pastilha azul para parede'
    },
]