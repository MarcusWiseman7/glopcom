export type ContactInfo = {
    title: string;
    name: string;
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        country: string;
        zipcode: string;
    };
    vat: string;
    social: {
        name: string;
        url: string;
    }[];
};
