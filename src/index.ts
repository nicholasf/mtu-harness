import { search, Address } from 'mtu-coding-exam';

let API_KEY :string = process.env.API_KEY!

let addresses: Address[] = await search(API_KEY, '422 Collins St')

addresses.forEach((address: Address) => {
    console.log(`- ${address.freeformAddress}`);  
})


