export class Product {
    name: string; 
    size: string; 
    unit: string; 
    quanity: string; 
    upc: number; 
    perishable: boolean; 
    brand: string; 
    product: ProductCategory;

   
}

 export enum ProductCategory {
        ALCOHOL,
        FOOD_AND_DRINK, //EXCLUDING ALCOHOL AND BABY 
        LAUNDRY,
        CLEANING_SUPPLIES,
        PAPER_PRODUCTS,
        OFFICE_SUPPLIES,
        HYGIENE_AND_GROOMING,
        BABY_CARE, //INCLUDES FOOD, DIAPERS, AND WIPES 
        HEALTH_AND_WELLNESS
    }