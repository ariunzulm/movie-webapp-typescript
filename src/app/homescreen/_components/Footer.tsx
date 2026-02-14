export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full flex justify-between py-10 px-10 text-sm text-white">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="border border-gray-200 rounded-xl p-2 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-2xl">PineBy</span>
        </div>
        <p className="font-normal leading-5">
          © 2024 Movie Z. All Rights Reserved.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <img src="/email.svg" alt="email icon" />
          <div>
            <p>Email:</p>
            <p>support@PineBy.com</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <img src="/phone.svg" alt="Phone icon" />
          <div>
            <p>Phone:</p>
            <p>+976 (11) 123-4567</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <p>Follow us</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>Youtube</p>
      </div>
    </footer>
  );
}
