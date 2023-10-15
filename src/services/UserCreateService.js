const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UserCreateService{

    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async create({ name, email, password}) {

        const chackUserExists = this.userRepository.findByEmail(email);

        if (chackUserExists) {
            throw new AppError("Este e-mail já existe");
        }

        const hashedPassword = await hash(pass, 8);

        console.log(hashedPassword);

        const userCreated = await UserRepository.create({ name, email, password: hashedPassword});

        return userCreated;
    }
}

modulo.exports = UserCreateService;