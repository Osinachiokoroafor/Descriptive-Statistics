// Osinachi's movieStore contains movie title,movie types and available movies which the customers rent

class movieStore {
    constructor(title, genre, availableCopies) {
      this.title = title;
      this.collection = genre;
      this.availableCopies = availableCopies;
    }
    // rentMovie  and return are method in movieStore class, we access it with this.
    
  

    rentMovie() {
      if (this.availableCopies > 0) {
        this.availableCopies--;
        return ` you have successfuly rented ${this.title} `;
      } else {
        return `Sorry, ${this.title} is currently out of stock`;
      }
    }
  
    returnMovie() {
      this.availableCopies++;
      return `Thank you for returning ${this.title}`;
    }
  }
  // the ppeople who rent these movies  inherit from the  movieStore
  
     class customer {
     constructor(name) {
      this.name = name;
      this.rentedMovies = [];
    }
  
    rentMovies(message) {
      const available = message.rentMovie();
  
      if (!available.includes("out of stock")) {
        this.rentedMovies.push(message.title);
      }
      return available;
    }
  
    returnMovie(movie) {
      const index = this.rentedMovies.indexOf(movie.title);
      if (index !== -1) {
        this.rentedMovies.splice(index, 1);
        return movie.returnMovie();
      } else {
        return "You can't return a movie you haven't rented.";
      }
    }
  
    listRentedMovies() {
      if (this.rentedMovies.length > 0) {
        return `Rented movies by ${this.name}: ${this.rentedMovies.join(", ")}`;
      } else {
        `${this.name} hasn't rented any movies yet.`;
      }
    }
  }
  
  //The store of new movie
  const movie1 = new movieStore("Merlin", "fantasy", 2); 
  const movie2 = new movieStore("Love Hurts", "romance", 2); 
  

 // Create customer instances with the desired names
  const customer1 = new customer("Osinachi"); // 
  const customer2 = new customer("Shino"); // 

  
  
  
  console.log(customer1.rentMovies(movie1))//you rented Merlin successfully
  console.log(customer1.rentMovies(movie2));// you rented Love hurts  successfully
  console.log(customer2.rentMovies(movie1));//movie rented by shino
  
  console.log(customer1.listRentedMovies(movie1));//Movie rented by Osinachi
  
  console.log(customer1.returnMovie(movie1));//Thank you for returning Love hurts 
  console.log(customer2.returnMovie(movie1));//Thank you for returning Love hurts
  
  console.log(customer1.listRentedMovies());//Movie rented by Shino.