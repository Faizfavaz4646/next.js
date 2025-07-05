import Image from "next/image";
import Link from "next/link";


type Meal = {
  id: number;
  name: string;
  slug: string;
  image: string;
  category: string;
  
};
export default async function MealsPage() {
  const res = await fetch("http://localhost:5500/meals", {
    next: { revalidate: 60 },
  });
  const meals:Meal[] = await res.json();

  return (
    <main className="bg-black">
      <h1 className="bg-black p-6 text-center text-white text-2xl font-bold">Meals Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 text-center">
        {meals.map((m) => (
          <Link key={m.id} href={`/meals/${m.slug}`}>
            <div className="border border-gray-100 shadow-xl rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center h-auto w-auto rounded-xl">
                <Image className="object-contain w-full h-60 mt-4" 
                src={m.image} 
                alt={m.name} 
                width={400}
                height={240}
                />

              </div>
              <h2 className="text-xl font-semibold text-red-500">{m.name}</h2>
              <h2 className="text-l font-semibold text-white">
                Category: <span className="text-blue-500">{m.category}</span>
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
