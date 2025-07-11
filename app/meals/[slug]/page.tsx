// app/meals/[slug]/page.tsx
import Image from "next/image";

import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}
type Meal={
  id:number;
  name:string;
  slug: string;
  description: string;
  ingredients: string;
  image:string;
}

export default async function MealDetail({ params }: Props) {
  const res = await fetch(`http://localhost:5500/meals?slug=${params.slug}`, {
    cache: "no-store",
  });

  const data:Meal[] = await res.json();
  const meal = data[0];

  if (!meal) {
    notFound();
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Image
      
        src={meal.image}
        alt={meal.name}
        width={600}
        height={400}
        className="w-full h-auto rounded-lg shadow mb-6"
      />
      <h1 className="text-2xl font-bold">{meal.name}</h1>
      <p className="mt-2 text-gray-700">{meal.description}</p>
      <h2 className="mt-4 font-semibold">Ingredients:</h2>
      <p>{meal.ingredients}</p>
    </div>
  );
}
