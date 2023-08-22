class demo{
    private readonly name:string="rama";
    constructor(){
        console.log("constructor");

    }
    static count:number=11;
    public  a(b:number) :string{
        return this.name;
        
    }
} 
const d=new demo();
d.a(2);
console.log(demo.count)