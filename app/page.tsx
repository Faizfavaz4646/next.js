import Imageslideshow from "@/components/images/Imageslideshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-black text-center p-6">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-violet-500">
          Next Level Food For Next Level Foodies
        </h1>
        <p className="text-white text-xl">Taste &amp; share food from all over the world.</p>
        <p className="text-white text-lg mt-2">Here&apos;s what we offer</p>

        <div className="flex justify-center gap-4 mt-5 text-xl">
          <p className="text-black border rounded-lg bg-clip- bg-gradient-to-r from-orange-500 to-orange-200 font-mono cursor-pointer px-4 py-2 hover:scale-105">
            <Link href="/meals">Explore Meals</Link>
          </p>
          <p className="text-black border rounded-lg bg-clip- bg-gradient-to-r from-orange-500 to-orange-200 font-mono cursor-pointer px-4 py-2 hover:scale-105">
            <Link href="/meals/share">Share Meals</Link>
          </p>
          <p className="text-black border rounded-lg bg-clip- bg-gradient-to-r from-orange-500 to-orange-200 font-mono cursor-pointer px-4 py-2 hover:scale-105">
            <Link href="/community">Join the Community</Link>
          </p>
        </div>
      </header>

      <div className="bg-black">
        <Imageslideshow />
      </div>

      <main className="bg-black text-white p-6 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-center">How It Works</h2>
          <p className="text-white leading-relaxed">
            Our Meals Food Recipe website is designed to make your cooking experience simple,
            enjoyable, and stress-free. You can easily browse or search for a wide variety of recipes—
            from quick snacks to full-course meals—using filters based on cuisine, dietary needs,
            ingredients, or cooking time. Each recipe includes a clear list of ingredients and step-by-step
            instructions, making it easy for both beginners and experienced cooks to follow. You can save
            your favorite recipes to your personal collection for easy access later and even create organized
            shopping lists with a single click. Plus, you can rate and review dishes you&apos;ve tried, share your
            cooking experiences, or upload your own versions to inspire others. Cooking has never been this
            convenient and fun!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-center">Why Next Level Food</h2>
          <p className="text-white leading-relaxed">
            Next Level Food was created to inspire and support anyone who loves food, whether you&apos;re a beginner
            in the kitchen or an experienced home cook. With so many recipes available online, it can be
            overwhelming to find ones that truly fit your taste, time, and ingredients. Our platform simplifies
            that process by offering well-organized, easy-to-follow recipes tailored to different needs—be it quick
            weekday meals, healthy options, or traditional favorites. We focus on clarity, convenience, and community,
            allowing users to save favorites, generate shopping lists, and share their cooking experiences. It&apos;s not
            just a recipe site—it&apos;s your personal cooking companion designed to make every meal enjoyable and stress-free.
          </p>
        </section>
      </main>
    </>
  );
}
