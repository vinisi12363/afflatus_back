export type User = {
    username: string
    password: string
    user_admin:boolean
  }
 
  export type Customer = {
    name:string, 
    cpf:string, 
    address:string, 
    phone:string, 
    instagram:string , 
    birthday:Date
  }

  export type Child = {
    name:string,
    birthday:Date,
  }


  export type SpecialDate = {
    description:string, 
    specialDate:Date,
  }