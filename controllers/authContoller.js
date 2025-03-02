import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";

export const register = async(req, res) => {
  const {username, email, password } = req.body;

  // Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: password,
    },
  })

  console.log(newUser);
  
};

export const login = (req, res) => {
  res.send("getUsers");
};

export const logout = (req, res) => {
  res.send("getUsers");
};
