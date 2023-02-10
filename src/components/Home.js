import Hina from "./img/logo/Hina.png";

export default function Home() {
  return (
    <div className="">
      <div className="relative px-5 bg-gray-700 py-56 grid place-items-center text-center">
        <img src={Hina} className="opacity-10 absolute bottom-0 xl:right-32 2xl:right-48" alt="hina" />
        <h1 className="text-[58px] font-bold text-[#ff2c2c]">DETERMINIX</h1>
        <h1 className="text-white text-3xl pt-3">A team to study and work in the field of programmers. </h1>
        <a className="bg-slate-100 px-5 py-3 text-2xl hover:bg-slate-400 mt-10 relative" href="https://wa.me/+62895337305533" target={"_blank"} rel="noreferrer">
          Contact Us
        </a>
      </div>
      <div className="px grid lg:grid-cols-3 gap-20 text-xl my-28 items-start">
        <span className="text-start">
          <h1 className="font-bold text-2xl pb-3">Web Developer</h1>
          Is a person who specializes in the development of World Wide Web applications using a combination of languages such as HTML, CSS, JavaScript, and others. They use these languages to create websites, web applications, and web
          services.
          <h1 className="pt-3">Determinix currently focuses on web developers.</h1>
        </span>
        <span className="text-start">
          <h1 className="font-bold text-2xl pb-3">Mobile Developer</h1>
          Is a software developer who specializes in creating mobile applications for smartphones and tablets. Mobile developers typically use programming languages such as Swift for iOS, Kotlin for Android.{" "}
          <h1 className="pt-3">(Coming Soon)</h1>
        </span>
        <span className="text-start">
          <h1 className="font-bold text-2xl pb-3">Game Developer</h1>
          Is a person or a team of people who create video games. They can be involved in various aspects of game development, from design and programming to art and sound. <h1 className="pt-3">(Coming Soon)</h1>
        </span>
      </div>
    </div>
  );
}
