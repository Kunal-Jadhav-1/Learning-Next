import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

type mockUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function Mock_Users() {

  const authObj = await auth();
  const userObj = await currentUser();

  console.log({authObj,userObj});

  //  await new Promise((resolve) => {setTimeout(resolve,2000)});
    const response = await fetch(
        "https://674a3a09868020296633fa9f.mockapi.io/MockAPI"
      );
      const users = await response.json();

      async function addUser(formData:FormData) {
        "use server"
        const name = formData.get("name");
        const res = await fetch("https://674a3a09868020296633fa9f.mockapi.io/MockAPI" , {
            method :"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name}),
        });
        const newUser = await res.json();
        revalidatePath("/mock-users");
        console.log(newUser);
        
      }

      return (
        <div className="py-10">
            <form className="mb-4" action={addUser}>
                <input type="text" name="name" required className="border px-2 py-1 mr-2 text-black mx-2 rounded-md" />
                <button type="submit" className="bg-white hover:bg-lime-300 text-black rounded-lg px-2 py-1">Add User</button>
            </form>
            <div className="grid grid-cols-2 gap-4 py-10">
          {users.map((user:mockUser) => (
            <p
              key={user.id}
              className="p-4 bg-white shadow-md rounded-lg text-gray-700"
            >
             {user.id}. {user.name} 
            </p>
          ))}
        </div>
        </div>
      );
}