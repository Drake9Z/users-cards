const UserCard = ({users, index}) => {

  console.log(index);

  const gradients = [
    "radial-gradient(#A531DC, #4300B1 )",
    "radial-gradient(#FFED46, #FF7EC7)",
    "radial-gradient(#b0e633, #53ef7d)",
    "radial-gradient(#7CF7FF, #4B73FF)",
    "radial-gradient(#FF9D7E, #4D6AD0)",
    "radial-gradient(#97E8B5, #5CB67F)",
    "radial-gradient(#FF896D, #D02020)",
    "radial-gradient(#FF3F3F, #063CFF)",
    "radial-gradient(#4063BC, #6B0013)",
    "radial-gradient(#FFC328, #E20000)",
  ];

  return (
    <div className="card">
      <div className="circle" style={{ background: gradients[index]}}></div>
      <div className="circle" style={{ background: gradients[index]}}></div>
      <div className="card-inner">
        <img src={users.picture.large} alt="user image" />
        <h2>
          {users.name.title} {users.name.first} {users.name.last}
        </h2>
        <ul className="user-info">
          <li>
            <i className="bx bx-envelope"></i>
            {users.email}
          </li>
          <li>
            <i className="bx bx-phone"></i>
            {users.cell}
          </li>
          <li>
            <i className="bx bx-map"></i>
            {users.location.country} {users.location.city}
          </li>
        </ul>
      </div>

    </div>
  );
};
export default UserCard;
