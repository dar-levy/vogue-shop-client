import { Product } from "../models/product.ts";
import {Basket, BasketItem} from "../models/basket.ts";

export const fakeProducts: Product[] = [
    {
        id: 1,
        name: "Flight Heritage",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
        price: 349.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/589f5247-aa82-4cae-b154-4812e15a93c3/M+J+FLT+HRTG+DENIM+AOP+TOP.png",
        brand: "Jordan",
        type: "Men's Denim Top",
        quantityInStock: 100,
    },
    {
        id: 2,
        name: "Brooklyn Fleece",
        description:
            "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
        price: 199.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4a1675fe-847e-4307-babf-a4a307b953a6/M+J+ESS+FLC+PANT.png",
        brand: "Jordan",
        type: "Men's Trousers\n",
        quantityInStock: 100,
    },
    {
        id: 3,
        name: "Sportswear",
        description:
            "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
        price: 499.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13848eea-0863-4c37-b8f8-40c2af3222eb/M+NSW+BREAKING+LND+WR+JKT.png",
        brand: "Nike",
        type: "Men's Breakdancing Jacket",
        quantityInStock: 100,
    },
    {
        id: 4,
        name: "Club Alumni",
        description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
        price: 179.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ced18952-62d2-4b4e-8f15-dfd079a659f2/M+NK+CLUB+ALUMNI+HBR+FT+SHORT.png",
        brand: "Nike",
        type: "Men's French Terry Shorts",
        quantityInStock: 100,
    },
    {
        id: 5,
        name: "Sportswear Essentials",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
        price: 169.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2c7d3ee7-c4d9-46e4-a95c-55a413de467b/W+NSW+ESSNTL+TEE+BF+LBR.png",
        brand: "Nike",
        type: "Women's T-Shirt",
        quantityInStock: 100,
    },
    {
        id: 6,
        name: "One Classic",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
        price: 119.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/869f8d0b-1812-4cfe-b208-d20eb1557183/W+NK+ONE+CLASSIC+DF+STRPY+TANK.png",
        brand: "Nike",
        type: "Women's Dri-FIT Strappy Top",
        quantityInStock: 100,
    },
    {
        id: 7,
        name: "One Classic",
        description:
            "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
        price: 159.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4674b6f8-6de9-4987-85e8-71b8e0286d15/W+NK+ONE+CLASSIC+DF+LS+TOP.png",
        brand: "Nike",
        type: "Women's Long-Sleeve Top",
        quantityInStock: 100,
    },
    {
        id: 8,
        name: "Sportswear",
        description:
            "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
        price: 109.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d9c4b36c-c7dc-4725-8cd8-d07be8bb8fbe/W+NSW+TEE+BBY+SW.png",
        brand: "Nike",
        type: "Women's Cropped T-Shirt",
        quantityInStock: 100,
    },
    {
        id: 9,
        name: "Sportswear Tech Fleece",
        description:
            "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
        price: 359.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61535615-a757-4816-a8da-3fa52c36a04f/B+NSW+TCH+FLC+SSNL+TF%2B+WR+FZ.png",
        brand: "Nike",
        type: "Older Kids' Reflective Hoodie",
        quantityInStock: 100,
    },
    {
        id: 10,
        name: "Sportswear",
        description:
            "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
        price: 99.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d4413de7-86bc-4268-82b3-40cbb1e7d0b1/K+NSW+TEE+BOXY+2+JDI.png",
        brand: "Nike",
        type: "Older Kids' T-Shirt",
        quantityInStock: 100,
    },
    {
        id: 11,
        name: "F.C. Barcelona 2024/25",
        description:
            "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
        price: 319.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7e0daefe-8e9f-49c2-96f9-bf16469c254e/FCB+Y+NK+DF+JSY+SS+STAD+HM.png",
        brand: "Nike",
        type: "Older Kids' Football Shirt",
        quantityInStock: 100,
    },
    {
        id: 12,
        name: "LeBron NXXT Gen AMPD\n",
        description:
            "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
        price: 639.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d9567819-f48d-4499-ab53-ff44d8179a39/ZM+LEBRON+NXXT+GEN+AMPD.png",
        brand: "Nike",
        type: "Basketball Shoes",
        quantityInStock: 100,
    },
    {
        id: 13,
        name: "Los Angeles Lakers 2022/23",
        description:
            "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
        price: 419.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d9aa1b6a-4385-4233-96b6-b03f5c83d1a6/LAL+MNK+DF+SWGMN+JSY+ICN+22.png",
        brand: "Nike",
        type: "Men's Dri-FIT NBA Jersey",
        quantityInStock: 100,
    },
    {
        id: 14,
        name: "Paris Saint-Germain 2024/25",
        description:
            "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
        price: 399.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3edb7009-57af-4070-9ab9-69e18d85670c/PSG+M+NK+DF+JSY+SS+STAD+HM.png",
        brand: "Nike",
        type: "Men's Dri-FIT Football Shirt",
        quantityInStock: 100,
    },
    {
        id: 15,
        name: "Flight MVP",
        description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
        price: 139.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0f4e4362-3ecb-42c9-aad7-4d96d69bb09b/M+J+FLT+MVP+JM+SS+CREW.png",
        brand: "Jordan",
        type: "Men's T-Shirt",
        quantityInStock: 100,
    },
    {
        id: 16,
        name: "Curry Golden State Warriors",
        description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
        price: 549.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f43842ac-67b0-4451-896f-b5b8b70563db/SEL+MNK+DF+JSY+CURRY.png",
        brand: "Nike",
        type: "Men's NBA Swingman Jersey",
        quantityInStock: 100,
    },
    {
        id: 17,
        name: "FFF (Men's Team) 2024/25 Stadium Away",
        description: "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
        price: 399.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52b5dd5e-f3ac-4f69-9c55-70ecb589e6a8/FFF+M+NK+DF+STAD+JSY+SS+AW.png",
        brand: "Nike",
        type: "Men's Dri-FIT Football Shirt",
        quantityInStock: 100,
    },
    {
        id: 18,
        name: "Stephen Curry Golden State Warriors 2023/24 City Edition",
        description:
            "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
        price: 739.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9b37772-eb3b-48cc-8319-939cd61f92fe/GSW+MNK+DFADV+ATH+JSY+CE+23.png",
        brand: "Nike",
        type: "Men's Dri-FIT Authentic Jersey",
        quantityInStock: 100,
    },
];

export let fakeBasket: Basket = {
    id: 313418857,
    buyerId: "Dar",
    items: [
    {
        productId: 1,
        name: "Flight Heritage",
        price: 349.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/589f5247-aa82-4cae-b154-4812e15a93c3/M+J+FLT+HRTG+DENIM+AOP+TOP.png",
        brand: "Jordan",
        type: "Men's Denim Top",
        quantity: 1,
    },
    {
        productId: 2,
        name: "Brooklyn Fleece",
        price: 199.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4a1675fe-847e-4307-babf-a4a307b953a6/M+J+ESS+FLC+PANT.png",
        brand: "Jordan",
        type: "Men's Trousers\n",
        quantity: 1,
    },
]}
