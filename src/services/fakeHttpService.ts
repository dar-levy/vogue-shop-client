import { Product } from "../models/product.ts";
import { Basket } from "../models/basket.ts";
import {NewArrival} from "../models/new-arrival.ts";
import {Review} from "../models/review.ts";
import {ActivityHistory} from "../models/activity-history.ts";

export const fakeProducts: Product[] = [
    {
        id: "1",
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
        id: "2",
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
        id: "3",
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
        id: "4",
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
        id: "5",
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
        id: "6",
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
        id: "7",
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
        id: "8",
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
        id: "9",
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
        id: "10",
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
        id: "11",
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
        id: "12",
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
        id: "13",
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
        id: "14",
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
        id: "15",
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
        id: "16",
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
        id: "17",
        name: "FFF (Men's Team) 2024/25 Stadium Away",
        description: "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
        price: 399.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52b5dd5e-f3ac-4f69-9c55-70ecb589e6a8/FFF+M+NK+DF+STAD+JSY+SS+AW.png",
        brand: "Nike",
        type: "Men's Dri-FIT Football Shirt",
        quantityInStock: 100,
    },
    {
        id: "18",
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

export const fakeBasket: Basket = {
    id: 33333333,
    buyerId: "Dar",
    items: [
    {
        productId: "1",
        name: "Flight Heritage",
        price: 349.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/589f5247-aa82-4cae-b154-4812e15a93c3/M+J+FLT+HRTG+DENIM+AOP+TOP.png",
        brand: "Jordan",
        type: "Men's Denim Top",
        quantity: 1,
    },
    {
        productId: "2",
        name: "Brooklyn Fleece",
        price: 199.90,
        pictureUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4a1675fe-847e-4307-babf-a4a307b953a6/M+J+ESS+FLC+PANT.png",
        brand: "Jordan",
        type: "Men's Trousers\n",
        quantity: 1,
    },
]}

export const fakeReviews: Review[] = [
    { id: 1, description: 'Great product! Loved the experience.', author: 'Alice', rating: 4.5 },
    { id: 2, description: 'The product was decent but could be improved.', author: 'Bob', rating: 3.5 },
    { id: 3, description: 'Not satisfied. Expected better quality.', author: 'Charlie', rating: 2.5 },
    { id: 4, description: 'Amazing! Will buy again.', author: 'David', rating: 5 },
    { id: 5, description: 'Pretty good, but room for improvement.', author: 'Eve', rating: 4 },
    { id: 6, description: 'Not what I expected.', author: 'Frank', rating: 2 },
    { id: 7, description: 'Worth every penny!', author: 'Grace', rating: 5 },
    { id: 8, description: 'Mediocre, could be better.', author: 'Hank', rating: 3 },
    { id: 9, description: 'Really loved it, would recommend!', author: 'Ivy', rating: 4.5 },
    { id: 10, description: 'It was okay, but I’ve seen better.', author: 'John', rating: 3 },
];

export const fakeNewArrivals: NewArrival[] = [
    { id: 1, name: 'Real Madrid Jersey 2025 ', description: 'Description 1', pictureUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bba09c80cdf3416c9957d5ea0dee0738_9366/Real_Madrid_24-25_Home_Jersey_White_IU5011_HM1.jpg", brand: 'Adidas', type: 'Mens Sports', arrivalDate: new Date('2025-02-01') },
    { id: 2, name: 'Jamaica LFSTLR', description: 'Description 2', pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3512c7b285e942568a2f31d62b361b8c_9366/Jamaica_LFSTLR_Jersey_Black_IT2464_HM1.jpg', brand: 'Adidas', type: 'Mens Originals', arrivalDate: new Date('2025-01-20') },
    { id: 3, name: 'Q3 Atlanta Hooded Sweatshirt', description: 'Description 3', pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c42f7ac3830401f9b4333f6a575e078_9366/Q3_Atlanta_Hooded_Sweatshirt_White_IX6779_21_model.jpg', brand: 'Originals', type: 'Mens Originals', arrivalDate: new Date('2025-01-17') },
    { id: 4, name: 'Adicolor', description: 'Description 4', pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/48eb43fe0d694740af6a485ef1df6fbf_9366/Adicolor_Neuclassics_Shorts_White_JF9148_21_model.jpg', brand: 'Originals', type: 'Neuclassics Shorts', arrivalDate: new Date('2025-01-04') },
    { id: 5, name: 'Manchester United Originals Tee', description: 'Description 5', pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8cbebeebb60d4861b108822dd92134e5_9366/Manchester_United_Originals_Tee_Black_IS6519_HM1.jpg', brand: 'Brand 5', type: 'Type 5', arrivalDate: new Date('2025-03-05') },
    { id: 6, name: 'Manchester United Jersey 2025', description: 'Description 6', pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ede67cd9cbc24a718d0c74786f764ff6_9366/Manchester_United_24-25_Long_Sleeve_Home_Authentic_Jersey_Red_IT1988_HM1.jpg', brand: 'Brand 6', type: 'Type 6', arrivalDate: new Date('2025-02-06') },
    { id: 7, name: 'Real Madrid Long-Sleeve 2025', description: 'Description 7', pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52caf7ec2c47450ba7187a443cfccf29_9366/Real_Madrid_24-25_Long_Sleeve_Home_Authentic_Jersey_White_IT5204_HM1.jpg', brand: 'Brand 7', type: 'Type 7', arrivalDate: new Date('2025-01-07') },
    { id: 8, name: 'RM Match Jersey', description: 'Description 8', pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b571e4aab6e45d48327dde952365d87_9366/Real_Madrid_Pre-Match_Jersey_White_IT5101_21_model.jpg', brand: 'Brand 8', type: 'Type 8', arrivalDate: new Date('2025-01-08') },
    { id: 9, name: 'REAL A JSY Y', description: 'Description 9', pictureUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff03c974056a444eac115e22f5b9b036_9366/REAL_A_JSY_Y_Orange_KB3834_01_laydown.jpg', brand: 'Brand 9', type: 'Type 9', arrivalDate: new Date('2025-01-09') },
];

export const fakeActivityHistory: ActivityHistory[] = [
        { id: 1, name: 'Checkout', type: 'Order', timestamp: new Date('2024-08-01'), basket: { id: 1, buyerId: "1", items: [] } },
        { id: 2, name: 'Added to Cart', type: 'Cart', timestamp: new Date('2024-08-02'), basket: { id: 2, buyerId: "4", items: [] } },
        { id: 3, name: 'Removed from Cart', type: 'Cart', timestamp: new Date('2024-08-03'), basket: { id: 3, buyerId: "14", items: [] } },
        { id: 4, name: 'Checkout', type: 'Order', timestamp: new Date('2024-08-04'), basket: { id: 4, buyerId: "24", items: [] } },
        { id: 5, name: 'Added to Wishlist', type: 'Wishlist', timestamp: new Date('2024-08-05'), basket: { id: 5, buyerId: "52", items: [] } },
        { id: 6, name: 'Viewed Product', type: 'View', timestamp: new Date('2024-08-06'), basket: { id: 6, buyerId: "78", items: [] } },
        { id: 7, name: 'Checkout', type: 'Order', timestamp: new Date('2024-08-07'), basket: { id: 7, buyerId: "124", items: [] } },
        { id: 8, name: 'Added to Cart', type: 'Cart', timestamp: new Date('2024-08-08'), basket: { id: 8, buyerId: "432", items: [] } },
        { id: 9, name: 'Viewed Product', type: 'View', timestamp: new Date('2024-08-09'), basket: { id: 9, buyerId: "51", items: [] } },
        { id: 10, name: 'Checkout', type: 'Order', timestamp: new Date('2024-08-10'), basket: { id: 10, buyerId: "90", items: [] } },
];
