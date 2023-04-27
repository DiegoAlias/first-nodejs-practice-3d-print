import { Router } from "express"
const router = Router()

router.get("/", (req, res) => res.render("index", { title: "Site OnlyFans 3D Printer" }))

router.get("/gil", (req, res) => res.render("gil", { title: "About OnlyFans 3D Printer" }))

router.get("/contact", (req, res) => res.render("contact", { title: "Contact OnlyFans 3D Printer" }))

export default router