export default function FooterSection() {
  return (
    <div className="bg-indigo-700 w-full flex flex-col gap-7 py-10 px-5 text-sm text-white font-normal xl:flex-row lg:gap-20 xl:gap-30">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <img src="/film.svg" alt="Movie Z logo" className="w-5 h-5" />
          <p className="font-semibold italic text-base leading-normal">
            Movie Z
          </p>
        </div>
        <p className="font-normal leading-5">
          © 2024 Movie Z. All Rights Reserved.
        </p>
      </div>
      <div className="flex justify-between gap-3 lg:gap-24 ">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <img src="/email.svg" alt="email icon" />
            <div>
              <p>Email:</p>
              <p>support@movieZ.com</p>
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
        <div className="flex flex-col gap-3 w-28.25">
          <p>Follow us</p>
          <div className="flex flex-col gap-3 lg:flex-row justify-between">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
}
