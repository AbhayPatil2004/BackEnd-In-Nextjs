import { connectDB } from "@/lib/connectDB";
import User from "@/model/userModel";  // capitalized model name for clarity
import bcrypt from 'bcrypt'

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    
    const { name , email , password } = body ;
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = await User.create({ name , email , password : hashedPassword });

    return Response.json(
      {
        message: "User saved in database",
        user: newUser, // optional: return created user
      },
      {
        status: 201, // 201 = created
      }
    );
  } catch (error) {
    console.error("Error saving user:", error);

    return Response.json(
      {
        message: "Failed to save user",
        error: error.message,
      },
      {
        status: 409, // internal server error
      }
    );
  }
}
