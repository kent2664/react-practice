import CustomHook from "./CustomHook";
export default function Child({propFunc ,count}){
    propFunc();
    const [userName, setUserName] = CustomHook('Guest');
    return(
        <>
         <p>This is Child {count}</p>

         <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter the Name"
      />
      <p>saved: {userName}</p>
        </>
    )
}