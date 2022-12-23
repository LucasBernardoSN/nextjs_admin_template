export default function Logo() {
  return (
    <div
      className={`
            flex justify-center items-center 
            h-14 w-14 bg-white rounded-full
        `}
    >
      <img
        src="logo-ero-soft.png"
        alt="logo"
        className={`transform scale-75 rounded-2xl`}
      />
    </div>
  );
}
