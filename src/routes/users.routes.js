const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const ensureAuthenricated = require("../middlewares/ensureAuthenricated");

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenricated, usersController.update);

module.exports = usersRoutes;