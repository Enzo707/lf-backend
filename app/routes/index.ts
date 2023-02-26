import { Router } from "express";
const router = Router();

// para todos los pokemons
export const indexRouter = router.get("/", async (req, resp) => {
  resp.json({"name": "LF"});
});

// export default router;