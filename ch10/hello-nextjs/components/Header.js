import Link from 'next/link';

const Header = () => (
    <div>
        <Link href='/'><a>首页</a></Link>
        <Link href='/list'><a>列表</a></Link>
    </div>
)

export default Header;