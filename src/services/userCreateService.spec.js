const UserCreateService = require('./UserCreateService');
const UserRepositoryInmemory = require("../repositories/UserRepositoryInMemory");

it("user shold be created", () => {
    const user = {
        name: "User Test",
        eail: "user@test.com",
        password: "123"
    };

    const userRepositoryInMemory = new UserRepositoryInmemory();
    const userCreateService = new UserCreateService(userRepositoryInMemory);
    const userCreated = await userCreateService.execute(user);

    expect(userCreated).toHaveProperty("id");
});