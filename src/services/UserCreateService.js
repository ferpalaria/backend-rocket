const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UserCreateService{

    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute({ name, email, password}) {

        const checkUserExists = this.userRepository.findByEmail(email);

        if (checkUserExists) {
            throw new AppError("Este e-mail já existe");
        }

        const hashedPassword = await hash(password, 8);

        console.log(hashedPassword);

        const userCreated = await UserRepository.create({ name, email, password: hashedPassword});

        return userCreated;
    }
}

module.exports = UserCreateService;