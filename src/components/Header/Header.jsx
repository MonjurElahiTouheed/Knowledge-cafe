import profile3 from '../../assets/images/profile3.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile3} alt="" />
        </header>
    );
};

export default Header;