const UserCard = ({users}) => {
  console.log(users);

  return (
    <div className="card">
      <h2>{users.name.title} {users.name.first} {users.name.last}</h2>
      <img src={users.picture.medium} alt="user image" />
      <div className="user-info">
        <span><i className='bx bx-envelope'></i>{users.email}</span>
        <span><i className='bx bx-phone'></i>{users.cell}</span>
        <span><i className='bx bx-map'></i>{users.location.country} {users.location.city}</span>
      </div>
    </div>
  );
};
export default UserCard;
