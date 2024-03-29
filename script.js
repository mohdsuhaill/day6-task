// Task 1 

// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio,
//  and a String representing the rating as its arguments, and sets the respective class properties to these values.

/*class movie1 {
    constructor(title,studio,ratings){
        this.title=title;
        this.studio=studio;
        this.ratings=ratings;
    }
}

const details1 = new movie1("LEO","7 Screen studios","8.0")
console.log(details1.title,details1.studio,details1.ratings);*/

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
/*class movie2 {
    constructor(title,studio,ratings="PG"){
        this.title=title;
        this.studio=studio;
        this.ratings=ratings;
    }
}

const details2 = new movie2("vikram"," Kamal Haasan, R Mahendran",)
console.log(details2.title,details2.studio,details2.ratings);*/


// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only 
// those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
/*class movie {
    constructor(title,studio,ratings="PG"){
        this.title=title;
        this.studio=studio;
        this.ratings=ratings;     
    }
     static getPG(movies){
        return movies.filter(movie=>movie.ratings==="PG")
     }
}
const movies =[
    new movie("Mankatha","Sun Pictures"),
    new movie("Billa","Ayngaran International"),
    new movie("Sivaji: The Boss","AVM Productions","PG10")
];
console.log(movies.filter(movie=>movie.ratings==="PG"));*/


// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

/*class movie3 {
    constructor(title,studio,ratings="PG"){
        this.title=title;
        this.studio=studio;
        this.ratings=ratings;
    }
}

const details3 = new movie3("Casino Royale","Eon Production","PG13")
console.log(details3.title,details3.studio,details3.ratings);*/

// Task 2 
// circle class
/*class circle {
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get Radius(){
      return this.radius
    }
    set Radius(a){
      this.radius = a;
    }
    get Color(){
        return this.color;
    } 
    set Color(c){
        this.color = c;
    } 
    get toString (){
        return '"circule[radius=${this.radius},color = ${this.color}]"';
    }
    get area (){
        return Math.PI*Math.pow(this.radius,2);
    }
    get circumference (){
        return 2*Math.PI*this.radius;
    }
  }
  let values =  new circle(1.0,"red")
  console.log(values.Radius);
  console.log(values.Color);
  console.log(values.toString);
  console.log(values.area);
  console.log(values.circumference);
  */ 

// Task 3
// Write a “person” class to hold all the details.

/*class person {
    constructor(name,age ,gender,martialstatus,contact,Email){
    this.name =name;
    this.age=age;
    this.gender=gender;
    this.martialstatus=martialstatus;
    this.contact=contact;
    this.Email=Email;
    }
}
const obj = new person("Mohammed suhail I","22","Male","single","7339313293","suhailabdmohammed@gmail.com");
console.log(obj.name,obj.age,obj.martialstatus,obj.gender,obj.contact,obj.Email);*/


// Task 4
// write a class to calculate the Uber price.

// write a class to calculate the uber price .

class uberprice {
    constructor(kilometer,price){
        this.kilometer=kilometer;
        this.price=price;
    }
    set Kilometer(n){
        this.kilometer = n;
    }
    get cost (){
        return this.price * this.kilometer;
    }
} 
const rideprice = new uberprice(14,30)
console.log(rideprice.kilometer,rideprice.price);
console.log(rideprice.cost);

