import DXlogo1 from "./img/logo/DX-logo-1.png";

export default function Footer() {
  return (
    <footer className="justify-between bg-slate-900 text-white py-24">
      <div className="grid grid-cols-4 gap-1 mr-32">
        <a>
          <img src={DXlogo1} className="w-16 ml-20" />
        </a>
        <h1 className="text-xs p-1">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.</h1>
        <h1 className="text-xs p-1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</h1>
        <h1 className="text-xs p-1">is that it has a more-or-less normal distribution of letters, as opposed to using</h1>
      </div>

      <div className="mx-auto my-10 w-[90%] h-[0.5px] bg-white"></div>

      <div className="my-10 mx-auto">
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={20} className="mx-40">
            <path
              d="M40.254 127.637c48.305 0 74.719-48.957 74.719-91.403 0-1.39 0-2.777-.075-4.156 5.141-4.547 9.579-10.18 13.102-16.633-4.79 2.602-9.871 4.305-15.078 5.063 5.48-4.02 9.582-10.336 11.539-17.774-5.156 3.743-10.797 6.38-16.68 7.801-8.136-10.586-21.07-13.18-31.547-6.32-10.472 6.86-15.882 21.46-13.199 35.617C41.922 38.539 22.246 26.336 8.915 6.27 1.933 20.94 5.487 39.723 17.022 49.16c-4.148-.172-8.207-1.555-11.832-4.031v.41c0 15.273 8.786 28.438 21.02 31.492a21.596 21.596 0 01-11.863.543c3.437 13.094 13.297 22.07 24.535 22.328-9.305 8.918-20.793 13.75-32.617 13.72-2.094 0-4.188-.15-6.266-.446 12.008 9.433 25.98 14.441 40.254 14.422"
              fill="#1da1f2"
            />
          </svg>
        </a>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={20} className="mx-40">
            <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53" />
            <path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
