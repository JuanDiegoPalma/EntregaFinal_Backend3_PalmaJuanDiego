class UsersDaoMemory {
    constructor(){
        this.users = [
            {
                _id: "67d337c4c9139a3d9434209",
                first_name: "pablo",
                last_name: "cano",
                email: "pablo@gmail.com",
                password: "$2b$10$s6whJ81cWdIz6sW98GPVG.C3S./vn7RJAYy9tVlSKsUL4pJF7Y/oO",
                role: "user",
            
              },
              {
                _id: "67eaf34d5f228971b2e072e4",
                first_name: "valentina",
                last_name: "Uñates",
                email: "vale@gmail.com",
                password: "$2b$10$.vmiQ0pcdTCZOmipDqwOHeMEUkOKWXFwrEiY.wra7VyqEWYmb3K66",
                role: "user",
              
              },
            {
                _id: "67bdd01bc541f60988ff0631",
                first_name: "juan",
                last_name: "palma",
                email: "jd@gmail.com",
                password: "$2b$10$7oxvRKumThPL7XSBxZmzMebj2LJgN4Ms0axZbBYtCtZo8CuBDvgwa",
                role: "user",
            
              },
              {
                _id: "67ebed20eb70de64eb7c1edf",
                first_name: "alejandra",
                last_name: "sampaolesi",
                email: "ale@gmail.com",
                password: "$2b$10$aGzvHwhM.DRqm3Tey7IcNemrm6YP/PCyMUC3IAYUatYAfyQPyNaei",
                role: "user",
              
              },
            {
                _id: "67ebf8f57bb28d65d9b351a5",
                first_name: "diego",
                last_name: "palma",
                email: "diegop@gmail.com",
                password: "$2b$10$SMgVtjhodV3ilG8qSOFA1elh12KaGcsemPEErR.1ovpbib20FFhha",
                role: "admin",
            
              }
        ]
    }

    get =  () => this.users
    create = async newUser => this.users.push(newUser)
}

export default UsersDaoMemory