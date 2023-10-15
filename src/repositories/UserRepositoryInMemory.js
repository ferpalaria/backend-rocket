class UserrepositoryInMemory{
    user = [];

    async create({ email, name, password }){
        const use = {
            id: Math.floor(Math.random() * 1000) + 1,
            email,
            name, 
            password
        };

        this.users.push(user);

        return this.user;
    }

    async findByEmail(email){
        return this.users.find(user => user.email === email);
    }
}