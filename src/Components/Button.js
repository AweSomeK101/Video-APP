function Button({Icon, id, active, handleActive}) {
  return (
    <li
      className={`py-3 px-4 ${
        active === id ? "bg-primary shadow-xl" : "bg-secondary"
      } rounded-2xl mx-2 text-white flex justify-center items-center transition cursor-pointer`}
      id={id}
      onClick={(e) => handleActive(e.target.id)}
    >
      <Icon
        className={`pointer-events-none transition text-3xl ${
          active === id ? "text-white" : "text-primary"
        } `}
      />
      <span
        className={`${
          active === id ? "" : "hidden"
        } transition pointer-events-none font-semibold pl-1 leading-none capitalize`}
      >
        {id}
      </span>
    </li>
  );
}

export default Button;
