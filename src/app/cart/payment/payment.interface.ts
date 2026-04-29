 export interface UserShippingAddress {
    details : string , 
    phone: string , 
    city: string , 
    postalCode : string 
}

export interface ShippingAddressType {
     shippingAddress: UserShippingAddress
}