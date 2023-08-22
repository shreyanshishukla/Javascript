const a =10;//implicit
const b :string="test";//explicit
const c:string|number="okay";
enum Month{
    Jan,Feb,April,March
}
const m:Month=Month.Feb;

type User={
    name:string,
    age:number,
    email?:string//optional
};
const u:User={name:"shreyanshi",age:23,email :"sss@gmail.com"};
const p:User={name:"shubhi",age:23,};



//intersection
type PersonalDetails={
    name:string,
    age?:number,
   dob?:Date;
};
type EmployeeDetails={
    id:number
};
type ContactDetails={
    phnno?:number,
    email:string
};
type Customer=PersonalDetails&ContactDetails;
type Employee=PersonalDetails&ContactDetails&EmployeeDetails;
const cus:Customer={name:"jai",email:"sddd@sds.com"}
const e:Employee={name:"jai",email:"sddd@sds.com",id:2434}



//type-casting
const t=document.querySelector("body") as HTMLBodyElement;
console.log(t.getAttributeNames());
const t2=<HTMLInputElement> document.querySelector("input");
console.log(t2.value);


