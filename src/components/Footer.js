import DXlogo2 from "./img/logo/DX-logo-2.png";

export default function Footer() {
  return (
    <footer className="flex justify-between bg-yellow-400 text-white pt-24 lg:text-center">
      <div>
        <img src={DXlogo2} alt="dxlogo" width="50" className="flex justify-between" />
        <h1 className="text-xl text-center">copyright 2023 create by determinix agent</h1>
      </div>
    </footer>
  );
}
