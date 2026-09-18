   export function parseAge(input) {
     const age = Number(input);
     if (Number.isNaN(age)) throw new Error("Invalid age");
     return age;
   }

   export function formatName(first, last) {
     return first.trim() + " " + last.trim();
   }

   export function getInitials(name) {
     const parts = name.split(" ");
     return parts[0][0] + parts[1][0];
   }

   export function slugify(title) {
     return title.toLowerCase().replace(" ", "-");
   }

//this is for testing purposes 

//again for testing 


//testing part 3 
