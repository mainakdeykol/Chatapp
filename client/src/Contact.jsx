import Avatar from "./Avatar.jsx";

export default function Contact({id,username,onClick,selected,online}) {
  return (
    <div key={id} onClick={() => onClick(id)}
         className={"border-b border-black-100 flex items-center gap-2 cursor-pointer "+(selected ? 'bg-pink-50' : '')}>
      {selected && (
        <div className="w-1 bg-pink-500 h-12 rounded-r-md"></div>
      )}
      <div className="flex gap-2 py-2 pl-4 items-center">
        <Avatar online={online} username={username} userId={id} />
        <span className="text-black-800">{username}</span>
      </div>
    </div>
  );
}