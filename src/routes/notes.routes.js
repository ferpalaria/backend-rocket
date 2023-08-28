const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

function myMiddleware(req, resp, next) {
    next();
}

const notesController = new NotesController();

notesRoutes.use(myMiddleware); // Para usar em todas as requisições de /user

notesRoutes.get("/", myMiddleware, notesController.index);
notesRoutes.post("/:user_id", myMiddleware, notesController.create);
notesRoutes.get("/:id", myMiddleware, notesController.show);
notesRoutes.delete("/:id", myMiddleware, notesController.delete);

module.exports = notesRoutes;