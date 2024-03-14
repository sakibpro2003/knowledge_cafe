import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between'>
      <h1 className='text-6xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;